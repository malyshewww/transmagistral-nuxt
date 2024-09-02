<template lang="pug">
	.reliably
		.container
			.reliably__body 
				.reliably__heading 
					h3.title-sm Трансмагистраль — это надёжно
				.reliably-slider
					.reliably-slider__box 
						.reliably-slider__circle 
							.reliably-slider__pagination 
								.performance-indicators-bullet 
								.performance-indicators-bullet 
								.performance-indicators-bullet 
								.performance-indicators-bullet 
							.reliably-slider__body.swiper(ref="reliablySlider")
								.reliably-slider__wrapper.swiper-wrapper 
									.reliably-slider__item(v-for="item, index in reliablySliderData" :key="index")
										.reliably-slider__image 
											img(:src="`/images/reliably/slide-${index+1}.jpg`", :alt="item.title")
							//- .reliably-slider__icon 
							//- 	.imgBx(style="--i: 1;")
							//- 	.imgBx(style="--i: 2;")
							//- 	.imgBx(style="--i: 3;")
							//- 	.imgBx(style="--i: 4;")
						.reliably-slider__content-box
							.reliably-slider__content.reliably-content(v-for="item, index in reliablySliderData" :key="index")
								.reliably-content__caption {{item.title}}
								.reliably-content__description(v-html="item.descr")
				.slider-controls
					button(ref="buttonPrev" type="button").slider-button.slider-button-prev 
					button(ref="buttonNext" type="button").slider-button.slider-button-next 
</template>

<script setup>
import { reactive } from "vue";

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";

const slider = ref(null);
const buttonPrev = ref(null);
const buttonNext = ref(null);

const reliablySliderData = [
   {
      title: "24 часа на связи",
      descr: "Наши логисты готовы решать сложные вопросы в любое время</strong> дня и ночи",
   },
   {
      title: "Более 50 000 км",
      descr: "Ежедневно наши машины проезжают больше чем <strong>длина экватора</strong> земного шара",
   },
   {
      title: "От — 25 °C до +25 °C",
      descr: "Регулируемый температурный режим с допустимым отклонением <strong>не более 1 градуса</strong>",
   },
   {
      title: "Страховка 15 млн ₽",
      descr: "Все грузы застрахованы — вы <strong>ничем не рискуете</strong>",
   },
];

defineExpose({
   reliablySliderData,
});

const reliablySlider = ref("");

const initSlider = () => {
   slider.value = new Swiper(reliablySlider.value, {
      modules: [Navigation, Pagination],
      effect: "fade",
      fadeEffect: {
         crossFade: true,
      },
      slideClass: "reliably-slider__item",
      speed: 800,
      spaceBetween: 0,
      slidesPerView: 1,
      navigation: {
         prevEl: buttonPrev.value,
         nextEl: buttonNext.value,
      },
   });
};
onMounted(() => {
   initSlider();
});

console.log(slider.value);
</script>

<style lang="scss">
.reliably {
   padding: 150px 0;
   &__body {
   }
   &__heading {
      max-width: 560px;
   }
}
.reliably-slider {
   &__box {
      display: flex;
      align-items: center;
      gap: 119px;
   }
   &__circle {
      width: 573px;
      height: 573px;
      border: 1px solid $stroke-stroke-grey;
      border-radius: 50%;
      position: relative;
      flex-shrink: 0;
      display: flex;
      justify-content: center;
      align-items: center;
   }
   &__icon {
      position: relative;
      left: -50%;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
   }
   &__content {
   }
   &__pagination {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
   }
   &__body {
      width: 400px;
      height: 400px;
      overflow: hidden;
      border-radius: 50%;
   }
   &__wrapper {
   }
   &__item {
      flex-shrink: 0;
      width: 100%;
      height: 100%;
      // position: absolute;
      // top: 0;
      // left: 0;
      // opacity: 0;
      &.swiper-slide-active {
         opacity: 1;
      }
   }
}
.performance-indicators-bullet {
   position: absolute;
   width: 40px;
   height: 40px;
   border-radius: 50%;
   background-color: transparent;
   transform: translate(-50%, -50%);
   &::before {
      content: "";
      display: block;
      width: 24px;
      height: 24px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      content: "";
      background: $stroke-stroke-grey;
   }
   &:nth-child(1) {
      top: 50%;
   }
   &:nth-child(2) {
      right: 0;
      transform: translate(50%, -50%);
      top: 50%;
   }
   &:nth-child(3) {
      bottom: 0;
      transform: translate(-50%, 50%);
      left: 50%;
   }
   &:nth-child(4) {
      top: 0;
      transform: translate(-50%, -50%);
      left: 50%;
   }
}
.reliably__content {
   &__caption {
   }
   &__description {
   }
}
.imgBx {
   width: 24px;
   height: 24px;
   flex-shrink: 0;
   border-radius: 100%;
   background: $stroke-stroke-grey;
   transform: rotate(calc(360deg / 4 * var(--i)));
   transform-origin: 300px;
   z-index: 100px;
   overflow: hidden;
}
</style>
