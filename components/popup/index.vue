<template lang="pug">
	.popup(:class="{ 'open-popup': isOpen }" @click="closePopup")
		.popup__wrapper 
			.popup__content(@click.stop)
				button(type="button" @click="closePopup").popup__close
				slot
</template>

<script setup>
import maskPhone from "~/utils/maskPhone.js";

defineProps({
   isOpen: {
      type: Boolean,
      required: true,
   },
});
const emit = defineEmits(["closePopup"]);
const closePopup = () => {
   emit("closePopup");
};

onMounted(() => {
   maskPhone();
});
</script>

<style lang="scss">
.popup {
   position: fixed;
   top: 0;
   left: 0;
   width: 100vw;
   height: 100dvh;
   background: rgba(16, 35, 70, 0.3);
   opacity: 0;
   visibility: hidden;
   overflow-y: auto;
   overflow-x: hidden;
   transition: all 0.3s ease 0s;
   z-index: 30;
   pointer-events: none;
   &::-webkit-scrollbar {
      background: none;
   }
   &::-webkit-scrollbar-thumb {
      background: none;
   }
   &.open-popup {
      opacity: 1;
      visibility: visible;
      pointer-events: all;
      & .popup__content {
         opacity: 1;
         transform: perspective(600px) translate(0px, 0%) rotateX(0deg);
      }
   }
   &__wrapper {
      min-height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 30px 16px;
      transition: all 0.5s ease 0s;
   }
   &__content {
      border-radius: 0px;
      max-width: 460px;
      min-height: 174px;
      background-color: var(--white);
      width: 100%;
      padding: 40px;
      position: relative;
      border-radius: 14px;
      opacity: 0;
      transform: perspective(600px) translate(0px, -100%) rotateX(45deg);
      transition: all 0.5s ease 0s;
      .popup-politic & {
         max-width: 800px;
      }
      @media screen and (max-width: $md) {
         padding: 30px 15px;
         border-radius: 16px;
      }
   }
   &__close {
      position: absolute;
      top: 16px;
      right: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 24px;
      height: 24px;
      cursor: pointer;
      &::before {
         content: "";
         display: block;
         width: 24px;
         height: 24px;
         mask-image: url("/images/icons/icon-close.svg");
         mask-repeat: no-repeat;
         mask-position: center;
         background-color: #7f8284;
         transition: background-color 0.25s ease 0s;
      }
      @media (any-hover: hover) {
         &:hover {
            &::before {
               background-color: var(--black);
            }
         }
      }
   }
   &__form {
      display: grid;
      grid-template-columns: 100%;
      gap: 36px;
   }
   &__title {
      font-weight: 700;
      font-size: 24px;
      line-height: 26px;
   }
   &__sub-title,
   &__description {
      font-size: 20px;
      line-height: 28px;
   }
   &__description {
      & p {
         &:not(:last-child) {
            margin-bottom: 20px;
         }
      }
   }
   & .text-link {
      color: rgba(var(--text-text-secondary-rgb), 0.5);
      @media (any-hover: hover) {
         &:hover {
            color: var(--text-link-dark-hover);
         }
      }
   }
}
.popup-politic {
   z-index: 40;
}
.popup-header {
   display: grid;
   gap: 12px;
}
</style>
