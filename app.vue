<template lang="pug">
	NuxtLayout
			NuxtErrorBoundary
				NuxtPage
</template>

<script setup>
const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();

const nuxtApp = useNuxtApp();
nuxtApp.hook("page:start", () => {
   ScrollTrigger.update();
});

onMounted(() => {});

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
</style>
