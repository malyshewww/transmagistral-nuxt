<template lang="pug">
	Teleport(to="body")
		Popup(class="popup-client" :is-open="isOpen" @close-popup="closePopup")
			form(@submit.prevent="submitForm").popup__form.form
				.form__header.popup-header
					.popup__title Хотите воспользоваться нашими услугами?
					.popup__sub-title Заполните форму, и наши менеджеры перезвонят вам в ближайшее время
				.form__body 
					.form-item(:class="{error: formErrors.name}")
						.form-item__field
							input(type="text" v-model="formData.name" name="name" placeholder="Имя").form-input
						.error-message(v-if="formErrors.name") {{formErrors.name}}
					.form-item(:class="{error: formErrors.phone}")
						.form-item__field
							input(type="tel" v-model="formData.phone" name="phone" placeholder="+7 900 000-00-00").form-input 
						.error-message(v-if="formErrors.phone") {{formErrors.phone}}
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

const storePopup = usePopupStore();
// eslint-disable-next-line
const openPopupPolitic = () => {
   storePopup.openPopupPolitic();
};

const emit = defineEmits(["closePopup"]);
// eslint-disable-next-line
const closePopup = () => {
   emit("closePopup");
};

const formData = reactive({
   name: "",
   phone: "",
   webform_id: "services",
});

const formErrors = reactive({
   name: "",
   phone: "",
});

const runtimeConfig = useRuntimeConfig();

// eslint-disable-next-line
const submitForm = async () => {
   fetch(`${runtimeConfig.public.apiBase}/session/token`)
      .then(function (response) {
         return response.text();
      })
      .then(function (token) {
         fetch(
            `${runtimeConfig.public.apiBase}/webform_rest/submit?_format_json`,
            {
               method: "POST",
               headers: {
                  Accept: "application/json, text/plain, */*",
                  "Content-Type": "application/json",
                  "X-CSRF-Token": token,
               },
               body: JSON.stringify(formData),
            }
         )
            .then((res) => res.json())
            .then(function (res) {
               if (res.sid) {
                  formData.name = "";
                  formData.phone = "";
                  formErrors.name = "";
                  formErrors.phone = "";
                  closePopup();
                  storePopup.openPopupNotice();
                  setTimeout(() => {
                     storePopup.closePopupNotice();
                  }, 5000);
               } else {
                  formErrors.name = res.error.name || "";
                  formErrors.phone = res.error.phone || "";
               }
            });
      });
};

onMounted(() => {
   maskPhone();
});
</script>
