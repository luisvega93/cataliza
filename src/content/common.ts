import type { PublicNavSectionKey } from "@/content/site-sections";
import type { Locale } from "@/lib/i18n";

export type NavItem = {
  section: PublicNavSectionKey;
  label: string;
};

export type ShellCopy = {
  brandDeck: string;
  skipLink: string;
  navLabel: string;
  menuLabel: string;
  closeMenuLabel: string;
  nav: NavItem[];
  utilities: {
    playbook: string;
    financialModel: string;
    access: string;
  };
  footer: {
    line: string;
    note: string;
  };
};

export const shellCopy: Record<Locale, ShellCopy> = {
  es: {
    brandDeck: "Plataforma operativa, crédito catalítico y comunidad para proyectos que elevan cultura y entorno.",
    skipLink: "Saltar al contenido",
    navLabel: "Navegación principal",
    menuLabel: "Abrir menú",
    closeMenuLabel: "Cerrar menú",
    nav: [
      { section: "home", label: "Inicio" },
      { section: "search", label: "Qué buscamos" },
      { section: "offer", label: "Qué ofrecemos" },
      { section: "work", label: "Cómo trabajamos" },
      { section: "process", label: "Proceso" },
      { section: "application", label: "Aplicación" },
    ],
    utilities: {
      playbook: "Playbook interno",
      financialModel: "Modelo financiero",
      access: "Acceso protegido",
    },
    footer: {
      line: "Cataliza Capital selecciona un aliado por año para construir negocio sano, elevar cultura y sostener impacto real.",
      note: "Diseñado para GitHub Pages, contenido local y colaboración bilingüe.",
    },
  },
  en: {
    brandDeck:
      "Operating platform, catalytic credit, and community for projects that raise culture and community.",
    skipLink: "Skip to content",
    navLabel: "Primary navigation",
    menuLabel: "Open menu",
    closeMenuLabel: "Close menu",
    nav: [
      { section: "home", label: "Home" },
      { section: "search", label: "What we seek" },
      { section: "offer", label: "What we offer" },
      { section: "work", label: "How we work" },
      { section: "process", label: "Process" },
      { section: "application", label: "Apply" },
    ],
    utilities: {
      playbook: "Internal playbook",
      financialModel: "Financial model",
      access: "Protected access",
    },
    footer: {
      line: "Cataliza Capital selects one ally per year to build healthy businesses, lift culture, and sustain real impact.",
      note: "Designed for GitHub Pages, local content, and bilingual collaboration.",
    },
  },
};
