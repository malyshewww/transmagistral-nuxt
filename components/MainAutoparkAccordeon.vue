<template lang="pug">
	.main-autopark__accordeon.accordeon
		.accordeon__items 
			#nextAccordeon(ref="nextButton" hidden="true")
			.accordeon__item.item-accordeon(v-for="item,index in accordeonList.data" :key="index" :class="{active: index === 0}")
				.item-accordeon__header(ref="headerAccordeonTrigger")
					h4.item-accordeon__header-text
						| {{ item.header }}
					.item-accordeon__header-icon
				.item-accordeon__body(ref="headerAccordeonBody")
					.item-accordeon__content
						.item-accordeon__image.ibg
							NuxtPicture(format="avif,webp" :src="`/images/autopark/img-${index+1}.jpg`" :alt="item.title")
						.item-accordeon__inner
							span.item-accordeon__icon
								img(:src="`/images/autopark/car-${index+1}.svg`", :alt="item.title")
							h5.item-accordeon__title {{ item.title }}
							.item-accordeon__text(v-html="item.text")

</template>

<script setup>
const accordeonList = reactive({
   data: [
      {
         key: 0,
         isSelected: true,
         header: "Стандартные рефрижераторы",
         title: "Гарантия свежести",
         text: "<p>Мы используем надёжные морозильные установки, которые позволяют доставлять груз <strong>свежим</strong></p>",
      },
      {
         key: 1,
         isSelected: false,
         header: "Мультирежимные рефрежераторы",
         title: "Две климатические зоны",
         text: "<p>Для перевозки в одном полуприцепе товаров, требующих различной температуры, мы создали нескольких температурных зон. <strong>Это позволяет экономить</strong> место, время в пути и средства наших клиентов</p>",
      },
      {
         key: 2,
         isSelected: false,
         header: "двухъярусные рефрежераторы",
         title: "Система двухъярусной загрузки",
         text: "<p>Оптимальное решение для нештабелируемых грузов — позволяет осуществлять транспортировку <strong>66 европоддонов вместо 33</strong></p><p>При этом конструкция для перевозки достаточно легкая, поэтому полезная нагрузка остается практически без изменений</p>",
      },
      {
         key: 3,
         isSelected: false,
         header: "Тягачи",
         title: "Гарантия свежести",
         text: "<p>Современное оснащение и автомобили не старше пяти лет гарантируют бесперебойную работу</p>",
      },
      {
         key: 4,
         isSelected: false,
         header: "Одиночные развозные автомобили",
         title: "Решения для любых задач",
         text: "<p>Малый радиус поворота и оптимальная геометрия транспорта позволяют нам <strong>доставлять грузы в ограниченном пространстве</strong> узких улиц</p>",
      },
      {
         key: 5,
         isSelected: false,
         header: "С прицепом рефрижератором",
         title: "Больше груза за одну поездку",
         text: "<p>Наличие прицепа рефрижератора позволяет перевозить больше груза за одну поездку.</p><p>Они так же <strong>могут быть разделены на отсеки</strong>, позволяя создать в одном прицепе более одной климатической зоны и одновременно перевозить как охлажденные, так и замороженные грузы</p>",
      },
   ],
});

// const toggleSelection = (key) => {
//    const stepsItem = accordeonList.data.find((item) => item.key === key);
//    if (stepsItem) {
//       stepsItem.isSelected = !stepsItem.isSelected;
//    }
// };
// const select = (key) => {
// if (window.innerWidth > 1024) {
//    for (let i = 0; i < accordeonList.data.length; i++) {
//       if (accordeonList.data[i].key !== key) {
//          accordeonList.data[i].isSelected = false;
//       }
//    }
//    toggleSelection(key);
//    clearInterval(key);
//    stopAutoplay();
// }
// };

const initAccordeonMobile = () => {
   if (window.innerWidth <= 1024) {
      const accordeons = document.querySelectorAll(".accordeon");
      if (accordeons.length) {
         [...accordeons].forEach((accordeon) => {
            if (accordeon) {
               const accordeonItems =
                  accordeon.querySelectorAll(".item-accordeon");
               [...accordeonItems].forEach((item, index) => {
                  const header = item.querySelector(".item-accordeon__header");
                  const body = item.querySelector(".item-accordeon__body");
                  // const content = item.querySelector(
                  //    ".item-accordeon__content"
                  // );
                  header.addEventListener("click", () => {
                     item.classList.toggle("open");
                     if (item.classList.contains("open")) {
                        body.style.height = `${body.scrollHeight}px`;
                     } else {
                        body.style.height = "0px";
                     }
                     removeAccordeonOpen(index);
                  });
                  if (index === 0) {
                     item.classList.add("open");
                     body.style.height = `${body.scrollHeight + 20}px`;
                  }
               });
               function removeAccordeonOpen(index1) {
                  [...accordeonItems].forEach((item2, index2) => {
                     if (index1 != index2) {
                        item2.classList.remove("open");
                        const contentTwo = item2.querySelector(
                           ".item-accordeon__body"
                        );
                        contentTwo.style.height = "0px";
                     }
                  });
               }
            }
         });
      }
   }
};

