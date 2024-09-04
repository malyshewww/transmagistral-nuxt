<template lang="pug">
	.header__menu.menu 
		nav.menu__body 
			ul.menu__list 
				li.menu__item(v-for="item, index in menu" :key="index")
					NuxtLink(:to="`${item.path}`" @click.prevent).menu__link {{ item.title }}
</template>

<script setup>
defineProps({
   menu: {
      type: Object,
      required: true,
   },
});
</script>

<style lang="scss">
.header__menu {
}
.menu {
   &__body {
      display: flex;
   }
   &__list {
      @include reset-list;
      display: flex;
      align-items: center;
      gap: 54px;
   }
   &__item {
   }
   &__link {
      color: currentColor;
      line-height: 25px;
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
}
</style>
