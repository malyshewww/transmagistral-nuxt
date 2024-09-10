<template lang="pug">
	Teleport(to="body")
		Popup(class="popup-questions" :is-open="isOpen" @close-popup="closePopup")
			form.popup__form.form
				.form__header.popup-header
					.popup__title Остались вопросы?
					.popup__sub-title Заполните форму, и наши менеджеры перезвонят вам в ближайшее время
				.form__body 
					.form-item 
						.form-item__field
							input(type="text" name="name" placeholder="Имя").form-input 
					.form-item 
						.form-item__field
							input(type="tel" name="phone" placeholder="+7 900 000-00-00").form-input 
					.form-item 
						UiDropdown
					.form-item 
						.form-text 
							| Отправляя форму, я подтверждаю своё #[button(type="button" @click="openPopupPolitic").text-link согласие на обработку персональных данных] 
				UiButton(buttonText="Отправить" classNames="btn-red", buttonType="submit")
</template>

<script setup>
import maskPhone from "~/utils/maskPhone.js";

import { usePopupStore } from "~/stores/popup";

const store = usePopupStore();

const openPopupPolitic = () => {
   store.openPopupPolitic();
};

const props = defineProps({
   isOpen: {
      type: Boolean,
   },
});
const emit = defineEmits(["closePopup"]);

const closePopup = () => {
   emit("closePopup");
};

onMounted(() => {
   maskPhone();
});
</script>
