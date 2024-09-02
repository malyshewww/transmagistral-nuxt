<template lang="pug">
	.reliably
		.container
			.reliably__body 
				.reliably__heading 
					h3.title-sm Трансмагистраль — это надёжно
				.reliably-slider
					.box 
						.item.active
						.item
						.item
						.item
						.item
						.item
						.item
						.item
						svg(viewBox="0 0 300 300")
							circle(ref="holder" id="holder" class="st0" cx="151" cy="151" r="150")
					button(ref="prev" id="prev") Prev
					button(ref="next" id="next") Next
					.reliably-slider__box 
						.reliably-slider__circle
							.reliably-slider__pagination(ref="reliablyCircle")
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
import Swiper from "swiper";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";

const { $gsap: gsap, $MotionPathPlugin: MotionPathPlugin } = useNuxtApp();

const gsapSlider = () => {
   gsap.registerPlugin(MotionPathPlugin);

   const circlePath = MotionPathPlugin.convertToPath("#holder", false)[0];
   circlePath.id = "circlePath";
   document.querySelector("svg").prepend(circlePath);

   let items = gsap.utils.toArray(".item"),
      numItems = items.length,
      itemStep = 1 / numItems,
      wrapProgress = gsap.utils.wrap(0, 1),
      snap = gsap.utils.snap(itemStep),
      wrapTracker = gsap.utils.wrap(0, numItems),
      tracker = { item: 0 };

   gsap.set(items, {
      motionPath: {
         path: circlePath,
         align: circlePath,
         alignOrigin: [0.5, 0.5],
         end: (i) => i / items.length,
      },
      scale: 0.9,
   });

   const tl = gsap.timeline({ paused: true, reversed: true });

   tl.to(".box", {
      rotation: 360,
      transformOrigin: "center",
      duration: 1,
      ease: "none",
   });

   tl.to(
      items,
      {
         rotation: "-=360",
         transformOrigin: "center center",
         duration: 1,
         ease: "none",
      },
      0
   );

   tl.to(
      tracker,
      {
         item: numItems,
         duration: 1,
         ease: "none",
         modifiers: {
            item: (value) => wrapTracker(numItems - Math.round(value)),
         },
      },
      0
   );

   items.forEach(function (el, i) {
      el.addEventListener("click", function () {
         var current = tracker.item,
            activeItem = i;

         if (i === current) {
            return;
         }
         document.querySelector(".item.active").classList.remove("active");
         items[activeItem].classList.add("active");

         var diff = current - i;

         if (Math.abs(diff) < numItems / 2) {
            moveWheel(diff * itemStep);
         } else {
            var amt = numItems - Math.abs(diff);

            if (current > i) {
               moveWheel(amt * -itemStep);
            } else {
               moveWheel(amt * itemStep);
            }
         }
      });
   });

   document.getElementById("next").addEventListener("click", function () {
      var i = 0;

      var theArray = items;
      var currentIndex = 0;
      if (i === 0) {
         console.log(theArray[currentIndex]);
      } else if (i < 0) {
         console.log(
            theArray[(currentIndex + theArray.length + i) % theArray.length]
         );
      } else if (i > 0) {
         console.log(theArray[(currentIndex + i) % theArray.length]);
      }
      return moveWheel(-(2 / numItems));
   });

   document.getElementById("prev").addEventListener("click", function () {
      return moveWheel(2 / numItems);
   });

   function moveWheel(amount, i, index) {
      let progress = tl.progress();
      tl.progress(wrapProgress(snap(tl.progress() + amount)));
      let next = tracker.item;
      tl.progress(progress);

      document.querySelector(".item.active").classList.remove("active");
      items[next].classList.add("active");

      gsap.to(tl, {
         progress: snap(tl.progress() + amount),
         modifiers: {
            progress: wrapProgress,
         },
      });
   }
};

const slider = ref(null);
const buttonPrev = ref(null);
const buttonNext = ref(null);
const reliablySlider = ref("");
const reliablyCircle = ref("");

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

const rotate = ref(0);

const initSlider = () => {
   slider.value = new Swiper(reliablySlider.value, {
      modules: [Navigation, Pagination, EffectFade],
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
      on: {
         slideChange: function (swiper) {
            rotate.value = +90;
            reliablyCircle.value.style.transform = `rotate(-${rotate.value}deg)`;
         },
         progress: function (swiper) {
            console.log(swiper);
         },
      },
   });
};
onMounted(() => {
   initSlider();
   gsapSlider();
});
</script>

<style lang="scss">
// experience
.box {
   max-width: 500px;
   position: relative;
   & .item {
      width: 50px;
      height: 50px;
      color: white;
      text-align: center;
      line-height: 50px;
      font-size: 24px;
      border-radius: 100%;
      background-color: red;
      z-index: 1;
      &:nth-child(even) {
         opacity: 0;
         pointer-events: none;
      }
   }
   & svg {
      height: 400px;
      overflow: visible;
      width: 400px;
      z-index: -1;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
   }
}
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
      transition: transform $time * 2;
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
      transition: transform $time * 2;
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
