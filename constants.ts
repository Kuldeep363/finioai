import { Additem, Alarm, Bank, CardPos, Chart, Coin1, Cpu, DocumentDownload, Driver, KeySquare, ReceiptItem, SecurityCard, ShieldTick, TrendUp, Wallet1 } from "iconsax-react";
import { title } from "process";

export const FEATURES = [
  {
    label: "Centralized Dashboard",
    title: "All Your Bank Accounts in One Place",
    description:
      "Easily view and manage all your bank accounts from a single, intuitive dashboard. Get real-time balance updates and a unified financial overview without switching between apps",
    img: `centralized-dashboard.png`,
    features: [
      {
        title: "Unified Dashboard",
        description:
          "Access all linked bank accounts and real-time balances in one simple interface.",
        icon: Driver,
      },
      {
        title: "Supports 500+ Banks",
        description:
          "Seamlessly connect accounts from over 500+ banks for a hassle-free banking experience.",
        icon: Bank,
      },
      {
        title: "Real-Time Balance Updates",
        description:
          "Stay informed with live balance updates across all your linked accounts.",
        icon: Chart,
      },
      {
        title: "Easy Transactions & Tracking",
        description:
          "Monitor transactions and spending patterns effortlessly to stay on top of your finances.",
        icon: CardPos,
      },
    ],
  },
  {
    label: "Automated Reports",
    title: "Financial Reports Without the Manual Work",
    description:
      "Generate accurate, AI-powered financial reports with zero manual effort. Stay audit-ready and informed at all times.",
    img: `billing.png`,
    features: [
      {
        title: "AI-Generated Reports",
        description:
          "From cash flow to monthly statements, reports are generated automatically using AI for high accuracy.",
        icon: Cpu,
      },
      {
        title: "GST-Compliant Invoices",
        description:
          "Easily generate and manage tax-compliant invoices for vendors and clients.",
        icon: ReceiptItem,
      },
      {
        title: "Download & Share",
        description:
          "Export reports in multiple formats (PDF, Excel) and share with stakeholders or auditors in one click.",
        icon: DocumentDownload,
      },
      {
        title: "Custom Report Builder",
        description:
          "Create reports tailored to your business needs with easy drag-and-drop customization.",
        icon: Additem,
      },
    ],
  },
  {
    label: "Treasury Management",
    title: "Put Your Idle Cash to Work",
    description:
      "Optimize your company’s surplus funds with built-in investment options like FDs, government bonds, and other secure instruments—right from your dashboard.",
    img: `centralized-dashboard.png`,
    features: [
      {
        title: "Smart Investment Options",
        description:
          "Access curated investment vehicles that align with your company’s risk appetite and liquidity needs.",
        icon: Coin1,
      },
      {
        title: "Seamless Allocation",
        description:
          "Allocate surplus funds with ease, without the need for external platforms or complex paperwork.",
        icon: Wallet1,
      },
      {
        title: "Live Performance Tracking",
        description:
          "Monitor how your treasury investments are performing in real time with insightful analytics.",
        icon: TrendUp,
      },
      {
        title: "Compliance Ready",
        description:
          "All investments follow regulatory compliance, ensuring your funds are safe and legally protected.",
        icon: Bank,
      },
    ],
  },
  {
    label: "Enhanced Security",
    title: "Bank-Level Security for Every Transaction",
    description:
      "Your financial data and transactions are protected with advanced encryption, real-time fraud detection, and regulatory compliance.",
    img: `security.png`,
    features: [
      {
        title: "End-to-End Encryption",
        description:
          "Your data is protected at all times—during transfer, at rest, and in use.",
        icon: SecurityCard,
      },
      {
        title: "Multi-Factor Authentication",
        description:
          "Secure login with multiple layers of identity verification.",
        icon: KeySquare,
      },
      {
        title: "Real-Time Fraud Detection",
        description:
          "AI continuously monitors for suspicious activities to protect your funds and information..",
        icon: Alarm,
      },
      {
        title: "Regulatory Compliance",
        description:
          "Adheres to RBI, GDPR, and other global financial data security standards.",
        icon: ShieldTick,
      },
    ],
  },
];

export const FAQ = [
  {
    title: "What is Fino.ai?",
    description:
      "Fino.ai is an AI-powered business banking platform that helps SMEs and startups manage multiple bank accounts, automate financial operations, and optimize cash flow from a single dashboard.",
  },
  {
    title: "What if I need help using Fino.ai?",
    description:
      "If you need assistance, our support team is available via email and chat to help you with any queries or technical issues.",
  },
  {
    title: "Can I automate payments and invoicing?",
    description:
      "Yes, with Fino.ai, you can schedule payments, automate vendor payouts, and generate GST-compliant invoices, reducing manual effort and streamlining financial workflows.",
  },
  {
    title: "Can I connect multiple bank accounts?",
    description:
      "Absolutely! Fino.ai allows you to link multiple bank accounts to a single dashboard, providing a unified view of your financial position in real time.",
  },
  {
    title: "How does Fino.ai help my business?",
    description:
      "Fino.ai simplifies financial management by offering real-time account monitoring, automated payments, AI-driven insights, cross-border transactions, and smart investment tools, enabling businesses to save time and make better financial decisions.",
  },
  {
    title: "What AI features does Fino.ai offer?",
    description:
      "Fino.ai uses AI to predict cash flow trends, automate invoice categorization, optimize expenses, and provide actionable financial insights to improve decision-making.",
  },
  {
    title: "How much does Fino.ai cost?",
    description:
      "Fino.ai offers multiple pricing plans, including Basic (free), Premium, Pro, and Enterprise. Each plan includes different levels of features and support to match your business needs.",
  },
  {
    title: "Is Fino.ai safe and secure?",
    description:
      "Yes, Fino.ai follows bank-grade security protocols, data encryption, and compliance with financial regulations, ensuring your business transactions remain safe and protected from fraud.",
  },
  {
    title: "Does Fino.ai integrate with accounting software?",
    description:
      "Yes, Fino.ai integrates seamlessly with popular accounting software to ensure smooth financial tracking and reporting.",
  },
];