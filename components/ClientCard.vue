<template lang="pug">
	.client-card.anim-client-card(ref="animClientCard" v-for="item, index in 5")
		.client-card__image
			picture 
				source(:srcset="`/images/clients/client-${item}.svg`" media="(min-width: 767.98px)")
				source(:srcset="`/images/clients/client-${item}-mobile.svg`" media="(min-width: 300px)")
				img(:src="`/images/clients/client-${item}.svg`", alt="лого клиента")
</template>

<script setup>
const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();
const animation = () => {
   const { bodyScrollBar, scroller } = useScrollbar();
   ScrollTrigger.scrollerProxy(".scroller", {
      scrollTop(value) {
         if (arguments.length) {
            bodyScrollBar.scrollTop = value;
         }
         return bodyScrollBar.scrollTop;
      },
   });
   bodyScrollBar.addListener(ScrollTrigger.update);
   ScrollTrigger.defaults({ scroller });
   gsap.defaults({ ease: "power3" });
   gsap.set(".anim-client-card", { y: 100, opacity: 0 });
   ScrollTrigger.batch(".anim-client-card", {
      interval: 0.1,
      batchMax: 3,
      onEnter: (batch) =>
         gsap.to(batch, {
            opacity: 1,
            y: 0,
            stagger: { each: 0.15, grid: [1, 3] },
            overwrite: true,
         }),
      // onLeave: (batch) =>
      //    gsap.set(batch, { opacity: 0, y: -100, overwrite: true }),
      onEnterBack: (batch) =>
         gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
      // onLeaveBack: (batch) =>
      //    gsap.set(batch, { opacity: 0, y: 100, overwrite: true }),
      start: "20px bottom",
      end: "top top",
   });
   ScrollTrigger.addEventListener("refreshInit", () =>
      gsap.set(".anim-client-card", { y: 0 })
   );
};
onMounted(() => {
   animation();
});
</script>

<style lang="scss">
.client-card {
   min-height: 233px;
   display: grid;
   place-items: center;
   border-radius: 14px;
   background: var(--bg-bg-grey);
   padding: 20px;
   &:nth-child(4) {
      grid-column: 2 / 3;
      @media screen and (max-width: $xxl) {
         grid-column: initial;
      }
   }
   @media screen and (max-width: $md) {
      min-height: 150px;
   }
}
</style>
