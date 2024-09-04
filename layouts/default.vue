<template lang="pug">
	.wrapper 
		Header(:menu="menu")
		main
			slot 
		Footer(:menu="menu")
</template>

<script setup>
const menu = [
   {
      title: "О компании",
      path: "#about",
   },
   {
      title: "Автопарк",
      path: "#autopark",
   },
   {
      title: "Работа",
      path: "#work",
   },
   {
      title: "Документы",
      path: "#documents",
   },
   {
      title: "Клиенты",
      path: "#clients",
   },
   {
      title: "Контакты",
      path: "#contacts",
   },
];
</script>
