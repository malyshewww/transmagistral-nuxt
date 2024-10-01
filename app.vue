<template lang="pug">
	NuxtLayout
      NuxtErrorBoundary
         NuxtPage
</template>

<script setup>
useHead({
   title: "Трансмагистраль",
   bodyAttrs: {
      class: "home",
   },
});
// const isLoading = ref(false);
// const nuxtApp = useNuxtApp();
// nuxtApp.hook("page:start", () => {
//    console.log("start");
//    isLoading.value = true;
// });
// nuxtApp.hook("page:finish", () => {
//    console.log("finish");
//    isLoading.value = true;
// });
</script>

<style lang="scss">
@import "~/assets/scss/nullstyle.scss";
@import "~/assets/scss/keyframes.scss";
@import "~/assets/scss/common.scss";
@import "~/assets/scss/fonts.scss";

// CSS Variables
:root {
   --font-size: 18px;
   // Основные Цвета
   --main-color: #31373b;
   --main-color-rgb: 49, 55, 59;
   --white-color: #ffffff;
   --black: #000;
   --white: #ffffff;

   // Шрифты
   --font-weight: 400;
   --font-family: "PT Root UI", sans-serif;
   --second-family: "Bebas Neue Cyrillic", sans-serif;
   --shadow: 0 2px 5px 0 rgba(25, 51, 99, 0.05);
   --gradient: linear-gradient(90deg, #255cae 0%, #b7d8e9 100%);
   --page-gradient: linear-gradient(90deg, #255cae 0%, #b7d8e9 100%);

   --bg-red-title: #eb2e44;
   --bg-bg-red: #ea2d43;
   --bg-bg-red-static: #ea2d43;
   --bg-bg-red-changed: #ea2d43;
   --bg-bg-grey: #f4f6fc;
   --bg-bg-grey-dark: #eceff6;
   --bg-bg-grey-dark-static: #eceff6;
   --bg-bg-white: #fff;
   --bg-bg-white-rgb: 255, 255, 255;
   --bg-bg-dark: #0d235a;
   --bg-bg-red-6: rgba(234, 45, 67, 0.06);
   --bg-bg-red-6-changed: rgba(234, 45, 67, 0.06);
   --bg-bg-white-15: rgba(255, 255, 255, 0.15);
   --text-text-primary: #0d235a;
   --text-text-secondary: #31373b;
   --text-text-secondary-changed: #31373b;
   --text-text-secondary-rgb: 49, 55, 59;
   --text-text-contrast: #fff;
   --text-text-accent: #ea2d43;
   --stroke-stroke-accent: #ea2d43;
   --stroke-line-dark: #eceff6;
   --stroke-line-white: #fff;
   --stroke-stroke-grey: #cfd3de;
   --stroke-stroke-grey-changed: #cfd3de;
   --stroke-stroke-grey-line-changed: #cfd3de;
   --stroke-stroke-dark: #0d235a;
   --stroke-stroke-grey-dark: #7f8284;
   --stroke-stroke-grey-dark-rgb: 127, 130, 132;
   --stroke-stroke-grey-dark-rgb-static: 127, 130, 132;
   --stroke-stroke-grey-dark-static: #7f8284;
   --button-hover-dark: #11141b;
   --button-active-dark: #2c478b;
   --button-disabled-dark: #b0b4bc;
   --button-hover-white: #eceff6;
   --button-active-white: #d8dbe2;
   --button-disabled-white: 255, 255, 255;
   --bg-bg-dark-contacts: #0d235a;
   --bg-footer-nav: #ffffff;
   --stroke-stroke-grey-circle: #cfd3de;
   --bgOpacity: 0;
   --text-link-white-hover: #9be1ff;
   --text-link-dark-hover: #1941a5;
}
html.dark {
   --bg-bg-dark: #ffffff;
   --bg-red-title: #ffffff;
   --text-text-secondary: #ffffff;
   --button-hover-dark: #eceff6;
   --button-active-dark: #d8dbe2;
   --bg-footer-nav: #f4f6fc;
   --bg-bg-red-6-changed: rgba(255, 255, 255, 0.15);
   --bg-bg-red-changed: #ffffff;
   --stroke-stroke-grey-changed: #c1d5e9;
   --stroke-stroke-grey-line-changed: #ffffff;
   --stroke-stroke-grey-circle: #ffffff;

   & .wrapper::before {
      opacity: 1;
   }
   & .main-contacts {
      & .section-title {
         color: var(--bg-bg-dark-contacts);
      }
      & .btn {
         background-color: var(--bg-bg-dark-contacts);
         @media (any-hover: hover) {
            &.btn-blue:hover,
            &:hover {
               background-color: #183377;
            }
            &.btn-blue:active,
            &:active {
               background-color: #2c478b;
            }
            &:disabled,
            &.disabled {
               background: #e6e6e6;
            }
         }
      }
   }
}
</style>
