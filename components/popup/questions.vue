<template lang="pug">
	Teleport(to="body")
		Popup(class="popup-questions" :is-open="isOpen" @close-popup="closePopup")
			form(@submit.prevent="submitForm").popup__form.form
				.form__header.popup-header
					.popup__title Остались вопросы?
					.popup__sub-title Заполните форму, и наши менеджеры перезвонят вам в ближайшее время
				.form__body 
					.form-item 
						.form-item__field
							input(type="text" v-model="formData.name" name="name" placeholder="Имя").form-input 
					.form-item 
						.form-item__field
							input(type="tel" v-model="formData.phone" name="phone" placeholder="+7 900 000-00-00").form-input 
					.form-item 
						UiDropdown(@dataFromDropdown="newDataFromDropdown")
					.form-item 
						.form-text 
							| Отправляя форму, я подтверждаю своё #[button(type="button" @click="openPopupPolitic").text-link согласие на обработку персональных данных] 
				UiButton(buttonText="Отправить" classNames="btn-red", buttonType="submit")
</template>

<script setup>
import { usePopupStore } from "~/stores/popup";

const store = usePopupStore();

const openPopupPolitic = () => {
   store.openPopupPolitic();
};

defineProps({
   isOpen: {
      type: Boolean,
   },
});
const emit = defineEmits(["closePopup"]);

const closePopup = () => {
   emit("closePopup");
};

const formData = ref({
   name: "",
   phone: "",
   theme: "",
});

const newDataFromDropdown = (value) => {
   formData.value.theme = value;
};

const submitForm = async () => {
   console.log(formData.value);
   //    const { data: responseData } = await useFetch(
   //       `${useHref()}/form-handler/index.php`,
   //       {
   //          method: "post",
   //          body: {
   //             name: formData.value.name,
   //             phone: formData.value.phone,
   //             theme: formData.value.theme,
   //          },
   //       }
   //    );
};

onMounted(() => {});
</script>
