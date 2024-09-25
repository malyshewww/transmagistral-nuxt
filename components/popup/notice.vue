<template lang="pug">
	Teleport(to="body")
		Popup(class="popup-notice" :is-open="isOpen" @close-popup="closePopup")
			.popup-header
				.popup__title Успешно!
				.popup__sub-title {{ noticeSubTitle || defaultNoticeSubTitle }}
</template>

<script setup>
defineProps({
   isOpen: {
      type: Boolean,
   },
   noticeSubTitle: {
      type: String,
      required: false,
   },
});

const defaultNoticeSubTitle =
   "Форма успешно отправлена. Звонок поступит в ближайшее время";

const emit = defineEmits(["closePopup"]);

const closePopup = () => {
   emit("closePopup");
};
</script>
