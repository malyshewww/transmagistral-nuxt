<template lang="pug">
	ul.menu-footer__list 
		li.menu-footer__item(v-for="item, index in menu" :key="index")
			a(:href="item.path" @click.prevent="goToSection($event)").menu-footer__link {{ item.title }}
</template>

<script setup>
defineProps({
   menu: {
      type: Object,
      required: true,
   },
});

const goToSection = (e) => {
   const { bodyScrollBar } = useScrollbar();
   const href = e.target.getAttribute("href");
   const section = document.querySelector(`${href}`);
   let addedHeight = 0;
   if (window.innerWidth > 1024) {
      addedHeight = 60;
   } else if (window.innerWidth <= 1024 && window.innerWidth > 767.98) {
      addedHeight = 60;
   } else if (window.innerWidth <= 767.98) {
      addedHeight = 20;
   }
   const scrollToHere =
      bodyScrollBar.offset.y +
      section.getBoundingClientRect().top -
      addedHeight;
   bodyScrollBar.scrollTo(0, scrollToHere, 1000);
};
</script>
