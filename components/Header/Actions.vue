<template lang="pug">
	.header__actions 
		a(href="tel:+78312748811").header__phone +7 831 274-88-11
		button(type="button" @click="openPopupQuestions").header__button Позвоните мне 
</template>

<script setup>
const emit = defineEmits(["openPopup"]);

const openPopupQuestions = () => {
   emit("openPopup");
};
</script>

<style lang="scss">
.header__actions {
   display: flex;
   align-items: center;
   gap: 16px;
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
            color: $bg-bg-dark;
         }
         .header-white &:hover {
            color: $bg-bg-red;
         }
      }
   }
   &__button {
      line-height: 25px;
      text-align: center;
      color: currentColor;
      padding: 8px 32px;
      backdrop-filter: blur(20px);
      background: $bg-bg-white-15;
      border-radius: 100px;
      transition: background-color $time;
      .header-white & {
         background: $bg-bg-grey-dark;
      }
      @media (any-hover: hover) {
         &:hover {
            background: rgba(255, 255, 255, 0.3);
         }
         .header-white &:hover {
            background: rgba(13, 35, 90, 0.2);
         }
      }
   }
}
</style>
