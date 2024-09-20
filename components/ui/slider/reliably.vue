<template lang="pug">
	.reliably-slider
		.reliably-slider__box
			.reliably-slider__circle
				.item.active
				.item
				.item
				.item
				svg(viewBox="0 0 300 300")
					circle(ref="holder" id="holder" class="st0" cx="151" cy="151" r="150")
			.reliably-slider__images 
				.reliably-slider__image(v-for="item, index in reliablySliderData" :key="index" :class="{active: index === 0}")
					NuxtPicture(format="avif,webp" :src="`/images/reliably/slide-${index+1}.jpg`" :alt="item.title")
		.reliably-slider__content-box
			.reliably-slider__content.reliably-content(v-for="item, index in reliablySliderData" :key="index" :class="{active: index === 0}")
				.reliably-content__caption {{item.title}}
				.reliably-content__description(v-html="item.descr")
	.slider-controls
		button(ref="buttonPrev" id="prev" type="button").slider-button.slider-button-prev 
			svg(width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg")
				path(fill-rule="evenodd" clip-rule="evenodd" d="M36 0C16.1178 0 0 16.1178 0 36C0 55.8823 16.1178 72 36 72C55.8823 72 72 55.8823 72 36C72 16.1178 55.8823 0 36 0ZM36.2094 22.2596C36.6068 22.657 36.6068 23.3011 36.2094 23.6984L24.9645 34.9434H48.4718C49.0337 34.9434 49.4892 35.3989 49.4892 35.9608C49.4892 36.5227 49.0337 36.9782 48.4718 36.9782H24.9645L36.2094 48.2231C36.6068 48.6204 36.6068 49.2646 36.2094 49.6619C35.8121 50.0592 35.1679 50.0592 34.7706 49.6619L21.7889 36.6802C21.3916 36.2829 21.3916 35.6387 21.7889 35.2414L34.7706 22.2596C35.1679 21.8623 35.8121 21.8623 36.2094 22.2596Z" fill="white")
		button(ref="buttonNext"  id="next" type="button").slider-button.slider-button-next 
			svg(width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg")
				path(fill-rule="evenodd" clip-rule="evenodd" d="M36 0C16.1178 0 0 16.1178 0 36C0 55.8823 16.1178 72 36 72C55.8823 72 72 55.8823 72 36C72 16.1178 55.8823 0 36 0ZM34.7706 22.2596C34.3733 22.657 34.3733 23.3011 34.7706 23.6984L46.0156 34.9434H22.5083C21.9464 34.9434 21.4909 35.3989 21.4909 35.9608C21.4909 36.5227 21.9464 36.9782 22.5083 36.9782H46.0156L34.7706 48.2231C34.3733 48.6204 34.3733 49.2646 34.7706 49.6619C35.1679 50.0592 35.8121 50.0592 36.2094 49.6619L49.1912 36.6802C49.5885 36.2829 49.5885 35.6387 49.1912 35.2414L36.2094 22.2596C35.8121 21.8623 35.1679 21.8623 34.7706 22.2596Z" fill="white")
</template>

<script setup>
import { useMainDataStore } from "~/stores/maindata";
const store = useMainDataStore();

const { $gsap: gsap, $MotionPathPlugin: MotionPathPlugin } = useNuxtApp();

const reliablySliderData = store.reliablySlider;

const gsapSlider = () => {
   gsap.registerPlugin(MotionPathPlugin);
   const circlePath = MotionPathPlugin.convertToPath("#holder", false)[0];
   circlePath.id = "circlePath";
   document.querySelector(".reliably-slider__box svg").prepend(circlePath);

   const images = document.querySelectorAll(".reliably-slider__image");
   const contentBlocks = document.querySelectorAll(".reliably-slider__content");
   let items = gsap.utils.toArray(".item"),
      numItems = items.length,
      itemStep = 1 / numItems,
      wrapProgress = gsap.utils.wrap(0, 1),
      snap = gsap.utils.snap(itemStep),
      wrapTracker = gsap.utils.wrap(0, numItems),
      tracker = { item: 0 };
   let autoplaySlider = setInterval(() => {
      moveWheel(-itemStep);
   }, 4000);
   gsap.to(items, {
      motionPath: {
         path: circlePath,
         align: circlePath,
         alignOrigin: [0.5, 0.5],
         end: (i) => i / items.length,
      },
      scale: 1,
   });
   const tl = gsap.timeline({
      paused: true,
      reversed: true,
   });
   tl.to(".reliably-slider__circle", {
      rotation: 360,
      transformOrigin: "center center",
      ease: "none",
   });
   tl.to(
      items,
      {
         rotation: "-=360",
         transformOrigin: "center center",
         ease: "none",
      },
      0
   );
   tl.to(
      tracker,
      {
         item: numItems,
         ease: "none",
         modifiers: {
            item: (value) => wrapTracker(numItems - Math.round(value)),
         },
      },
      0
   );
   items.forEach(function (el, i) {
      el.addEventListener("click", function () {
         let current = tracker.item,
            activeItem = i;
         if (i === current) {
            return;
         }
         document.querySelector(".item.active").classList.remove("active");
         document
            .querySelector(".reliably-slider__image.active")
            .classList.remove("active");
         document
            .querySelector(".reliably-slider__content.active")
            .classList.remove("active");
         items[activeItem].classList.add("active");
         images[activeItem].classList.add("active");
         contentBlocks[activeItem].classList.add("active");
         let diff = current - i;
         clearInterval(autoplaySlider);
         autoplaySlider = setInterval(() => {
            moveWheel(-itemStep);
         }, 4000);
         if (Math.abs(diff) < numItems / 2) {
            moveWheel(diff * itemStep);
         } else {
            let amt = numItems - Math.abs(diff);
            if (current > i) {
               moveWheel(amt * -itemStep);
            } else {
               moveWheel(amt * itemStep);
            }
         }
      });
   });
   document.getElementById("next").addEventListener("click", function () {
      let i = 0;
      let theArray = items;
      let currentIndex = 0;
      if (i === 0) {
         //  console.log(theArray[currentIndex]);
      } else if (i < 0) {
         //  console.log(
         //     theArray[(currentIndex + theArray.length + i) % theArray.length]
         //  );
      } else if (i > 0) {
         //  console.log(theArray[(currentIndex + i) % theArray.length]);
      }
      clearInterval(autoplaySlider);
      autoplaySlider = setInterval(() => {
         moveWheel(-itemStep);
      }, 4000);
      return moveWheel(-itemStep);
   });
   document.getElementById("prev").addEventListener("click", function () {
      clearInterval(autoplaySlider);
      autoplaySlider = setInterval(() => {
         moveWheel(-itemStep);
      }, 4000);
      return moveWheel(itemStep);
   });
   function moveWheel(amount) {
      let progress = tl.progress();
      tl.progress(wrapProgress(snap(tl.progress() + amount)));
      let next = tracker.item;
      tl.progress(progress);
      document.querySelector(".item.active").classList.remove("active");
      document
         .querySelector(".reliably-slider__image.active")
         .classList.remove("active");
      document
         .querySelector(".reliably-slider__content.active")
         .classList.remove("active");
      items[next].classList.add("active");
      images[next].classList.add("active");
      contentBlocks[next].classList.add("active");
      gsap.to(tl, {
         progress: snap(tl.progress() + amount),
         modifiers: {
            progress: wrapProgress,
         },
         duration: 2,
      });
      // const circle = document.querySelector(".reliably-slider__circle");
      // circle.style.transition =
      //    "rotate 0.4s linear, translate 0.4s linear, transform 0.2s linear";
   }
};

onMounted(() => {
   gsapSlider();
});
</script>

<style lang="scss">
.reliably-slider__box {
   max-width: 573px;
   position: relative;
   &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translate(-100%, -50%);
      height: 1px;
      width: 100vw;
      background-color: var(--stroke-stroke-grey-line-changed);
   }
   & .item {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;
      &::before {
         content: "";
         display: block;
         width: 24px;
         height: 24px;
         background-color: var(--stroke-stroke-grey-changed);
         border-radius: 50%;
         transition: width $time * 2 ease-in-out 0s, height $time ease-in-out 0s,
            background-color $time * 2 ease-in-out 0s;
      }
      @media (any-hover: hover) {
         &:hover {
            cursor: pointer;
         }
      }
      &.active {
         &::before {
            background-color: var(--bg-bg-dark);
            transition: width $time ease-in-out 1s, height $time ease-in-out 1s,
               background-color $time ease-in-out 1s;
            // transition: background-color $time ease-in-out 0.4s;
            width: 100%;
            height: 100%;
         }
      }
      @media screen and (max-width: $md) {
         width: 16px;
         height: 16px;
         &::before {
            width: 9px;
            height: 9px;
         }
      }
   }
   & svg {
      height: 100%;
      overflow: visible;
      width: 100%;
      z-index: -1;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      fill: transparent;
      & path {
         fill: transparent;
         stroke-width: 1px;
         stroke: var(--stroke-stroke-grey);
      }
   }
}

.reliably-slider {
   display: flex;
   align-items: center;
   gap: 119px;
   margin-left: auto;
   margin-right: auto;
   margin-top: -73px;
   position: relative;
   @media screen and (max-width: $xxl) {
      margin-top: 0;
   }
   @media screen and (max-width: $xl) {
      flex-direction: column;
      gap: 28px;
      width: 100%;
   }
   @media screen and (max-width: $md) {
      margin-top: 12px;
   }
   &__box {
      display: grid;
      place-items: center;
      width: 573px;
      height: 573px;
      @media screen and (max-width: 1600px) {
         width: 400px;
         height: 400px;
      }
      @media screen and (max-width: $md) {
         width: 213px;
         height: 213px;
      }
   }
   &__circle {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
   }
   &__images {
      width: 400px;
      height: 400px;
      border-radius: 50%;
      overflow: hidden;
      position: relative;
      @media screen and (max-width: 1600px) {
         width: 280px;
         height: 280px;
      }
      @media screen and (max-width: $md) {
         width: 166px;
         height: 166px;
      }
   }
   &__image {
      position: absolute;
      border-radius: inherit;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: opacity $time * 3;
      z-index: -1;
      & img,
      & picture {
         border-radius: inherit;
         width: 100%;
         height: 100%;
         object-fit: cover;
      }
      &.active {
         transform: scale(1);
         transition: opacity $time * 3 ease-in-out 0.2s;
         opacity: 1;
         z-index: 1;
      }
   }
   &__content-box {
      width: 319px;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(calc(100% + 119px), -50%);
      @media screen and (max-width: 1600px) {
         transform: translate(calc(100% + 40px), -50%);
         width: 245px;
      }
      @media screen and (max-width: $xl) {
         position: relative;
         width: 50%;
         align-self: flex-start;
         top: 0;
         transform: none;
         right: 0;
         min-height: 102px;
      }
      @media screen and (max-width: $md) {
         width: 100%;
      }
   }
   &__content {
      opacity: 0;
      transition: opacity $time;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      width: 100%;
      &.active {
         opacity: 1;
         & .reliably-content__caption {
            opacity: 1;
            transform: translateY(0px);
            transition-delay: 0.4s;
         }
         & .reliably-content__description {
            transform: translateY(0px);
            transition-delay: 0.6s;
            opacity: 1;
         }
      }
   }
}
.reliably-content {
   display: grid;
   gap: 12px;
   color: var(--text-text-secondary);
   @media screen and (max-width: $md) {
      gap: 10px;
   }
   &__caption {
      font-weight: 700;
      font-size: 32px;
      line-height: 35px;
      opacity: 0;
      transition: opacity $time * 2 ease-in-out 0.5s,
         transform $time * 2 ease-in-out 0.5s;
      transform: translateY(-20px);
      overflow: hidden;
      @media screen and (max-width: $xl) {
         font-size: 24px;
         line-height: 100%;
      }
      @media screen and (max-width: $md) {
         font-size: 18px;
         line-height: 20px;
      }
   }
   &__description {
      font-size: 20px;
      line-height: 28px;
      opacity: 0;
      transform: translateY(-20px);
      overflow: hidden;
      transition: opacity $time * 2 ease-in-out 0.8s,
         transform $time * 2 ease-in-out 0.8s;
      @media screen and (max-width: $md) {
         font-size: 17px;
         line-height: 24px;
      }
   }
}
</style>
