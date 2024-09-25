<template lang="pug">
	Teleport(to="body")
		Popup(class="popup-client" :is-open="isOpen" @close-popup="closePopup")
			form.popup__form.form
				.form__header.popup-header
					.popup__title Хотите воспользоваться нашими услугами?
					.popup__sub-title Заполните форму, и наши менеджеры перезвонят вам в ближайшее время
				.form__body 
					.form-item 
						.form-item__field
							input(type="text" name="name" placeholder="Имя").form-input 
					.form-item 
						.form-item__field
							input(type="tel" name="phone" placeholder="+7 900 000-00-00").form-input 
					.form-text 
						| Отправляя форму, я подтверждаю своё #[a(href="#" @click.prevent="openPopupPolitic").text-link согласие на обработку персональных данных] 
				UiButton(buttonText="Отправить" classNames="btn-red", buttonType="submit")
</template>

<script setup>
import maskPhone from "~/utils/maskPhone.js";
import { usePopupStore } from "~/stores/popup";

defineProps({
   isOpen: {
      type: Boolean,
   },
});

const store = usePopupStore();
// eslint-disable-next-line
const openPopupPolitic = () => {
   store.openPopupPolitic();
};

const emit = defineEmits(["closePopup"]);
// eslint-disable-next-line
const closePopup = () => {
   emit("closePopup");
};
onMounted(() => {
   maskPhone();
});
</script>
