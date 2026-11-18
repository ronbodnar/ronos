import { ProgramMetadata } from "../features/program/types"

import CoreFlowArchitectureDark from "@assets/software-center/coreflow-architecture-diagram-dark-mode.webp"
import CoreFlowArchitectureLight from "@assets/software-center/coreflow-architecture-diagram-light-mode.webp"
import CoreFlowContractDetailsDark from "@assets/software-center/coreflow-contract-details-dark-mode.webp"
import CoreFlowContractDetailsLight from "@assets/software-center/coreflow-contract-details-light-mode.webp"
import CoreFlowDocuments from "@assets/software-center/coreflow-documents.webp"
import CoreFlowGovernance from "@assets/software-center/coreflow-governance.webp"
import CoreFlowLogViewerDark from "@assets/software-center/coreflow-log-viewer-dark-mode.webp"
import CoreFlowLogViewerLight from "@assets/software-center/coreflow-log-viewer-light-mode.webp"

import GridOfWordsGameboard from "@assets/software-center/grid-of-words-gameboard.webp"
import GridOfWordsStatistics from "@assets/software-center/grid-of-words-statistics.webp"
import GridOfWordsHowToPlay from "@assets/software-center/grid-of-words-how-to-play.webp"

import TMSDashboardDark from "@assets/software-center/tms-dashboard-dark-mode.png"
import TMSDashboardLight from "@assets/software-center/tms-dashboard-light-mode.png"
import TMSAnalyticsDark from "@assets/software-center/tms-analytics-dark-mode.png"
import TMSAnalyticsLight from "@assets/software-center/tms-analytics-light-mode.png"

/**
 * DEVELOPER PROGRAMS
 * Custom developer-made programs that are shown in the Software Center automatically.
 * Launcher metadata is automatically generated from these programs.
 */
