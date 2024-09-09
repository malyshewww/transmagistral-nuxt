<template lang="pug">
	.client-card.anim-client-card(ref="animClientCard" v-for="item, index in 7")
		.client-card__image
			img(:src="`/images/clients/client-${item}.svg`", alt="лого клиента")
	.anim-client-card(ref="animClientCard")
		UiButton(buttonText="Стать нашим клиентом" classNames="btn-red" buttonType="button" @buttonClick="openPopupClient")
</template>

<script setup>
const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();
// const animClientCard = ref('')
const animation = () => {
   gsap.defaults({ ease: "power3" });
   gsap.set(".anim-client-card", { y: 100 });
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
      onLeave: (batch) =>
         gsap.set(batch, { opacity: 0, y: -100, overwrite: true }),
      onEnterBack: (batch) =>
         gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
      onLeaveBack: (batch) =>
         gsap.set(batch, { opacity: 0, y: 100, overwrite: true }),
      start: "20px bottom",
      end: "top top",
   });
   ScrollTrigger.addEventListener("refreshInit", () =>
      gsap.set(".anim-client-card", { y: 0 })
   );
};
onMounted(() => {
   // animation();
});
</script>

<style lang="scss">
.client-card {
   min-height: 233px;
   display: grid;
   place-items: center;
   border-radius: 14px;
   background: var(--bg-bg-grey);
   &:nth-child(4) {
      grid-column: 2 / 3;
   }
}
</style>
