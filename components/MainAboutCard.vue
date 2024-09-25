<template lang="pug">
	.about-card(:class="`about-card--${idx+1}`")
		.about-card__content
			h2.about-card__title 
				| {{ item.title }}
				span(v-if="item.separator") {{ item.separator }}
			.about-card__sub-title {{ item.subTitle }}
			.about-card__text(v-html="item.text")
			LineAbout(:index="idx")
</template>

<script setup>
// const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();
defineProps({
   item: {
      type: Object,
      required: true,
   },
   idx: {
      type: Number,
      required: true,
   },
});

const animation = () => {
   const callback = (entries) => {
      entries.forEach((entry) => {
         if (entry.isIntersecting) {
            // if (entry.intersectionRatio > 0.7) {
            //    entry.target.classList.add("in-view");
            // } else {
            //    entry.target.classList.remove("in-view");
            // }
            if (entry.intersectionRatio >= 0.5) {
               entry.target.classList.add("active");
               // observer.unobserve(entry.target);
            }
         }
      });
   };
   const options = {
      threshold: [0, 0.5, 1],
   };
   const targetElements = document.querySelectorAll(".about-card");
   const observer = new IntersectionObserver(callback, options);
   targetElements.forEach((targetElement) => {
      observer.observe(targetElement);
   });
};
onMounted(() => {
   animation();
});
</script>

<style lang="scss">
.about-card {
   border-radius: 14px;
   padding: 40px;
   min-height: 506px;
   background: var(--bg-bg-grey);
   display: grid;
   align-items: end;
   overflow: hidden;
   position: relative;
   isolation: isolate;
   @media screen and (max-width: $xl) {
      min-height: 212px;
      height: 100%;
   }
   @media screen and (max-width: $md) {
      padding: 20px;
   }
   &--1 {
      grid-column: span 2;
      @media screen and (max-width: $md) {
         grid-column: initial;
      }
   }
   &--2,
   &--3 {
      @media screen and (max-width: $xxxl) {
         grid-column: span 2;
      }
      @media screen and (max-width: $md) {
         grid-column: initial;
      }
   }
   &__content {
      max-width: 370px;
      color: var(--main-color);
      @media screen and (max-width: $md) {
         max-width: 100%;
      }
   }
   &__title {
      margin-bottom: 14px;
      color: var(--bg-bg-red);
      & span {
         font-weight: 700;
         font-family: var(--font-family);
         font-size: 32px;
         line-height: 35px;
         color: var(--bg-bg-red);
         @media screen and (max-width: $xl) {
            font-size: 18px;
            line-height: 20px;
            margin-left: 4px;
         }
      }
      @media screen and (max-width: $md) {
         margin-bottom: 10px;
      }
   }
   &__sub-title {
      margin-bottom: 8px;
      font-weight: 700;
      font-size: 24px;
      line-height: 26px;
      @media screen and (max-width: $md) {
         margin-bottom: 10px;
         font-size: 18px;
         line-height: 20px;
      }
   }
   &__text {
      font-size: 20px;
      line-height: 28px;
      @media screen and (max-width: $md) {
         font-size: 17px;
         line-height: 24px;
      }
   }
   & .line {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      z-index: -1;
      pointer-events: none;
      @media screen and (max-width: $xxxl) {
         display: none;
      }
   }
   &--1 {
      & .line {
         top: 31px;
      }
   }
}
</style>