export const DEVELOPER_PROGRAMS_META = [
  {
    id: "deliveryrouter_cli",
    name: "DeliveryRouter",
    icon: "DeliveryRouterCLI",
    category: "developer",
    runnable: false,
    details: {
      description: {
        short:
          "A Python tool for efficiently routing packages using the Nearest Neighbor algorithm.",
        long: "DeliveryRouter simulates multi-truck package routes using the nearest-neighbor algorithm. It handles capacity, departure times, and deadlines, with a custom hash table for package lookup and timestamped delivery reports.",
      },
      githubUrl: "https://github.com/ronbodnar/deliveryrouter-cli",
      technologies: ["Python"],
      year: { start: 2023, end: 2023 },
    },
  },

  {
    id: "grid_of_words",
    name: "Grid of Words",
    icon: "GridOfWords",
    category: "developer",
    background: {
      color: "#4B5563",
    },
    details: {
      description: {
        short:
          "A Wordle-inspired SPA built with a custom vanilla JavaScript frontend and Node.js backend, implementing dynamic state management and a responsive UI.",

        long: "A framework-free word game with a vanilla JavaScript frontend and Node.js backend. It includes configurable games, account authentication, and player statistics.",
      },
      imageUrls: [GridOfWordsGameboard, GridOfWordsStatistics, GridOfWordsHowToPlay],
      githubUrl: "https://github.com/ronbodnar/grid-of-words",
      publicUrl: "https://play.ronbodnar.com/",
      technologies: ["JavaScript", "NodeJS", "Express", "ChartJS", "MongoDB", "Docker"],
      year: { start: 2024 },
    },
  },

  {
    id: "league_of_legends_log_parser",
    name: "League of Legends Log Parser",
    icon: "LeagueOfLegendsLogParser",
    category: "developer",
    runnable: false,
    details: {
      description: {
        short:
          "A legacy Java tool for parsing League of Legends game logs to extract detailed match statistics.",
        long: "A Java utility that parsed legacy League of Legends client logs into structured match data and statistics, before official APIs were widely available.",
      },
      githubUrl: "https://github.com/ronbodnar/league-of-legends-log-parser",
      technologies: ["Java"],
      year: { start: 2014, end: 2014 },
    },
  },

  {
    id: "loan_eligibility",
    name: "Loan Eligibility ML",
    icon: "LoanEligibilityML",
    category: "developer",
    runnable: false,
    details: {
      description: {
        short: "Machine learning-based loan eligibility prediction using Python and Scikit-Learn.",
        long: "A Python and scikit-learn project exploring loan eligibility prediction. It covers data cleaning, class balancing, model comparison, and Random Forest tuning.",
      },
      githubUrl: "https://github.com/ronbodnar/loan-eligibility-ml",
      technologies: ["Python", "ScikitLearn", "NumPy", "Pandas"],
      year: { start: 2023, end: 2023 },
    },
  },

  {
    id: "mtg_virtual_binder",
    name: "MTG Virtual Card Binder",
    icon: "MTGVirtualBinder",
    category: "developer",
    runnable: false,
    details: {
      description: {
        short: "A tool for creating virtual card binders for Magic: The Gathering",
        long: "A PHP and MySQL collection manager for organizing Magic: The Gathering cards across binders, decks, and storage. It integrated external card data and pricing.",
      },
      githubUrl: "https://github.com/ronbodnar/mtg-virtual-binder",
      technologies: ["PHP", "JQuery", "JavaScript", "MySQL"],
      year: { start: 2014, end: 2015 },
    },
  },

  {
    id: "ng_modular_forms",
    name: "ng-modular-forms",
    icon: "NGModularForms",
    category: "developer",
    runnable: false,
    background: {
      color: "#0F3D2A",
    },
    details: {
      description: {
        short:
          "A structured Angular forms architecture for building scalable, maintainable, and reusable reactive form systems.",
        long: "An Angular library for structuring complex reactive forms. It separates orchestration, cross-field behavior, API mapping, and reusable inputs into focused components.",
      },
      publicUrl: "https://ngmf.ronbodnar.com/",
      githubUrl: "https://github.com/ronbodnar/ng-modular-forms",
      technologies: ["Angular", "TypeScript", "RxJS", "TailwindCSS", "Vite"],
      year: { start: 2026 },
    },
  },

  {
    id: "oed_parser",
    name: "OED Parser",
    icon: "OEDParser",
    category: "developer",
    runnable: false,
    details: {
      description: {
        short:
          "A Python parser for extracting words, definitions, and parts of speech from the Oxford English Dictionary.",

        long: "A Python CLI utility that fetches and parses Oxford English Dictionary entries into CSV, text, or JSON, with optional MySQL import.",
      },
      githubUrl: "https://github.com/ronbodnar/oed-parser",
      technologies: ["Python", "MySQL"],
      year: { start: 2024, end: 2024 },
    },
  },

  {
    id: "ronos",
    name: "RonOS",
    icon: "RonOS",
    category: "developer",
    background: {
      color: "#0F172A",
    },
    details: {
      description: {
        short:
          "A modular React web application implementing OS-like architecture, including: processes, programs, launchers, and layered window management.",
        long: "A web-based desktop simulation where projects run as apps inside a windowed environment. It features process management, desktop and mobile layouts, and runtime theming.",
      },
      githubUrl: "https://github.com/ronbodnar/ronos",
      publicUrl: "https://ronbodnar.com/",
      technologies: ["React", "TypeScript", "TailwindCSS"],
      year: { start: 2025 },
    },
  },

  {
    id: "coreflow",
    name: "CoreFlow",
    icon: "CoreFlow",
    category: "developer",
    background: {
      color: "#1666af",
    },
    details: {
      description: {
        short:
          "An operations platform for funeral and memorial providers, connecting service packages, contracts, collections, people, and bilingual documents.",

        long: "CoreFlow connects service packages, contracts and amendments, scheduled collections, dashboards, customer and staff records, audit history, bilingual documents, and service-title tracking. It helps funeral and memorial-service teams coordinate daily work and keep service details and follow-ups together.",
      },
      imageUrls: [
        CoreFlowContractDetailsDark,
        CoreFlowContractDetailsLight,
        CoreFlowArchitectureDark,
        CoreFlowArchitectureLight,
        CoreFlowDocuments,
        CoreFlowGovernance,
        CoreFlowLogViewerDark,
        CoreFlowLogViewerLight,
      ],
      publicUrl: "https://coreflow.ronbodnar.com/",
      technologies: [
        "Angular",
        "TypeScript",
        "Java",
        "Spring",
        "MySQL",
        "NodeJS",
        "Nginx",
        "Docker",
        "GitHubActions",
      ],
      year: { start: 2024 },
    },
  },

  {
    id: "tms",
    name: "TMS",
    icon: "TMS",
    category: "developer",
    details: {
      description: {
        short:
          "A logistics management prototype built to handle complex workflows and domain-specific operations.",

        long: "A web-based transportation management system for driver assignments, yard operations, and shipment tracking. Dashboards surface facility wait times, shipment status, and delay history.",
      },
      imageUrls: [TMSDashboardDark, TMSDashboardLight, TMSAnalyticsDark, TMSAnalyticsLight],
      technologies: ["PHP", "JavaScript", "JQuery", "ChartJS"],
      publicUrl: "https://tms.ronbodnar.com/",
      githubUrl: "https://github.com/ronbodnar/transportation-management",
      year: { start: 2022, end: 2023 },
    },
  },

  {
    id: "twitch_buddy",
    name: "Twitch Buddy",
    icon: "TwitchBuddy",
    category: "developer",
    runnable: false,
    details: {
      description: {
        short: "Minimal Twitch dashboard in Java Swing",
        long: "A Java Swing dashboard for monitoring Twitch streams, featured games, and trending channels, with live viewer and stream updates.",
      },
      technologies: ["Java"],
      githubUrl: "https://github.com/ronbodnar/twitch-buddy",
      year: { start: 2013, end: 2013 },
    },
  },

  {
    id: "twitch_chat_irc",
    name: "Twitch Chat IRC",
    icon: "TwitchChatIRC",
    category: "developer",
    runnable: false,
    details: {
      description: {
        short: "Twitch chat IRC interface in Java",

        long: "An early Java IRC client for Twitch chat, built around persistent TCP connections, protocol heartbeats, and parsing user metadata from messages.",
      },
      technologies: ["Java"],
      githubUrl: "https://github.com/ronbodnar/twitch-chat-irc",
      year: { start: 2013, end: 2014 },
    },
  },

  {
    id: "twitch_raffle",
    name: "Twitch Raffle",
    icon: "TwitchRaffle",
    category: "developer",
    runnable: false,
    details: {
      description: {
        short: "Host live raffles on Twitch chat",
        long: "A Java app for running live Twitch chat raffles. It tracks eligible participants, prevents duplicate entries, and selects winners, with follower-only options.",
      },
      technologies: ["Java"],
      githubUrl: "https://github.com/ronbodnar/twitch-raffle",
      year: { start: 2013, end: 2014 },
    },
  },
] as const satisfies ProgramMetadata[]
