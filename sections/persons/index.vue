<template lang="pug">
	section.main-persons
		LinePerson
		.container 
			.main-persons__body 
				h3.section-title.title-sm Команда профессионалов, объединённых одной #[span целью]
				.main-persons__cards
					PersonCard(:cards="newPersonList")
					.person-card.person-card-last
						.person-card__top 
							.person-card__small-image.ibg(v-for="image, index in 3")
								NuxtPicture(format="avif,webp" :src="`/images/persons/person-small-${index+1}.jpg`" alt="маленькое фото команды")
							.person-card__small-image
								span
						.person-card__bottom
							.person-card__num 200 #[span +]
							.person-card__description Профессионалов в нашей команде
						//- LineCard
</template>

<script setup>
import { useMainDataStore } from "~/stores/maindata";
const store = useMainDataStore();

const personList = store.personList;

// eslint-disable-next-line
const newPersonList = personList.map((item) => {
   return {
      ...item,
      newPhone: item.phone.replace(/[^\d\+]/g, ""),
   };
});

const animation = () => {
   const callback = ([entry]) => {
      if (entry.isIntersecting) {
         entry.target.classList.add("in-view");
      }
   };
   const options = {};
   const mainPersonSection = document.querySelector(".main-persons");
   const observerMainPerson = new IntersectionObserver(callback, options);
   observerMainPerson.observe(mainPersonSection);

   const callbackCard = ([entry]) => {
      if (entry.isIntersecting) {
         entry.target.classList.add("in-view");
      }
   };
   const personCardElement = document.querySelector(".person-card-last");
   const observerPersonCard = new IntersectionObserver(callbackCard, options);
   observerPersonCard.observe(personCardElement);
};

onMounted(() => {
   animation();
});
</script>

<style lang="scss">
.main-persons {
   padding: 75px 0 78px;
   position: relative;
   overflow: hidden;
   @media screen and (max-width: $xl) {
      padding: 36px 0 0px;
   }
   & .line-person {
      position: absolute;
      top: 25px;
      left: 0;
      width: 100%;
      z-index: -1;
      pointer-events: none;
      @media screen and (max-width: $xl) {
         display: none;
      }
   }
   &__body {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 100px 20px;
      @media screen and (max-width: $xl) {
         grid-template-columns: 100%;
         gap: 36px;
      }
   }
   & .section-title {
      max-width: 904px;
      grid-column: 2/ -1;
      @media screen and (max-width: $xl) {
         max-width: 100%;
         grid-column: initial;
      }
   }
   &__cards {
      grid-column: span 3;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
      @media screen and (max-width: 1600px) {
         grid-template-columns: repeat(3, 1fr);
      }
      @media screen and (max-width: $xl) {
         grid-column: initial;
         grid-template-columns: repeat(2, 1fr);
      }
      @media screen and (max-width: $md) {
         grid-template-columns: 100%;
         align-items: start;
      }
   }
}
</style>
