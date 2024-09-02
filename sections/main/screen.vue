<template lang="pug">
	.main-screen
		.main-screen__bg
			img(src="/images/main/bg.jpg", alt="фон")
		.main-screen__bg-front
			img(src="/images/main/bg-front.png", alt="горы")
		.main-screen__title Трансмагистраль
		.container
			.main-screen__body
				.main-screen__heading 
					.main-screen__icon 
						img(src="/images/icons/icon-best.svg", alt="иконка")
					.main-screen__text Один из лучших перевозчиков Центральной России
				MainAdvantages
</template>

<style lang="scss">
.main-screen {
   min-height: 992px;
   display: grid;
   align-items: end;
   position: relative;
   padding-bottom: 276px;
   &__bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 5;
   }
   &__bg-front {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      z-index: 7;
      height: 573px;
      //   @media screen and (max-width: 1919px) {
      //      height: 57.8vh;
      //   }
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
      position: absolute;
      z-index: 6;
      font-family: $second-family;
      font-size: 280px;
      line-height: 1;
      text-align: center;
      inset: 0;
      top: 26%;
      color: $bg-bg-white;
      @media screen and (max-width: 1919px) {
         font-size: 24vh;
      }
   }
   &__body {
      height: 100%;
      display: grid;
      gap: 36px;
      position: relative;
      z-index: 7;
   }
   &__heading {
      display: flex;
      align-items: center;
      gap: 24px;
   }
   &__icon {
      border-radius: 50%;
      display: grid;
      place-items: center;
      width: 100px;
      height: 100px;
      box-shadow: 0 4px 4px 0 rgba(25, 51, 99, 0.2);
      background-color: $stroke-stroke-accent;
   }
   &__text {
      font-weight: 500;
      font-size: 32px;
      color: $bg-bg-white;
      max-width: 460px;
   }
}
</style>
