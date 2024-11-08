// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
import autoprefixer from "autoprefixer";
import postCssSortMediaQueries from "postcss-sort-media-queries";

export default defineNuxtConfig({
   compatibilityDate: "2024-04-03",
   devtools: { enabled: true },
   components: [
      // импорт компонентов, основываясь только на их имени, а не на пути (pathPrefix: false)
      {
         path: "~/components",
         pathPrefix: true,
      },
      // Импорт компонентов из других директорий, помимо components
      { path: "~/sections", pathPrefix: true },
   ],
   // modules: ["@pinia/nuxt"],
   modules: [
      // [
      //    "nuxt-mail",
      //    {
      //       message: {
      //          to: process.env.NUXT_MAIL_TARGET,
      //       },
      //       smtp: {
      //          host: process.env.NUXT_MAIL_SMTP,
      //          port: process.env.NUXT_MAIL_PORT,
      //          secure: true,
      //          auth: {
      //             user: process.env.NUXT_MAIL_USERNAME,
      //             pass: process.env.NUXT_MAIL_PASSWORD,
      //          },
      //       },
      //    },
      // ],
      "@nuxt/image",
      "@pinia/nuxt",
      "@nuxt/eslint",
   ],
   devServer: {
      port: 3001,
   },
   runtimeConfig: {
      public: {
         apiBase: process.env.NUXT_PUBLIC_API_BASE_URL,
      },
   },
   app: {
      rootId: "app",
      head: {
         htmlAttrs: {
            lang: "ru",
         },
         link: [
            { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
            { rel: "shortcut icon", href: "/favicon.ico" },
            {
               rel: "icon",
               type: "image/png",
               sizes: "32x32",
               href: "/favicon-32x32.png",
            },
            {
               rel: "icon",
               type: "image/png",
               sizes: "16x16",
               href: "/favicon-16x16.png",
            },
            {
               rel: "apple-touch-icon",
               type: "image/png",
               sizes: "180x180",
               href: "/apple-icon-180x180.png",
            },
            {
               rel: "preload",
               href: "/fonts/PTRootUI-Regular.woff2",
               as: "font",
               type: "font/woff2",
               crossorigin: "anonymous",
            },
         ],
         meta: [
            { charset: "utf-8" },
            {
               name: "viewport",
               content: "width=device-width, initial-scale=1",
            },
            {
               "http-equiv": "X-UA-Compatible",
               content: "IE=edge",
            },
            {
               name: "viewport",
               content: "width=device-width, initial-scale=1, user-scalable=no",
            },
            {
               hid: "apple-mobile-web-app-capable",
               name: "apple-mobile-web-app-capable",
               content: "yes",
            },
            {
               hid: "format-detection",
               name: "format-detection",
               content: "telephone=no",
            },
            {
               hid: "format-detection",
               name: "format-detection",
               content: "address=no",
            },
            {
               hid: "format-detection",
               name: "format-detection",
               content: "email=no",
            },
            {
               hid: "format-detection",
               name: "format-detection",
               content: "date=no",
            },
         ],
      },
   },
   ssr: false,
   vite: {
      server: {
         port: 3001,
         strictPort: true,
         hmr: {
            port: 3001,
         },
      },
      vue: {
         script: {
            defineModel: true,
            propsDestructure: true,
         },
      },
      css: {
         postcss: {
            plugins: [
               postCssSortMediaQueries({ sort: "desktop-first" }),
               autoprefixer({
                  overrideBrowserslist: ["last 3 versions", "ie >= 10"],
               }),
            ],
         },
         preprocessorOptions: {
            scss: {
               additionalData:
                  '@use "sass:math"; @use "~/assets/scss/mixins.scss" as *; @import "~/assets/scss/variables.scss";',
               silenceDeprecations: ["legacy-js-api"],
            },
         },
      },
   },
});
