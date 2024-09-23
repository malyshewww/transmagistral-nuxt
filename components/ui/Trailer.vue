<template lang="pug">
	.trailer(ref="trailer")
		.trailer__content
			.trailer__text смотреть видео
</template>

<script setup>
const { $gsap: gsap } = useNuxtApp();

const positionY = ref(0);

onMounted(() => {
   if (window.matchMedia("(min-wdith: 1024px)")) {
      const { bodyScrollBar } = useScrollbar();
      bodyScrollBar.addListener(({ offset }) => {
         positionY.value = offset.y;
      });

      const trailer = document.querySelector(".trailer");
      if (trailer) {
         window.addEventListener("mousemove", (event) => {
            const style = window.getComputedStyle(
               document.querySelector(".scroller")
            );
            const matrix = new WebKitCSSMatrix(style.transform);
            gsap.to(trailer, {
               x: event.clientX,
               y: event.clientY + positionY.value - matrix.m42,
               yPercent: -50,
               xPercent: -50,
               duration: 0.1,
            });
         });
      }
   }
});
</script>

<style lang="scss">
.trailer {
   width: 152px;
   height: 152px;
   position: fixed;
   background-color: var(--bg-bg-red);
   left: 0px;
   top: 0px;
   z-index: 1000;
   pointer-events: none;
   opacity: 0;
   transition: opacity $time;
   color: var(--white);
   pointer-events: none;
   border-radius: 50%;
   &::before {
      content: "";
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      transform: scale(0.5);
      transform-origin: center;
      transition: transform $time;
   }
   @media (hover: hover) {
      display: none;
   }
   @media screen and (max-width: $xl) {
      display: none;
   }
   &.active {
      opacity: 1;
      &::before {
         transform: scale(1);
      }
   }
   &__content {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 4px;
      width: 100%;
      height: 100%;
      font-weight: 600;
      font-size: 14px;
      line-height: 18px;
      color: currentColor;
   }
}
</style>
