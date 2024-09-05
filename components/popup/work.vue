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
							input(type="text" name="name" placeholder="Имя").form-input 
					.form-item 
						.form-item__field
							input(type="tel" name="phone" placeholder="+7 900 000-00-00").form-input 
					.form-item
						.form-text Во сколько с вами можно связаться (звонок поступит в течение 3-х дней)
						.form-item__timelines 
							.form-item__field
								input(type="text" name="time_from" placeholder="12:00").form-input
							.form-item__field
								input(type="text" name="time_to" placeholder="12:00").form-input 
					.form-item 
						.form-text 
							| Отправляя форму, я подтверждаю своё #[button(type="button" @click="openPopupPolitic").text-link согласие на обработку персональных данных] 
				UiButton(buttonText="Отправить" classNames="btn-red", buttonType="submit")
</template>

<script setup>
import IMask from "imask";
import maskPhone from "~/utils/maskPhone.js";

const props = defineProps({
   isOpen: {
      type: Boolean,
   },
});
const emit = defineEmits(["closePopup"]);

const closePopup = () => {
   emit("closePopup");
};

const maskTime = () => {
   const elements = document.querySelectorAll(".form-item__timelines input");
   let maskOptions = {
      overwrite: true,
      autofix: true,
      mask: "HH:MM",
      blocks: {
         HH: {
            mask: IMask.MaskedRange,
            placeholderChar: "HH",
            from: 0,
            to: 23,
            maxLength: 2,
         },
         MM: {
            mask: IMask.MaskedRange,
            placeholderChar: "MM",
            from: 0,
            to: 59,
            maxLength: 2,
         },
      },
   };
   elements.forEach((element) => {
      IMask(element, maskOptions);
   });
};

onMounted(() => {
   maskPhone();
   maskTime();
});
</script>
