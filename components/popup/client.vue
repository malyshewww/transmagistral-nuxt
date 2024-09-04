<template lang="pug">
	Teleport(to="body")
		Popup(class="popup-client" :is-open="isOpen" @close-popup="closePopup")
			form.popup__form.form
				.form__header.popup-header
					.popup__title Хотите воспользоваться нашими услугами?
					.popup__sub-title Заполните форму, и наши менеджеры перезвонят вам в ближайшее время
				.form__body 
					.form-item 
						.form-item__field
							input(type="text" placeholder="Имя").form-input 
					.form-item 
						.form-item__field
							input(type="tel" placeholder="+7 900 000-00-00").form-input 
					.form-text 
						| Отправляя форму, я подтверждаю своё #[a(href="").text-link согласие на обработку персональных данных] 
				UiButton(buttonText="Отправить" classNames="btn-red", buttonType="submit")
</template>

<script setup>
import { maskPhone } from "#imports";
const props = defineProps({
   isOpen: {
      type: Boolean,
   },
});
const emit = defineEmits(["closePopup"]);
onMounted(() => {
   maskPhone();
});
</script>
