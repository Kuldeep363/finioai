import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        green: "var(--green)",
        red: "var(--red)",
        yellow: "var(--yellow)",
        white: "hsl(var(--white))",
        black: "var(--black)",
        "hsl-black": "hsl(var(--hsl-black))",
        primary: "hsl(var(--primary))",
        "primary-hover": "var(--primary-hover)",
        "primary-light": "var(--primary-light)",
        "primary-light-hover": "var(--primary-light-hover)",
        "": "var(--primary-light)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        "sub-text": "var(--sub-text)",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "editor-primary": {
          DEFAULT: "hsl(var(--editor-primary))",
          foreground: "hsl(var(--editor-primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      screens: {
        "3xl": "1700px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        figtree: ["Figtree"],
        figtreeItalic: ["Figtree italic"],
      },
      boxShadow: {
        primary_shadow: "0px 8px 10px 0px #6258E973",
        primary_shadow_light: "0px 3px 7px 0px #6258E973",
        gray_shadow: "0px 0px 10px 0px #dddddd94",
      },
    },
  },

  plugins: [],
} satisfies Config;
