import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    fallback: {
      en: "es"
    },
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [tailwind()],
});
