<template lang="pug">
	.person-card(v-for="card, index in cards" :key="index")
		.person-card__body 
			.person-card__image
				img(:src="`/images/persons/person-${index+1}.jpg`", :alt="card.name")
			.person-card__name {{ card.name }}
			.person-card__post {{ card.post }}
			.person-card__contacts.contacts-person
				a(:href="card.email").contacts-person__link {{ card.email }}
				a(:href="card.phone").contacts-person__link {{ card.phone }}
</template>

<script setup>
defineProps({
   cards: {},
});
</script>

<style lang="scss">
.person-card {
   padding: 40px;
   border-radius: 14px;
   background-color: var(--bg-bg-grey);
   color: var(--text-text-secondary);
   &:last-child {
      grid-column: span 2;
   }
   &__image {
      width: 275px;
      height: 275px;
      border-radius: 50%;
      overflow: hidden;
      align-self: center;
   }
   &__body {
      display: flex;
      flex-direction: column;
      gap: 20px;
      text-align: center;
   }
   &__name {
      font-weight: 700;
      font-size: 24px;
      line-height: 26px;
   }
   &__post {
      border-radius: 100px;
      padding: 6px 8px 8px 8px;
      display: flex;
      justify-content: center;
      min-height: 35px;
      background: var(--bg-bg-grey-dark);
      font-size: 20px;
      line-height: 28px;
   }
   &__contacts {
      display: grid;
      gap: 7px;
   }
   &__top {
      display: flex;
      align-items: center;
      position: relative;
      width: 324px;
   }
   &__bottom {
      text-align: right;
      color: var(--bg-bg-dark);
   }
   &__num {
      font-size: 124px;
      line-height: 136px;
      text-align: right;
      font-family: var(--second-family);
      display: flex;
      align-items: start;
      justify-content: flex-end;
      & span {
         font-family: var(--font-family);
         font-weight: 700;
         font-size: 54px;
         line-height: 76px;
         text-align: right;
         color: var(--bg-bg-red);
      }
   }

   &__description {
      font-weight: 700;
      font-size: 32px;
      text-align: right;
      color: var(--bg-bg-dark);
   }
   &__small-image {
      position: absolute;
      right: 0;
      top: 0;
      width: 117px;
      height: 117px;
      border-radius: 50%;
      overflow: hidden;
      display: grid;
      place-items: center;
      flex-shrink: 0;
      border: 1px solid var(--stroke-stroke-grey);
      & span {
         width: 23px;
         display: inline-block;
         &::before {
            content: "";
            position: absolute;
            display: block;
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background: var(--stroke-stroke-grey);
            box-shadow: 0px 0px var(--stroke-stroke-grey),
               10px 0px var(--stroke-stroke-grey),
               20px 0px var(--stroke-stroke-grey);
         }
      }
      &:not(:last-child) {
      }
      &:nth-child(1) {
         left: 0;
         z-index: 3;
      }
      &:nth-child(3) {
         right: 69px;
         z-index: 1;
      }
      &:nth-child(2) {
         left: 69px;
         z-index: 2;
      }
   }
}
.person-card-last {
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: flex-end;
   gap: 20px;
   position: relative;
   overflow: hidden;
   padding-top: 60px;
   & .line-card {
      position: absolute;
      top: 0;
      left: 0;
      width: auto;
      z-index: 2;
   }
}
.contacts-person {
   &__link {
      font-size: 20px;
      line-height: 28px;
   }
}
</style>
