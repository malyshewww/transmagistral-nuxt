<template lang="pug">
	.person-card(v-for="card, index in cards" :key="index")
		.person-card__body 
			.person-card__image
				picture
					source(type="image/webp" :srcset="`/images/persons/person-${index+1}.webp`")
					source(:srcset="`/images/persons/person-${index+1}.jpg`")
					img(:src="`/images/persons/person-${index+1}.jpg`" :alt="card.name")
			.person-card__name {{ card.name }}
			.person-card__post {{ card.post }}
			.person-card__contacts.contacts-person
				a(:href="`mailto:${card.email}`").contacts-person__link {{ card.email }}
				a(:href="`tel:${card.newPhone}`").contacts-person__link {{ card.phone }}
</template>

<script setup>
defineProps({
   cards: {
      type: Object,
      required: true,
   },
});
</script>

<style lang="scss">
.person-card {
   padding: 40px;
   border-radius: 14px;
   background-color: var(--bg-bg-grey);
   color: var(--main-color);
   @media screen and (max-width: $xxl) {
      padding: 20px;
   }
   &__image {
      width: 275px;
      height: 275px;
      border-radius: 50%;
      overflow: hidden;
      align-self: center;
      & img,
      & picture {
         width: 100%;
         height: 100%;
      }
      @media screen and (max-width: $xxl) {
         width: 183px;
         height: 183px;
      }
   }
   &__body {
      display: flex;
      flex-direction: column;
      gap: 20px;
      text-align: center;
      @media screen and (max-width: $md) {
         gap: 12px;
      }
   }
   &__name {
      font-weight: 700;
      font-size: 24px;
      line-height: 26px;
      @media screen and (max-width: $md) {
         font-size: 18px;
         line-height: 20px;
      }
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
      @media screen and (max-width: $md) {
         font-size: 15px;
         line-height: 21px;
      }
   }
   &__contacts {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 7px;
      @media screen and (max-width: $md) {
         gap: 4px;
      }
   }
   &__top {
      display: flex;
      align-items: center;
      position: relative;
      width: 256px;
      height: 100px;
      @media screen and (max-width: $md) {
         width: 156px;
         height: 54px;
      }
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
         @media screen and (max-width: $md) {
            font-size: 32px;
            line-height: 110%;
         }
      }
      @media screen and (max-width: $md) {
         font-size: 42px;
         line-height: 140%;
         letter-spacing: 0.04em;
         align-items: center;
      }
   }

   &__description {
      font-weight: 700;
      font-size: 32px;
      text-align: right;
      color: var(--bg-bg-dark);
      @media screen and (max-width: $md) {
         font-size: 18px;
         line-height: 110%;
      }
   }
   &__small-image {
      position: absolute;
      right: 0;
      top: 0;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      overflow: hidden;
      display: grid;
      place-items: center;
      flex-shrink: 0;
      border: 1px solid var(--stroke-stroke-grey);
      & img,
      & picture {
         width: 100%;
         height: 100%;
      }
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
      @media screen and (max-width: $md) {
         width: 54px;
         height: 54px;
      }
      &:nth-child(1) {
         left: 0;
         z-index: 3;
      }
      &:nth-child(3) {
         right: 52px;
         z-index: 1;
         @media screen and (max-width: $md) {
            z-index: 1;
            right: 34px;
         }
      }
      &:nth-child(2) {
         left: 52px;
         z-index: 2;
         @media screen and (max-width: $md) {
            left: 34px;
         }
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
   padding-top: 40px;
   min-height: 546px;
   background-color: var(--bg-bg-grey-dark);
   // grid-column: span 2;
   & .line-card {
      position: absolute;
      top: 0;
      left: 0;
      width: auto;
      z-index: 1;
      pointer-events: none;
      @media screen and (max-width: $xl) {
         display: none;
      }
   }
   @media screen and (max-width: 1600px) {
      grid-column: span 2;
   }
   @media screen and (max-width: $xxl) {
      min-height: auto;
   }
   @media screen and (max-width: $xl) {
      grid-column: span 1;
   }
   @media screen and (max-width: $md) {
      grid-column: initial;
      min-height: 247px;
   }
}
.contacts-person {
   &__link {
      font-size: 20px;
      line-height: 28px;
      transition: color $time;
      @media (any-hover: hover) {
         &:hover {
            color: #1941a5;
         }
      }
      @media screen and (max-width: $md) {
         font-size: 17px;
         line-height: 24px;
      }
   }
}
</style>
