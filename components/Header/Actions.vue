<template lang="pug">
	.header__actions
		a(href="tel:+78312748811").header__phone +7 831 274-88-11
		button(type="button" @click="openPopupQuestions").header__button Позвоните мне 
</template>

<script setup>
import { usePopupStore } from "~/stores/popup";
const store = usePopupStore();
const openPopupQuestions = () => {
   store.openPopupQuestions();
};
onMounted(() => {});
</script>

<style lang="scss">
.header__actions {
   display: flex;
   align-items: center;
   gap: 16px;
   @media screen and (max-width: $xl) {
      flex-direction: column-reverse;
      align-self: stretch;
      margin-top: auto;
      display: none;
   }
}
.header-actions-mobile {
   display: none;
   @media screen and (max-width: $xl) {
      display: block;
      width: 100%;
      & .header__actions {
         display: flex;
      }
   }
}
.header {
   &__phone {
      line-height: 25px;
      text-align: center;
      color: currentColor;
      font-weight: 700;
      transition: color $time;
      @media (any-hover: hover) {
         &:hover {
            color: var(--bg-bg-dark);
         }
         .header-white &:hover {
            color: var(--bg-bg-red);
         }
      }
   }
   &__button {
      line-height: 25px;
      text-align: center;
      color: currentColor;
      padding: 8px 32px;
      backdrop-filter: blur(20px);
      background: var(--bg-bg-white-15);
      border-radius: 100px;
      transition: background-color $time;
      .header-white & {
         background: var(--bg-bg-grey-dark);
      }
      @media (any-hover: hover) {
         &:hover {
            background: rgba(255, 255, 255, 0.3);
         }
         .header-white &:hover {
            background: rgba(13, 35, 90, 0.2);
         }
      }
      @media screen and (max-width: $xxl) {
         padding: 6px 32px;
      }
      @media screen and (max-width: $xl) {
         width: 100%;
         min-height: 47px;
         font-size: 18px;
         line-height: 140%;
         background-color: var(--bg-bg-grey-dark);
      }
   }
}
</style>
