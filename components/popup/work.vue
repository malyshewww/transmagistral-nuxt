<template lang="pug">
	Teleport(to="body")
		Popup(class="popup-work" :is-open="isOpen" @close-popup="closePopup")
			form.popup__form.form
				.form__header.popup-header
					.popup__title Присоединяйтесь к нашей команде!
					.popup__sub-title Заполните форму, и мы свяжемся с вами для обсуждения сотрудничества
				.form__body 
					.form-item 
						.form-item__field
							input(type="text" placeholder="Имя").form-input 
					.form-item 
						.form-item__field
							input(type="tel" placeholder="+7 900 000-00-00").form-input 
					.form-item
						.form-text Во сколько с вами можно связаться (звонок поступит в течение 3-х дней)
						.form-item__timelines 
							.form-item__field
								input(type="text" placeholder="12:00").form-input 
							.form-item__field
								input(type="text" placeholder="12:00").form-input 
					.form-item 
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
