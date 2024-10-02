<template lang="pug">
	Teleport(to="body")
		Popup(class="popup-questions" :is-open="isOpen" @close-popup="closePopup")
			form(@submit.prevent="submitForm($event)").popup__form.form
				.form__header.popup-header
					.popup__title Остались вопросы?
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
					//- .form-item 
					//- 	UiDropdown(@dataFromDropdown="newDataFromDropdown")
					.form-item 
						.form-text 
							| Отправляя форму, я подтверждаю своё #[a(href="#" @click.prevent="openPopupPolitic").text-link согласие на обработку персональных данных] 
				UiButton(buttonText="Отправить" classNames="btn-red" buttonType="submit")
</template>

<script setup>
import { usePopupStore } from "~/stores/popup";

const childButton = ref(null);

const childRef = useTemplateRef("childButton");

const getRef = (child) => {
   console.log(child.value);
   return child.value;
};

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

// eslint-disable-next-line
const newDataFromDropdown = (value) => {
   formData.value.theme = value;
};

const formData = reactive({
   name: "",
   phone: "",
   webform_id: "questions",
});

const formErrors = reactive({
   name: "",
   phone: "",
});

const runtimeConfig = useRuntimeConfig();

// eslint-disable-next-line
const submitForm = async (e) => {
   const buttonSubmit = e.target.querySelector('button[type="submit"]');
   const buttonText = buttonSubmit.querySelector(".btn-text");
   const buttonSubmitText = buttonText.textContent;
   buttonSubmit.setAttribute("disabled", "true");
   buttonText.textContent = "идет отправка...";
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
                  buttonSubmit.removeAttribute("disabled");
                  buttonText.textContent = buttonSubmitText;
               } else {
                  formErrors.name = res.error.name || "";
                  formErrors.phone = res.error.phone || "";
                  buttonSubmit.removeAttribute("disabled");
                  buttonText.textContent = buttonSubmitText;
               }
            });
      });
};

onMounted(() => {});
</script>
