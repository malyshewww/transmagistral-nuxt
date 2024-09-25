<template lang="pug">
	.dropdown(:class="{active: isDropdownActive}")
		button(type="button" @click="openDropdown").dropdown__button {{ dropdownButtonText }}
		.dropdown__wrapper(@click.stop)
			ul.dropdown__list()
				li.dropdown__item(v-for="item, index in dropdownList.new" :class="{selected: item.isSelected || dropdownButtonText === item.title}" @click="select(item, index)") {{ item.title }}
</template>

<script setup>
const isDropdownActive = ref(false);
const dropdownButtonText = ref("Название темы 2");

const emit = defineEmits(["dataFromDropdown"]);

// eslint-disable-next-line
const openDropdown = () => {
   isDropdownActive.value = !isDropdownActive.value;
};

const dropdownList = reactive({
   data: [
      {
         title: "Название темы 2",
      },
      {
         title: "Название темы 3",
      },
      {
         title: "Название темы 4",
      },
   ],
   new: [],
});
dropdownList.new = dropdownList.data.map((item, index) => {
   return {
      ...item,
      key: index,
      isSelected: dropdownList.data[length - 1] ? true : false,
   };
});

const toggleSelection = (key) => {
   const currentIem = dropdownList.new.find((item) => item.key === key);
   if (currentIem) {
      currentIem.isSelected = !currentIem.isSelected;
   }
};
// eslint-disable-next-line
const select = (target, key) => {
   // isDropdownActive.value = false;
   for (let i = 0; i < dropdownList.new.length; i++) {
      if (dropdownList.new[i].key !== key) {
         dropdownList.new[i].isSelected = false;
      } else {
         dropdownButtonText.value = dropdownList.new[i].title;
         emit("dataFromDropdown", dropdownList.new[i].title);
      }
   }
   toggleSelection(key);
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
         border-color: var(--stroke-stroke-grey-dark-static);
         color: var(--main-color);
         &::after {
            transform: rotate(-180deg);
            background-color: var(--stroke-stroke-grey-dark-static);
         }
      }
   }
   &__button {
      width: 100%;
      border-bottom: 1px solid
         rgba(var(--stroke-stroke-grey-dark-rgb-static), 0.5);
      padding: 16px;
      min-height: 52px;
      opacity: 0.5;
      font-size: 16px;
      line-height: 18px;
      color: rgba(var(--main-color-rgb), 0.5);
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
         background-color: rgba(var(--stroke-stroke-grey-dark-rgb-static), 0.5);
         transition: transform $time, background-color $time;
      }
      @media (any-hover: hover) {
         &:hover {
            border-color: var(--stroke-stroke-grey-dark-static);
            color: var(--main-color);
            cursor: pointer;
            &::after {
               background-color: var(--stroke-stroke-grey-dark-static);
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
      width: 100%;
   }
   &__list {
      @include reset-list;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
   }
   &__item {
      padding: 16px;
      width: 100%;
      min-height: 50px;
      background-color: var(--white);
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
         background-color: var(--stroke-stroke-grey-dark-static);
         opacity: 0;
         pointer-events: none;
      }
      @media (any-hover: hover) {
         &:hover {
            cursor: pointer;
            background-color: var(--bg-bg-grey-dark-static);
         }
      }
      &.selected {
         background-color: var(--bg-bg-grey-dark-static);
         order: -1;
         &::after {
            opacity: 1;
         }
      }
   }
}
</style>
