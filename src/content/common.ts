import type { Locale } from "@/lib/i18n";

export type NavItem = {
  href: string;
  label: string;
};

export type ShellCopy = {
  brandDeck: string;
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
    nav: [
      { href: "#home", label: "Inicio" },
      { href: "#que-buscamos", label: "Qué buscamos" },
      { href: "#que-ofrecemos", label: "Qué ofrecemos" },
      { href: "#como-trabajamos", label: "Cómo trabajamos" },
      { href: "#proceso", label: "Proceso" },
      { href: "#contacto", label: "Aplicación" },
    ],
    utilities: {
      playbook: "Playbook interno",
      financialModel: "Modelo financiero",
      access: "Acceso protegido",
    },
    footer: {
      line: "Cataliza Capital selecciona un aliado por año para construir negocio sano, elevar cultura y sostener impacto real.",
      note: "Diseñado para Vercel, contenido local y colaboración bilingüe.",
    },
  },
  en: {
    brandDeck:
      "Operating platform, catalytic credit, and community for projects that raise culture and community.",
    nav: [
      { href: "#home", label: "Home" },
      { href: "#what-we-seek", label: "What we seek" },
      { href: "#what-we-offer", label: "What we offer" },
      { href: "#how-we-work", label: "How we work" },
      { href: "#process", label: "Process" },
      { href: "#contact", label: "Apply" },
    ],
    utilities: {
      playbook: "Internal playbook",
      financialModel: "Financial model",
      access: "Protected access",
    },
    footer: {
      line: "Cataliza Capital selects one ally per year to build healthy businesses, lift culture, and sustain real impact.",
      note: "Designed for Vercel, local content, and bilingual collaboration.",
    },
  },
};