const autoChangeAccordeon = () => {
   if (window.innerWidth > 1024) {
      let slideIndex = 1;
      let autoplayInterval = null;
      const autoparkAccordeon = document.querySelector(
         ".main-autopark__accordeon"
      );

      const callback = ([entry]) => {
         if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            console.log("intersect");
            autoplayInterval = setInterval(function () {
               // Get element via id and click next
               document.getElementById("nextAccordeon").click();
            }, 4000);
            observer.unobserve(entry.target);
         }
      };
      const options = {
         // root: по умолчанию window,
         rootMargin: "75px 0px 0px 0px",
         threshold: [0.5],
      };
      const observer = new IntersectionObserver(callback, options);
      observer.observe(autoparkAccordeon);

      const stopAutoplay = () => {
         // Stop the autoplay
         clearInterval(autoplayInterval);
      };
      document.getElementById("nextAccordeon").addEventListener("click", () => {
         plusSlides(1);
      });
      function plusSlides(n) {
         showSlides((slideIndex += n));
      }
      function currentSlide(n) {
         showSlides((slideIndex = n));
      }
      function showSlides(n) {
         let i;
         const slides = document.querySelectorAll(".item-accordeon");
         if (n > slides.length) {
            slideIndex = 1;
         }
         if (n < 1) {
            slideIndex = slides.length;
         }
         for (i = 0; i < slides.length; i++) {
            slides[i].classList.add("notactive");
            slides[i].classList.remove("active");
         }
         slides[slideIndex - 1].classList.remove("notactive");
         slides[slideIndex - 1].classList.add("active");
      }
      const accordeonItems = document.querySelectorAll(".item-accordeon");
      accordeonItems.forEach((item, index) => {
         const header = item.querySelector(".item-accordeon__header");
         header.addEventListener("click", () => {
            slideIndex = index;
            document
               .querySelectorAll(".item-accordeon")
               .forEach((accordItem) => {
                  accordItem.classList.remove("active");
                  accordItem.classList.add("notactive");
               });
            accordeonItems[slideIndex].classList.add("active");
            accordeonItems[slideIndex].classList.remove("notactive");
            stopAutoplay();
         });
      });
   }
};

defineExpose({
   select,
});

onMounted(() => {
   initAccordeonMobile();
   autoChangeAccordeon();
});
</script>

