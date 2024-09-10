<template lang="pug">
	section.main-questions
		.main-questions__wrapper 
			LineQuestion
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
import maskPhone from "~/utils/maskPhone.js";

const onFocusInput = (e) => {
   const target = e.target;
   target.parentNode.classList.add("focus");
};
const onBlurInput = (e) => {
   const target = e.target;
   target.parentNode.classList.contains("focus") &&
      target.parentNode.classList.remove("focus");
};

const animation = () => {
   const callback = ([entry]) => {
      if (entry.isIntersecting) {
         if (entry.intersectionRatio >= 0.6) {
            entry.target.classList.add("in-view");
         }
      }
   };
   const options = {
      threshold: [0, 0.6, 1],
   };
   const targetElement = document.querySelector(".main-questions");
   const observerQuestion = new IntersectionObserver(callback, options);
   observerQuestion.observe(targetElement);
};

onMounted(() => {
   maskPhone();
   animation();
});
</script>

<style lang="scss">
.main-questions {
   color: var(--bg-bg-white);
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
      padding: 128px 0 152px;
      position: relative;
      isolation: isolate;
      background: var(--gradient);
      overflow: hidden;
      border-radius: 14px;
      isolation: isolate;
      &::before {
         content: "";
         position: absolute;
         inset: 0;
         width: 100%;
         height: 100%;
         background-image: url("/images/noise.png");
         background-repeat: no-repeat;
         background-size: cover;
         mix-blend-mode: overlay;
         z-index: -1;
         // mix-blend-mode: overlay;
         // background-repeat: no-repeat;
         // background-size: cover;
      }
      & .line {
         position: absolute;
         inset: 0;
         width: 100%;
         height: 100%;
         pointer-events: none;
         & svg {
            width: 100%;
         }
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
      color: var(--bg-bg-white);
      grid-area: title;
   }
   &__sub-title {
      grid-area: subTitle;
      font-size: 24px;
      line-height: 26px;
      color: var(--bg-bg-white);
   }
   &__form {
      grid-area: form;
      padding-top: 16px;
      & .form-text {
         padding: 0;
         color: var(--white);
      }
      & .text-link {
         border-color: var(--white);
         @media (any-hover) {
            &:hover {
               color: #31373b;
               border-color: #31373b;
            }
         }
      }
   }
}
.form {
   &__body {
      display: grid;
      grid-template-columns: 100%;
      gap: 24px;
   }
}
</style>
