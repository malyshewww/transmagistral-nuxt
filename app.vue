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
</script>

<style lang="scss">
@import "~/assets/scss/nullstyle.scss";
@import "~/assets/scss/keyframes.scss";
@import "~/assets/scss/common.scss";
@import "~/assets/scss/fonts.scss";
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
