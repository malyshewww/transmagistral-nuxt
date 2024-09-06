<template lang="pug">
	NuxtLayout
			NuxtErrorBoundary
				NuxtPage
</template>

<script setup>
// import Lenis from "lenis";
// import "lenis/dist/lenis.css";
const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();

// const lenis = new Lenis();

// lenis.on("scroll", (e) => {
//    console.log(e);
// });
// lenis.on("scroll", ScrollTrigger.update);

// gsap.ticker.add((time) => {
//    lenis.raf(time * 1000);
// });
// gsap.ticker.lagSmoothing(0);

// function raf(time) {
//    lenis.raf(time);
//    requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);

const nuxtApp = useNuxtApp();
nuxtApp.hook("page:start", () => {
   ScrollTrigger.update();
});

onMounted(() => {
   // window.onscroll = function () {
   //    changeImage();
   // };
   // function changeImage() {
   //    var scroll = window.scrollY + window.innerHeight / 3;
   //    [...document.querySelectorAll(".section")].forEach((el) => {
   //       el.classList.remove("active");
   //       if (
   //          el.offsetTop <= scroll &&
   //          el.offsetTop + el.offsetHeight > scroll
   //       ) {
   //          el.classList.add("active");
   //       }
   //    });
   // }
   // changeImage();
   /* SMOOTH SCROLL */
   // const scroller = new LocomotiveScroll({
   //   el: document.querySelector(".container"),
   //   smooth: true
   // });
   // scroller.on("scroll", ScrollTrigger.update);
   // ScrollTrigger.scrollerProxy(".container", {
   //   scrollTop(value) {
   //     return arguments.length
   //       ? scroller.scrollTo(value, 0, 0)
   //       : scroller.scroll.instance.scroll.y;
   //   },
   //   getBoundingClientRect() {
   //     return {
   //       left: 0,
   //       top: 0,
   //       width: window.innerWidth,
   //       height: window.innerHeight
   //     };
   //   }
   // });
   // ScrollTrigger.addEventListener("refresh", () => scroller.update());
   // ScrollTrigger.refresh();
});

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
