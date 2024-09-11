<template lang="pug">
	.dropdown(:class="{active: isDropdownActive}")
		button(type="button" @click="openDropdown").dropdown__button {{ dropdownButtonText }}
		.dropdown__wrapper(@click.stop)
			ul.dropdown__list(@click="selectedList($event)")
				li.dropdown__item Название темы 2
				li.dropdown__item Название темы 3
				li.dropdown__item Название темы 4
				li.dropdown__item.selected Название темы
</template>

<script setup>
const isDropdownActive = ref(false);
const dropdownInput = ref("");
const dropdownButtonText = ref("Тема вопроса");

const emit = defineEmits(["dataFromInput"]);

const openDropdown = () => {
   isDropdownActive.value = !isDropdownActive.value;
};
const selectedList = (e) => {
   const target = e.target;
   if (target.tagName !== "LI") return;
   dropdownButtonText.value = target.textContent;
   isDropdownActive.value = false;
   emit("dataFromDropdown", target.textContent);
};
</script>

<style lang="scss">
.dropdown {
   position: relative;
   &.active {
      & .dropdown__wrapper {
         opacity: 1;
         transform: translateY(0);
         pointer-events: all;
      }
      & .dropdown__button {
         border-color: var(--stroke-stroke-grey-dark);
         color: var(--text-text-secondary);
         &::after {
            transform: rotate(-180deg);
            background-color: var(--stroke-stroke-grey-dark);
         }
      }
   }
   &__button {
      width: 100%;
      border-bottom: 1px solid rgba(var(--stroke-stroke-grey-dark-rgb), 0.5);
      padding: 16px;
      min-height: 52px;
      opacity: 0.5;
      font-size: 16px;
      line-height: 18px;
      color: rgba(var(--text-text-secondary-rgb), 0.5);
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
      transition: border-color $time, color $time;
      &::after {
         content: "";
         display: block;
         width: 20px;
         height: 20px;
         mask-image: url("/images/icons/arrow-down.svg");
         mask-repeat: no-repeat;
         mask-position: center;
         background-color: rgba(var(--stroke-stroke-grey-dark-rgb), 0.5);
         transition: transform $time, background-color $time;
      }
      @media (any-hover: hover) {
         &:hover {
            border-color: var(--stroke-stroke-grey-dark);
            color: var(--text-text-secondary);
            cursor: pointer;
            &::after {
               background-color: var(--stroke-stroke-grey-dark);
            }
         }
      }
   }
   &__wrapper {
      position: absolute;
      top: 100%;
      background-color: var(--white);
      z-index: 5;
      opacity: 0;
      transform: translateY(20px);
      pointer-events: none;
      transition: opacity $time, transform $time;
   }
   &__list {
      @include reset-list;
      padding: 0;
      margin: 0;
   }
   &__item {
      padding: 16px;
      width: 380px;
      min-height: 50px;
      background-color: var(--bg-bg-white);
      transition: background-color $time;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
      font-size: 16px;
      line-height: 18px;
      &::after {
         content: "";
         display: block;
         width: 20px;
         height: 20px;
         mask-image: url("/images/icons/check.svg");
         mask-repeat: no-repeat;
         mask-position: center;
         background-color: var(--stroke-stroke-grey-dark);
         opacity: 0;
         pointer-events: none;
      }
      @media (any-hover: hover) {
         &:hover {
            cursor: pointer;
            background-color: var(--bg-bg-grey-dark);
         }
      }
      &.selected {
         background-color: var(--bg-bg-grey-dark);
         &::after {
            opacity: 1;
         }
      }
   }
}
</style>
