<template lang="pug">
	.wrapper 
		Header(:menu="menu" @openPopup="openPopupQuestions")
		main
			slot 
		Footer(:menu="menu" @openPopup="openPopupQuestions" @openPopupPolitic="openPopupPolitic")
		PopupQuestions(@close-popup="closePopupQuestions" :is-open="isOpenPopupQuestions" @openPopupPolitic="openPopupPolitic")
		PopupNotice(@close-popup="closeNoticePopupQuestions" :is-open="isOpenNoticePopupQuestions")
		PopupPolitic(@close-popup="closePopupPolitic" :is-open="isOpenPopupPolitic")
</template>

<script setup>
const isOpenPopupQuestions = ref(false);
const isOpenNoticePopupQuestions = ref(false);

const isOpenPopupPolitic = ref(false);

const openPopupQuestions = () => {
   isOpenPopupQuestions.value = !isOpenPopupQuestions.value;
};
const closePopupQuestions = () => {
   isOpenPopupQuestions.value = !isOpenPopupQuestions.value;
};
const openNoticePopupQuestions = () => {
   isOpenNoticePopupQuestions.value = !isOpenNoticePopupQuestions.value;
};
const closeNoticePopupQuestions = () => {
   isOpenNoticePopupQuestions.value = !isOpenNoticePopupQuestions.value;
};
const openPopupPolitic = () => {
   isOpenPopupPolitic.value = !isOpenPopupPolitic.value;
};
const closePopupPolitic = () => {
   isOpenPopupPolitic.value = !isOpenPopupPolitic.value;
};

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
