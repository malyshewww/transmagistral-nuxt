<template lang="pug">
	header.header.header-white(:class="[{'hide': isHiddenHeader}]")
		.container 
			.header__body 
				NuxtLink(to="/").header__logo.logo
					picture 
						source(:srcset="`/images/logo.svg`" media="(min-width: 767.98px)")
						source(:srcset="`/images/logo-small.svg`" media="(min-width: 300px)")
						img(src="/images/logo.svg", alt="логотип")
				HeaderMenu(:menu="menu")
				HeaderActions
				button(type="button" @click="openMenu($event)" :class="{active: isMenuOpen}").burger
					.burger__icon
						span
</template>

<script setup>
defineProps({
   menu: {
      type: Object,
      required: true,
   },
   isHiddenHeader: {
      type: Boolean,
   },
});

const isMenuOpen = ref(false);

const openMenu = (e) => {
   const target = e.target;
   const parent = target.closest(".header-white");
   parent.classList.toggle("menu-open");
   target.classList.toggle("active");
};
</script>