<style lang="scss">
.main-autopark {
   &__accordeon {
      padding: 0 20px;
      @media screen and (max-width: $xl) {
         padding: 0 15px;
      }
   }
}
.accordeon {
   min-height: 621px;
   @media screen and (max-width: $xl) {
      min-height: auto;
   }
   &__items {
      display: flex;
      height: 100%;
      border: 1px solid var(--stroke-stroke-grey);
      border-right: none;
      border-radius: 14px;
      overflow: hidden;
      @media screen and (max-width: $xl) {
         flex-direction: column;
         height: auto;
         border-right: 1px solid var(--stroke-stroke-grey);
      }
   }
   &__item {
      min-height: 100%;
      @media screen and (max-width: $xl) {
         min-height: auto;
      }
   }
}
.item-accordeon {
   display: flex;
   flex: 1;
   width: 5.3vw;
   transition: flex $time * 2 ease-out;
   border-right: 1px solid var(--stroke-stroke-grey);
   border-top-right-radius: 14px;
   border-bottom-right-radius: 14px;
   overflow: hidden;
   @media screen and (max-width: $xl) {
      transition: none;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      padding-bottom: 20px;
      border-radius: 0 0 14px 14px;
      border-right: none;
      overflow: visible;
      &:not(:last-child) {
         border-bottom: 1px solid var(--stroke-stroke-grey);
      }
   }
   &.active {
      flex: 68vw;
      pointer-events: none;
      @media screen and (max-width: $xl) {
         flex: 1 1 auto;
         pointer-events: all;
         // grid-template-rows: auto auto;
      }
   }
   &.open {
      & .item-accordeon__body {
         @media screen and (max-width: $xl) {
            margin-top: 20px;
            grid-template-rows: 1fr;
         }
      }
   }
   &__header {
      padding: 39px 30px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex-direction: column;
      gap: 24px;
      .active & {
         pointer-events: none;
         @media screen and (max-width: $xl) {
            pointer-events: all;
         }
      }
      @media (any-hover: hover) {
         &:hover {
            cursor: pointer;
         }
      }
      @media screen and (max-width: 1600px) {
         padding: 40px 10px;
      }
      @media screen and (max-width: $xl) {
         padding: 20px;
         padding-bottom: 0;
         width: 100%;
         flex-direction: row;
         justify-content: flex-start;
      }
   }
   &__header-text {
      writing-mode: vertical-lr;
      transform: rotate(180deg);
      color: var(--bg-bg-dark);
      white-space: nowrap;
      font-size: 36px;
      line-height: 36px;
      @media screen and (max-width: $xxxl) {
         font-size: 32px;
      }
      @media screen and (max-width: $xl) {
         writing-mode: horizontal-tb;
         transform: none;
         font-size: 24px;
         line-height: 100%;
         white-space: normal;
      }
   }
   &__header-icon {
      width: 36px;
      height: 36px;
      display: grid;
      place-items: center;
      border-radius: 50%;
      background-color: var(--bg-bg-grey);
      transition: background-color $time * 2;
      &::before {
         content: "";
         display: block;
         width: 20px;
         height: 20px;
         mask-image: url("/images/icons/icon-info.svg");
         mask-size: 14px 14px;
         mask-repeat: no-repeat;
         mask-position: center;
         background-color: var(--bg-bg-dark);
         transition: background-color $time * 2;
      }
      @media screen and (max-width: $xxxl) {
         width: 30px;
         height: 30px;
      }
      @media screen and (max-width: $xl) {
         display: none;
      }
      .active & {
         background-color: var(--bg-bg-dark);
         &::before {
            background-color: var(--bg-bg-white);
         }
      }
   }
   &__icon {
      display: block;
      margin-bottom: 12px;
      @media screen and (max-width: $xl) {
         margin-bottom: 6px;
      }
   }
   &__body {
      display: grid;
      align-content: end;
      padding: 30px 30px 100px 30px;
      position: relative;
      flex-shrink: 0;
      flex-grow: 1;
      @media screen and (max-width: $xl) {
         display: flex;
         height: 0;
         transition: height $time * 2, margin $time * 3;
         overflow: hidden;
         width: 100%;
         padding: 0px 20px 0;
         .active & {
            height: 0;
         }
      }
   }
   &__content {
      display: grid;
      grid-template-columns: 560px 1fr;
      gap: 40px;
      align-items: start;
      opacity: 0;
      transition: opacity 0s;
      position: absolute;
      left: 36px;
      bottom: 100px;
      height: 347px;
      @media screen and (max-width: $xl) {
         transition: opacity 0.5s;
      }
      @media screen and (min-width: 1025px) {
         .active & {
            opacity: 1;
            transition: opacity $time * 2 ease-out 0.5s;
            @media screen and (max-width: $xl) {
               max-height: none;
               transition: opacity $time * 2 ease-out 0s;
               opacity: 1;
            }
         }
         .notactive & {
            opacity: 0;
            @media screen and (max-width: $xl) {
               opacity: 1;
            }
         }
      }
      // .open & {
      //    @media screen and (max-width: $xl) {
      //       max-height: 100%;
      //       height: 100%;
      //    }
      // }
      @media screen and (max-width: 1600px) {
         bottom: 100px;
         top: auto;
         height: auto;
         grid-template-columns: 400px 1fr;
      }
      @media screen and (max-width: $xxxl) {
         display: flex;
         flex-direction: column;
         right: 36px;
         top: 36px;
      }
      @media screen and (max-width: $xl) {
         position: static;
         width: 100%;
         height: min-content;
         align-items: start;
         gap: 24px;
         opacity: 1;
         .active &,
         .notactive & {
            opacity: 1;
         }
      }
   }
   &__image {
      border-radius: 14px;
      overflow: hidden;
      padding-bottom: 62%;
      @media screen and (max-width: $xxxl) {
         padding-bottom: 36%;
         align-self: stretch;
      }
      @media screen and (max-width: $xl) {
         padding-bottom: math.div(154, 250) * 100%;
      }
   }
   &__inner {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
      @media screen and (max-width: $xl) {
         gap: 10px;
         // min-height: 110px;
         flex-shrink: 0;
      }
   }
   &__title,
   &__text {
      transition: color $time * 2;
   }
   &__title {
      color: var(--text-text-secondary);
      font-weight: 700;
      font-size: 32px;
      line-height: 110%;
      @media screen and (max-width: $xl) {
         font-size: 18px;
         line-height: 110%;
      }
   }
   &__text {
      font-size: 20px;
      line-height: 28px;
      color: var(--text-text-secondary);
      max-width: 95%;
      @media screen and (max-width: 1600px) {
         font-size: 17px;
         line-height: 140%;
      }
      @media screen and (max-width: $xl) {
         max-width: 100%;
      }
      & p {
         &:not(:last-child) {
            margin-bottom: 20px;
            @media screen and (max-width: 1600px) {
               margin-bottom: 10px;
            }
         }
      }
   }
}
</style>
