<template lang="pug">
	ul.menu-footer__list 
		li.menu-footer__item(v-for="item, index in menu" :key="index")
			a(:href="item.link").menu-footer__link {{ item.title }}
</template>

<script setup>
defineProps({
   menu: {
      type: Object,
      required: true,
   },
});
</script>
