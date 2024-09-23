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

const addedHeight = ref(0);

const goToSection = (e) => {
   const { bodyScrollBar } = useScrollbar();
   const href = e.target.getAttribute("href");
   const section = document.querySelector(`${href}`);
   if (window.innerWidth > 1024) {
      if (href === "#about") {
         addedHeight.value = 0;
      } else if (href === "#work") {
         addedHeight.value = 0;
      } else {
         addedHeight.value = 50;
      }
   }
   const scrollToHere =
      bodyScrollBar.offset.y +
      section.getBoundingClientRect().top -
      addedHeight.value;
   bodyScrollBar.scrollTo(0, scrollToHere, 1000);
};
</script>
