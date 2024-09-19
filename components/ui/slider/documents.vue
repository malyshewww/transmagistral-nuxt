<template lang="pug">
	.slider
		.main-documents__slider.slider-documents
			.slider-documents__caption Наши организационные документы
			.slider-documents__body.swiper(ref="sliderDocuments")
				.slider-documents__wrapper.swiper-wrapper
					.swiper-slide(v-for="item, index in documentList" :key="index")
						.document-item
							a(:href="`/images/documents/doc-${index+1}.png`" data-fancybox="gallery" class="document-item__link")
								.document-item__image.ibg
									NuxtPicture(format="avif,webp" :src="`/images/documents/doc-${index+1}.png`" :alt="item.name")
							.document-item__name {{ item.name }}
			//- Swiper(class="slider-documents__body" :slides-per-view="'3'" space-between="40" :modules="[Navigation]" :navigation="{nextEl: buttonNext, prevEl: buttonPrev}" @init="onSwiperInit")
			//- 	SwiperSlide(v-for="item, index in documentList" :key="index" class="document-item")
			//- 		a(:href="`/images/documents/doc-${index+1}.png`" data-fancybox="gallery" class="document-item__link")
			//- 			.document-item__image.ibg
			//- 				img(:src="`/images/documents/doc-${index+1}.png`", alt="")
			//- 		.document-item__name {{ item.name }}
			.slider-controls
				button(ref="buttonPrev" type="button").slider-button.slider-button-prev 
					svg(width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg")
						path(fill-rule="evenodd" clip-rule="evenodd" d="M36 0C16.1178 0 0 16.1178 0 36C0 55.8823 16.1178 72 36 72C55.8823 72 72 55.8823 72 36C72 16.1178 55.8823 0 36 0ZM36.2094 22.2596C36.6068 22.657 36.6068 23.3011 36.2094 23.6984L24.9645 34.9434H48.4718C49.0337 34.9434 49.4892 35.3989 49.4892 35.9608C49.4892 36.5227 49.0337 36.9782 48.4718 36.9782H24.9645L36.2094 48.2231C36.6068 48.6204 36.6068 49.2646 36.2094 49.6619C35.8121 50.0592 35.1679 50.0592 34.7706 49.6619L21.7889 36.6802C21.3916 36.2829 21.3916 35.6387 21.7889 35.2414L34.7706 22.2596C35.1679 21.8623 35.8121 21.8623 36.2094 22.2596Z" fill="white")
				button(ref="buttonNext" type="button").slider-button.slider-button-next 
					svg(width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg")
						path(fill-rule="evenodd" clip-rule="evenodd" d="M36 0C16.1178 0 0 16.1178 0 36C0 55.8823 16.1178 72 36 72C55.8823 72 72 55.8823 72 36C72 16.1178 55.8823 0 36 0ZM34.7706 22.2596C34.3733 22.657 34.3733 23.3011 34.7706 23.6984L46.0156 34.9434H22.5083C21.9464 34.9434 21.4909 35.3989 21.4909 35.9608C21.4909 36.5227 21.9464 36.9782 22.5083 36.9782H46.0156L34.7706 48.2231C34.3733 48.6204 34.3733 49.2646 34.7706 49.6619C35.1679 50.0592 35.8121 50.0592 36.2094 49.6619L49.1912 36.6802C49.5885 36.2829 49.5885 35.6387 49.1912 35.2414L36.2094 22.2596C35.8121 21.8623 35.1679 21.8623 34.7706 22.2596Z" fill="white")
</template>

<script setup>
import { Swiper } from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import { useMainDataStore } from "~/stores/maindata";
const store = useMainDataStore();

const documentList = store.documentList;

const buttonPrev = ref("");
const buttonNext = ref("");
const sliderDocuments = ref("");
const swiperDocuments = ref(null);

const initSlider = () => {
   swiperDocuments.value = new Swiper(sliderDocuments.value, {
      modules: [Navigation],
      speed: 800,
      navigation: {
         nextEl: buttonNext.value,
         prevEl: buttonPrev.value,
      },
      breakpoints: {
         300: {
            slidesPerView: 1.8,
            spaceBetween: 20,
         },
         767.98: {
            slidesPerView: 2,
            spaceBetween: 30,
         },
         1400: {
            slidesPerView: 3,
            spaceBetween: 30,
         },
      },
   });
};

const fancyboxOptions = {
   Hash: false,
};
onMounted(() => {
   initSlider();
   Fancybox.bind(`[data-fancybox="gallery"]`, fancyboxOptions);
});
</script>

<style lang="scss">
.slider {
   display: grid;
   grid-template-columns: repeat(3, 33.333%);
   margin-left: 8px;
   @media screen and (max-width: $xl) {
      margin-left: 0;
      grid-template-columns: 100%;
   }
}
.slider-documents {
   max-width: 941px;
   grid-column: 2 / -1;
   margin-top: 82px;
   &__caption {
      font-weight: 700;
      font-size: 24px;
      line-height: 26px;
      &:not(:last-child) {
         margin-bottom: 27px;
         @media screen and (max-width: $xl) {
            margin-bottom: 24px;
         }
         @media screen and (max-width: $md) {
            font-size: 18px;
            line-height: 110%;
         }
      }
   }
   @media screen and (max-width: $xl) {
      max-width: 100%;
      margin-top: 56px;
      grid-column: initial;
   }
   &__body {
      padding: 30px;
      margin: -30px;
      @media screen and (max-width: $md) {
         padding: 0;
         margin: 0;
         overflow: visible;
      }
   }
   & .slider-controls {
      margin-top: 36px;
      display: none;
      @media screen and (max-width: $xl) {
         display: flex;
      }
   }
}
.document-item {
   display: grid;
   gap: 16px;
   text-align: center;
   flex-shrink: 0;
   width: 100%;
   &__image {
      overflow: hidden;
      padding-bottom: math.div(405, 287) * 100%;
      // @media screen and (max-width: $md) {
      //    padding-bottom: math.div(154, 218) * 100%;
      // }
   }
   &__name {
      font-size: 20px;
      line-height: 28px;
      opacity: 1;
      @media screen and (max-width: $md) {
         font-size: 15px;
         line-height: 140%;
         text-align: left;
      }
   }
   &__link {
      display: block;
      transition: transform $time * 2, box-shadow $time * 2;
      @media (any-hover: hover) {
         &:hover {
            cursor: pointer;
            transform: translateY(-20px);
            box-shadow: var(--shadow);
         }
      }
   }
}
</style>
