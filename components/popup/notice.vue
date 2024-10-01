<template lang="pug">
	Teleport(to="body")
		Popup(class="popup-notice" :is-open="isOpen" @close-popup="closePopup")
			.popup-header
				.popup__title Успешно!
				.popup__sub-title {{ popupKey === 'work' ? "Форма успешно отправлена. Мы позвоним вам в указанный промежуток" : "Форма успешно отправлена. Звонок поступит в ближайшее время"}}
</template>

<script setup>
defineProps({
   isOpen: {
      type: Boolean,
   },
   popupKey: {
      type: String,
      required: false,
   },
});

const emit = defineEmits(["closePopup"]);

// eslint-disable-next-line
const closePopup = () => {
   emit("closePopup");
};
</script>
