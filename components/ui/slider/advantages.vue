<template lang="pug">
	.main-advantages__slider.slider-advantages
		.slider-advantages__track(ref="sliderAdvantages")
			.slider-advantages__body(ref="sliderAdvantagesBody")
				.slider-advantages__item.item-advantages(v-for="item, index in advantagesList" :key="index")
					.item-advantages__image.ibg
						img(:src="`/images/advantages/image-${index+1}.jpg`", alt="")
					.item-advantages__content 
						.item-advantages__number
						.item-advantages__title {{ item.title }}
						.item-advantages__text(v-html="item.text")
		.slider-controls
			button(ref="buttonPrev" id="prev" type="button").slider-button.slider-button-prev 
				svg(width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg")
					path(fill-rule="evenodd" clip-rule="evenodd" d="M36 0C16.1178 0 0 16.1178 0 36C0 55.8823 16.1178 72 36 72C55.8823 72 72 55.8823 72 36C72 16.1178 55.8823 0 36 0ZM36.2094 22.2596C36.6068 22.657 36.6068 23.3011 36.2094 23.6984L24.9645 34.9434H48.4718C49.0337 34.9434 49.4892 35.3989 49.4892 35.9608C49.4892 36.5227 49.0337 36.9782 48.4718 36.9782H24.9645L36.2094 48.2231C36.6068 48.6204 36.6068 49.2646 36.2094 49.6619C35.8121 50.0592 35.1679 50.0592 34.7706 49.6619L21.7889 36.6802C21.3916 36.2829 21.3916 35.6387 21.7889 35.2414L34.7706 22.2596C35.1679 21.8623 35.8121 21.8623 36.2094 22.2596Z" fill="white")
			button(ref="buttonNext"  id="next" type="button").slider-button.slider-button-next 
				svg(width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg")
					path(fill-rule="evenodd" clip-rule="evenodd" d="M36 0C16.1178 0 0 16.1178 0 36C0 55.8823 16.1178 72 36 72C55.8823 72 72 55.8823 72 36C72 16.1178 55.8823 0 36 0ZM34.7706 22.2596C34.3733 22.657 34.3733 23.3011 34.7706 23.6984L46.0156 34.9434H22.5083C21.9464 34.9434 21.4909 35.3989 21.4909 35.9608C21.4909 36.5227 21.9464 36.9782 22.5083 36.9782H46.0156L34.7706 48.2231C34.3733 48.6204 34.3733 49.2646 34.7706 49.6619C35.1679 50.0592 35.8121 50.0592 36.2094 49.6619L49.1912 36.6802C49.5885 36.2829 49.5885 35.6387 49.1912 35.2414L36.2094 22.2596C35.8121 21.8623 35.1679 21.8623 34.7706 22.2596Z" fill="white")
</template>

<script setup>
import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { useMainDataStore } from "~/stores/maindata";

const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();

const store = useMainDataStore();
const advantagesList = store.advantagesList;

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
   let sections = gsap.utils.toArray(
      ".slider-advantages__body .slider-advantages__item"
   );
   const horizontX = -100 * (sections.length - 1);
   gsap.to(sections, {
      xPercent: horizontX,
      ease: "none",
      scrollTrigger: {
         trigger: ".slider-advantages__track",
         pin: true,
         start: "top",
         scrub: 1,
         end: () =>
            "+=" +
            document.querySelector(".slider-advantages__body")?.offsetWidth,
         onUpdate: (self) => {},
      },
   });
};

const sliderAdvantages = ref("");
const sliderAdvantagesBody = ref("");
const swiperAdvantages = ref(null);
const buttonPrev = ref("");
const buttonNext = ref("");

const initSlider = () => {
   if (!swiperAdvantages.value) {
      sliderAdvantages.value.classList.add("swiper");
      sliderAdvantagesBody.value.classList.add("swiper-wrapper");
      swiperAdvantages.value = new Swiper(sliderAdvantages.value, {
         modules: [Navigation],
         slideClass: "slider-advantages__item",
         wrapperClass: "slider-advantages__body",
         speed: 800,
         spaceBetween: 15,
         autoHeight: true,
         navigation: {
            nextEl: buttonNext.value,
            prevEl: buttonPrev.value,
         },
         breakpoints: {
            300: {
               slidesPerView: 1,
            },
            767.98: {
               slidesPerView: 2,
            },
         },
      });
   }
};
const destroySlider = () => {
   if (swiperAdvantages.value) {
      swiperAdvantages.value.destroy();
      swiperAdvantages.value = null;
   }
};
const checkScreenWidth = () => {
   if (window.matchMedia("(max-width: 1024px)").matches) {
      initSlider();
   } else {
      destroySlider();
   }
};

onMounted(() => {
   if (window.innerWidth > 1024) {
      animation();
   }
   checkScreenWidth();
   window.addEventListener("resize", checkScreenWidth);
});
// gsap.to(sliderTrack.value, {
//    scrollTrigger: {
//       trigger: ".slider-advantages__item",
//       start: "top",
//       end: () => "+=" + transform,
//       pin: true,
//       pinSpacing: true,
//       scrub: true,
//    },
//    x: -transform,
// });
</script>

<style lang="scss">
.slider-advantages {
   display: grid;
   gap: 100px 20px;
   grid-column: span 3;
   & .slider-controls {
      display: none;
      @media screen and (max-width: $xl) {
         display: flex;
      }
   }
   @media screen and (max-width: $xl) {
      gap: 36px;
      grid-column: initial;
      margin-top: 9px;
   }
   &__track {
      padding-top: 80px;
      @media screen and (max-width: $xl) {
         padding: 0;
      }
   }
   &__track {
      @media screen and (max-width: $xl) {
         width: 100%;
         overflow: hidden;
      }
   }
   &__body {
      display: flex;
      gap: 120px;
      @media screen and (max-width: $xxl) {
         gap: 60px;
      }
      @media screen and (max-width: $xl) {
         display: flex;
         flex-flow: row nowrap;
         width: 100%;
         height: 100%;
         gap: 0;
      }
   }
}
.item-advantages {
   flex-shrink: 0;
   width: 594px;
   counter-increment: num;
   display: flex;
   flex-direction: column;
   align-items: start;
   gap: 40px;
   @media screen and (max-width: $xl) {
      flex-shrink: 0;
      gap: 20px;
      width: auto;
      // display: block;
      // height: auto;
   }
   &__image {
      border-radius: 14px;
      overflow: hidden;
      padding-bottom: 52.2%;
      height: 334px;
      align-self: stretch;
      @media screen and (max-width: $md) {
         height: auto;
         padding-bottom: 56.2%;
      }
   }
   &__content {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 24px;
      @media screen and (max-width: $xl) {
         gap: 12px;
      }
   }
   &__number {
      border-radius: 40px;
      display: grid;
      place-items: center;
      width: 56px;
      height: 56px;
      background: var(--bg-bg-grey);
      flex-shrink: 0;
      &::before {
         content: counter(num);
         display: block;
         font-weight: 700;
         font-size: 24px;
         line-height: 26px;
         @media screen and (max-width: $xl) {
            font-size: 18px;
            line-height: 20px;
         }
      }
      @media screen and (max-width: $xl) {
         width: 37px;
         height: 36px;
      }
   }
   &__title {
      font-weight: 700;
      font-size: 32px;
      line-height: 35px;
      @media screen and (max-width: $xl) {
         font-size: 18px;
         line-height: 19px;
      }
   }
   &__text {
      font-size: 20px;
      line-height: 28px;
      @media screen and (max-width: $xl) {
         font-size: 17px;
         line-height: 24px;
      }
      & p {
         &:not(:last-child) {
            margin-bottom: 20px;
            @media screen and (max-width: $xl) {
               margin-bottom: 10px;
            }
         }
      }
   }
}
</style>
