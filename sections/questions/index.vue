<template lang="pug">
	section.main-questions
		.main-questions__wrapper 
			span.main-questions__line
			.main-questions__body 
				h2.main-questions__title Готовы к любым вопросам
				.main-questions__sub-title Коммерческий отдел сможет вам ответить в рабочее время с 9:00 до 21:00
				form(action="#").main-questions__form.form
					.form__body
						.form-item 
							.form-item__field
								input(type="text" name="name" placeholder="Имя" autocomplete="off" @focus="onFocusInput($event)" @blur="onBlurInput($event)").form-input
						.form-item 
							.form-item__field
								input(type="tel" name="phone" placeholder="+7 900 000-00-00" autocomplete="off" @focus="onFocusInput($event)" @blur="onBlurInput($event)").form-input
						UiButton(buttonText="Заказать консультацию")
						.form-text 
							p Отправляя форму, я подтверждаю #[a(href="#").text-link своё согласие на обработку персональных данных]
</template>

<script setup>
import maskPhone from "~/utils/maskPhone";

const onFocusInput = (e) => {
   const target = e.target;
   target.parentNode.classList.add("focus");
};
const onBlurInput = (e) => {
   const target = e.target;
   target.parentNode.classList.contains("focus") &&
      target.parentNode.classList.remove("focus");
};

onMounted(() => {
   maskPhone();
});
</script>

<style lang="scss">
.main-questions {
   color: $bg-bg-white;
   padding: 0 20px;
   &__line {
      position: absolute;
      width: 100%;
      inset: 0;
      height: 100%;
      display: block;
      background-size: cover;
      background-position: center;
      background-image: url("/images/icons/questions-line.svg");
      pointer-events: none;
   }
   &__wrapper {
      padding: 128px 0;
      position: relative;
      isolation: isolate;
      background: linear-gradient(90deg, #255cae 0%, #b7d8e9 100%);
      overflow: hidden;
      border-radius: 14px;
      &::before {
         content: "";
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         mask-image: url("/images/questions/bg.png");
         mask-repeat: no-repeat;
         mask-position: center;
         background-color: transparent;
         z-index: -1;
      }
   }
   &__body {
      max-width: 1312px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 0.84fr;
      grid-template-areas:
         "title form"
         "subTitle form";
      gap: 34px 100px;
   }
   &__title {
      color: $bg-bg-white;
      grid-area: title;
   }
   &__sub-title {
      grid-area: subTitle;
      font-size: 24px;
      line-height: 26px;
      color: $bg-bg-white;
   }
   &__form {
      grid-area: form;
   }
}
.form {
   &__body {
      display: grid;
      grid-template-columns: 100%;
      gap: 24px;
   }
   &__button {
   }
}
.form-item {
   position: relative;
   &__field {
      position: relative;
      border-bottom: 1px solid rgba($bg-bg-white, 0.5);
      &::before {
         content: "";
         position: absolute;
         bottom: 0;
         left: 0;
         width: 0px;
         height: 1px;
         background-color: $bg-bg-white;
         transition: width $time * 2;
         z-index: 2;
      }
      &.focus {
         &::before {
            width: 100%;
         }
      }
   }
}
.form-input {
   min-height: 50px;
   width: 100%;
   padding: 16px;
   font-size: 16px;
   line-height: 18px;
   color: $bg-bg-white;
   background-color: transparent;
   &::placeholder {
      font-size: 16px;
      color: rgba($bg-bg-white, 0.5);
      line-height: 18px;
   }
}
.text-link {
   border-bottom: 1px solid currentColor;
}
</style>
