<template lang="pug">
	form(@submit.prevent="submitForm").main-questions__form.form
		.form__body
			.form-item(:class="{error: formErrors.name}")
				.form-item__field
					input(type="text" v-model="formData.name" name="name" placeholder="Имя").form-input
				.error-message(v-if="formErrors.name") {{formErrors.name}}
			.form-item(:class="{error: formErrors.phone}")
				.form-item__field
					input(type="tel" v-model="formData.phone" name="phone" placeholder="+7 900 000-00-00").form-input 
				.error-message(v-if="formErrors.phone") {{formErrors.phone}}
			UiButton(buttonText="Заказать консультацию")
			.form-text 
				p Отправляя форму, я подтверждаю #[a(href="#" @click.prevent="openPopupPolitic").text-link своё согласие на обработку персональных данных]
</template>

<script setup>
import maskPhone from "~/utils/maskPhone.js";
import { usePopupStore } from "~/stores/popup";

const storePopup = usePopupStore();

// eslint-disable-next-line
const openPopupPolitic = () => {
   storePopup.openPopupPoliticNotNested();
};

const formData = reactive({
   name: "",
   phone: "",
   webform_id: "main_questions",
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
