<template lang="pug">
	header.header
		.container 
			.header__body 
				NuxtLink(to="/").header__logo.logo
					picture 
						source(:srcset="`/images/logo.svg`" media="(min-width: 767.98px)")
						source(:srcset="`/images/logo.svg`" media="(min-width: 300px)")
						img(src="/images/logo.svg", alt="логотип")
				HeaderMenu(:menu="menu")
				HeaderActions
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
.header {
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   min-height: 123px;
   background-color: transparent;
   display: grid;
   align-items: center;
   z-index: 10;
   color: $bg-bg-white;
   padding: 10px 0;
   &.header-white {
      color: $text-text-secondary;
      box-shadow: 0 2px 5px 0 rgba(25, 51, 99, 0.05);
      background: $bg-bg-white;
      min-height: 87px;
   }
   &__body {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
   }
}
</style>
