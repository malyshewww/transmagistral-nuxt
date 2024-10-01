<template lang="pug">
	Teleport(to="body")
		Popup(class="popup-work" :is-open="isOpen" @close-popup="closePopup")
			form(@submit.prevent="submitForm").popup__form.form
				.form__header.popup-header
					.popup__title Присоединяйтесь к нашей команде!
					.popup__sub-title Заполните форму, и мы свяжемся с вами для обсуждения сотрудничества
				.form__body 
					.form-item(:class="{error: formErrors.name}")
						.form-item__field
							input(type="text" v-model="formData.name" name="name" placeholder="Имя").form-input
						.error-message(v-if="formErrors.name") {{formErrors.name}}
					.form-item(:class="{error: formErrors.phone}")
						.form-item__field
							input(type="tel" v-model="formData.phone" name="phone" placeholder="+7 900 000-00-00").form-input 
						.error-message(v-if="formErrors.phone") {{formErrors.phone}}
					.form-item
						.form-text Во сколько с вами можно связаться (звонок поступит в течение 3-х дней)
						.form-item__timelines 
							.form-item__field
								input(type="text" name="time_from" placeholder="12:00").form-input
							.form-item__field
								input(type="text" name="time_to" placeholder="12:00").form-input 
					.form-item 
						.form-text 
							| Отправляя форму, я подтверждаю своё #[a(href="#" @click.prevent="openPopupPolitic").text-link согласие на обработку персональных данных] 
				UiButton(buttonText="Отправить" classNames="btn-red", buttonType="submit")
</template>

<script setup>
import { usePopupStore } from "~/stores/popup";
import IMask from "imask";
import maskPhone from "~/utils/maskPhone.js";

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

const maskTime = () => {
   const elements = document.querySelectorAll(".form-item__timelines input");
   const maskOptions = {
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

const formData = reactive({
   name: "",
   phone: "",
   webform_id: "join_team",
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
                  storePopup.openPopupNoticeWork();
                  setTimeout(() => {
                     storePopup.closePopupNoticeWork();
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
   maskTime();
});
</script>
