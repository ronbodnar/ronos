import { useEffect, lazy, Suspense, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Shutdown } from "./Shutdown"
import { LockScreen } from "./LockScreen"
import { Loading } from "./Loading"
import { osService } from "@core/services/osService"
import { useOSStore } from "@core/store/useOSStore"
import { useMediaQuery } from "@shared/hooks/useMediaQuery"
import { processService } from "@core/services/processService"
import { windowService } from "@features/window/services/windowService"
import { debugMessage } from "@shared/utils/utils"
import { themeService } from "@features/theme/services/themeService"

const MobileEnvironment = lazy(() => import("../../environments/mobile/MobileEnvironment"))
const DesktopEnvironment = lazy(
  () => import("../../environments/desktop/components/DesktopEnvironment"),
)

export function OperatingSystemRoot() {
  const status = useOSStore((s) => s.status)
  const isDesktop = useMediaQuery("(min-width: 1024px)")
  const [loading, setLoading] = useState(true)
  const [loadingMessage, setLoadingMessage] = useState("Starting RonOS...")
  const [progress, setProgress] = useState(0)

  debugMessage("Loading Operating System Root", status, isDesktop)

  useEffect(() => {
    let cancelled = false
    const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

    async function boot() {
      setLoading(true)
      setProgress(0.1)
      setLoadingMessage("Starting RonOS...")
      await wait(350)

      setProgress(0.4)
      setLoadingMessage("Loading theme assets...")
      await Promise.all([themeService.initializeTheme(), wait(500)])

      setProgress(0.75)
      setLoadingMessage("Preparing the desktop...")
      await wait(450)

      setProgress(1)
      setLoadingMessage("Finishing up...")
      await wait(400)

      if (!cancelled) setLoading(false)
    }

    boot()

    osService.setPlatform(isDesktop ? "desktop" : "mobile")
    windowService.closeAllWindows()
    processService.stopAllProcesses()

    return () => {
      cancelled = true
    }
  }, [isDesktop])

  const UIEnvironment = isDesktop ? DesktopEnvironment : MobileEnvironment

  const keyModifier = new Date().getTime()

  return (
    <div
      className={`fixed inset-0 flex flex-col h-screen w-screen wallpaper transition-all duration-600`}
    >
      {loading && <Loading message={loadingMessage} progress={progress} />}
      {!loading && (
        <Suspense fallback={<Loading message="Loading environment..." progress={1} />}>
          <AnimatePresence mode="wait">
            {status === "shutdown" && withMotion(<Shutdown />, `shutdown_${keyModifier}`)}
            {status === "locked" && withMotion(<LockScreen />, `locked_${keyModifier}`)}
            {status === "unlocked" && withMotion(<UIEnvironment />, `unlocked_${keyModifier}`)}
          </AnimatePresence>
        </Suspense>
      )}
    </div>
  )
}

function withMotion(children: React.ReactNode, key: string, transitionDelay: number = 0.4) {
  return (
    <motion.div
      key={key}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: transitionDelay }}
      className={"w-full h-full flex-1"}
    >
      {children}
    </motion.div>
  )
}
