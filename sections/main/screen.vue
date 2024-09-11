<template lang="pug">
	.main-screen.layers
		.main-screen__bg.layer(style="background-image: url('/images/main/bg.jpg')")
			//- img(src="/images/main/bg.jpg", alt="фон")
		.main-screen__bg-front.layer(style="background-image: url('/images/main/bg-front.png')")
			//- img(src="/images/main/bg-front.png", alt="горы")
		.main-screen__title Трансмагистраль
		.container
			.main-screen__body
				.main-screen__heading 
					.main-screen__icon 
						img(:src="`/images/icons/icon-best.svg`", alt="иконка")
					.main-screen__text Один из лучших перевозчиков Центральной России
				MainAdvantages
</template>

<script setup>
const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();
onMounted(() => {
   if (window.innerWidth > 1024) {
      const { bodyScrollBar } = useScrollbar();
      bodyScrollBar.addListener(({ offset }) => {
         document.documentElement.style.setProperty(
            "--scrollTop",
            `${offset.y}px`
         );
      });
   }
});
</script>

<style lang="scss">
:root {
   --index: calc(1vw + 1vh);
   --transition: transform 0.75s cubic-bezier(0.075, 0.5, 0, 0.9);
}
.layer {
   transition: var(--transition);
}
.main-screen {
   // min-height: 992px;
   display: grid;
   align-items: end;
   position: relative;
   // padding-bottom: 276px;
   min-height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
   text-align: center;
   overflow: hidden;
   position: relative;
   &__bg {
      transform: translate3d(0, calc(var(--scrollTop) / 1.7), 0);
      position: absolute;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      will-change: transform;
      z-index: 5;
   }
   &__bg-front {
      transform: translate3d(0, calc(var(--scrollTop) / 4.5), 0);
      position: absolute;
      height: 100%;
      width: 100%;
      background-size: cover;
      background-position: center;
      will-change: transform;
      z-index: 7;
   }
   &__bg,
   &__bg-front {
      & img {
         position: absolute;
         inset: 0;
         width: 100%;
         height: 100%;
      }
   }
   &__title {
      transform: translate3d(0, calc(var(--scrollTop) / 2.5), 0);
      will-change: transform;
      position: absolute;
      z-index: 6;
      font-family: var(--second-family);
      font-size: 280px;
      line-height: 1;
      text-align: center;
      inset: 0;
      top: 23.5%;
      color: var(--bg-bg-white);
      @media (max-width: 1919px) {
         font-size: 15vw;
      }
      @media screen and (max-width: $xl) {
         z-index: 7;
      }
      @media screen and (max-width: $md) {
         font-size: 15vw;
         top: 36vh;
      }
   }
   &__body {
      position: absolute;
      bottom: 28%;
      // height: 100%;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: flex-end;
      gap: 36px;
      // position: relative;
      z-index: 7;
      transform: translate3d(0, calc(var(--scrollTop) / 6), 0);
      will-change: transform;
      // padding-bottom: 100px;
      @media (max-height: 1080px) {
         bottom: 20%;
      }
      @media screen and (max-width: $md) {
         bottom: 15%;
         padding-right: 15px;
      }
      @media screen and (max-width: $sm) {
         bottom: auto;
      }
   }
   &__heading {
      display: flex;
      align-items: center;
      gap: 24px;
      @media screen and (max-width: $md) {
         gap: 8px;
         flex-direction: column;
         align-items: flex-start;
      }
   }
   &__icon {
      border-radius: 50%;
      display: grid;
      flex-shrink: 0;
      place-items: center;
      width: 100px;
      height: 100px;
      box-shadow: 0 4px 4px 0 rgba(25, 51, 99, 0.2);
      background-color: var(--stroke-stroke-accent);
      @media screen and (max-width: $md) {
         width: 54px;
         height: 54px;
         padding: 10px;
      }
   }
   &__text {
      font-weight: 500;
      font-size: 32px;
      line-height: 120%;
      color: var(--bg-bg-white);
      max-width: 460px;
      text-align: left;
      @media screen and (max-width: $md) {
         font-size: 20px;
         line-height: 1;
      }
   }
}
</style>
