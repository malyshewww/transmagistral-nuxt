<template lang="pug">
	.main-autopark__accordeon.accordeon
		.accordeon__items 
			.accordeon__item.item-accordeon(v-for="item,index in accordeonList.data" :key="index" @click="select(index)" :class="{ active : item.isSelected, notactive : !item.isSelected }")
				.item-accordeon__header
					h4.item-accordeon__header-text
						| {{ item.header }}
					.item-accordeon__header-icon
				.item-accordeon__body
					.item-accordeon__content
						.item-accordeon__image.ibg
							img(:src="`/images/autopark/img-${index+1}.jpg`", :alt="item.title")
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
         text: "<p>Мы используем надёжные морозильные установки, которые позволяют доставлять груз свежим</p>",
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

// const selected = () => {
//    return accordeonList.data.map((item, index) => {
//       return {
//          ...item,
//          key: index,
//          isSelected: index === 0 ? true : false,
//       };
//    });
// };

function toggleSelection(key) {
   console.log("toggle", key);
   const stepsItem = accordeonList.data.find((item) => item.key === key);
   console.log(stepsItem);
   if (stepsItem) {
      stepsItem.isSelected = !stepsItem.isSelected;
   }
}

const select = (key) => {
   console.log(key);
   for (let i = 0; i < accordeonList.data.length; i++) {
      if (accordeonList.data[i].key !== key) {
         accordeonList.data[i].isSelected = false;
      }
   }
   toggleSelection(key);
};

// const toggleAccordeon = (e) => {
//    const target = e.target;
//    console.log(target);
//    target.classList.add("active");
// };
defineExpose({
   select,
});
</script>

<style lang="scss">
.main-autopark {
   &__accordeon {
      padding: 0 20px;
   }
}
.accordeon {
   height: 737px;
   &__items {
      display: flex;
      height: 100%;
      border: 1px solid $stroke-stroke-grey;
      border-right: none;
      border-radius: 14px;
      overflow: hidden;
   }
   &__item {
      min-height: 100%;
   }
}
.item-accordeon {
   display: flex;
   flex: 1;
   width: 5.3vw;
   transition: flex $time * 2 ease-out;
   border-right: 1px solid $stroke-stroke-grey;
   border-top-right-radius: 14px;
   border-bottom-right-radius: 14px;
   overflow: hidden;
   &.active {
      flex: 61.3vw;
   }
   &__header {
      padding: 40px 30px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex-direction: column;
      gap: 40px;
      .active & {
         pointer-events: none;
      }
      @media (any-hover: hover) {
         &:hover {
            cursor: pointer;
         }
      }
   }
   &__header-text {
      writing-mode: vertical-lr;
      transform: rotate(180deg);
      color: $bg-bg-dark;
      white-space: nowrap;
   }
   &__header-icon {
      width: 56px;
      height: 56px;
      display: grid;
      place-items: center;
      border-radius: 50%;
      background-color: $bg-bg-grey;
      transition: background-color $time * 2;
      &::before {
         content: "";
         display: block;
         width: 20px;
         height: 20px;
         mask-image: url("/images/icons/icon-info.svg");
         mask-repeat: no-repeat;
         mask-position: center;
         background-color: $bg-bg-dark;
         transition: background-color $time * 2;
      }
      .active & {
         background-color: $bg-bg-dark;
         &::before {
            background-color: $bg-bg-white;
         }
      }
   }
   &__icon {
      display: block;
      margin-bottom: 12px;
   }
   &__body {
      display: grid;
      align-content: end;
      padding: 30px 30px 136px 30px;
      position: relative;
      flex-shrink: 0;
      flex-grow: 1;
   }
   &__content {
      display: grid;
      grid-template-columns: 560px 1fr;
      gap: 40px;
      align-items: start;
      opacity: 0;
      transition: opacity $time * 2 ease-out 0.5s;
      position: absolute;
      left: 30px;
      bottom: 136px;
      height: 347px;
      .active & {
         opacity: 1;
      }
      .notactive & {
         opacity: 0;
      }
   }
   &__image {
      border-radius: 14px;
      overflow: hidden;
      padding-bottom: 62%;
   }
   &__inner {
      display: grid;
      gap: 12px;
   }
   &__title {
      color: $text-text-secondary;
   }
   &__text {
      font-size: 20px;
      line-height: 28px;
      color: $text-text-secondary;
      max-width: 95%;
      & p {
         &:not(:last-child) {
            margin-bottom: 20px;
         }
      }
   }
}
</style>
