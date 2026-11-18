export function Loading({ message, progress }: { message: string; progress?: number }) {
  const determinate = progress !== undefined

  return (
    <div className="relative flex flex-col justify-center items-center w-full h-full bg-black text-stone-200">
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-4xl font-light tracking-[0.35em] pl-[0.35em] text-white">
          Ron<span className="font-semibold text-accent">OS</span>
        </h1>

        <div
          role="progressbar"
          aria-label={message}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={determinate ? Math.round(progress * 100) : undefined}
          className="relative h-0.75 w-56 overflow-hidden rounded-full bg-white/10"
        >
          {determinate ? (
            <div
              className="h-full rounded-full bg-accent shadow-[0_0_12px_var(--color-accent)] transition-[width] duration-500 ease-out"
              style={{ width: `${progress * 100}%` }}
            />
          ) : (
            <div className="absolute inset-y-0 left-0 w-2/5 rounded-full bg-accent shadow-[0_0_12px_var(--color-accent)] animate-loading-bar" />
          )}
        </div>

        <p className="-mt-6 text-sm tracking-wider text-stone-300">{message}</p>
      </div>
    </div>
  )
}
