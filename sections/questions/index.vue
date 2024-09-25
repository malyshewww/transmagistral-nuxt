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
								input(type="text" name="name" placeholder="Имя" autocomplete="off").form-input
						.form-item 
							.form-item__field
								input(type="tel" name="phone" placeholder="+7 900 000-00-00" autocomplete="off").form-input
						UiButton(buttonText="Заказать консультацию")
						.form-text 
							p Отправляя форму, я подтверждаю #[a(href="#" @click.prevent="openPopupPolitic").text-link своё согласие на обработку персональных данных]

</template>

<script setup>
import maskPhone from "~/utils/maskPhone.js";
import { usePopupStore } from "~/stores/popup";

const store = usePopupStore();

// eslint-disable-next-line
const openPopupPolitic = () => {
   store.openPopupPoliticNotNested();
};

const animation = () => {
   const callback = ([entry]) => {
      if (entry.isIntersecting) {
         if (entry.intersectionRatio >= 0.2) {
            entry.target.classList.add("in-view");
         }
      }
   };
   const options = {
      threshold: [0, 0.2, 1],
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
   padding: 60px 20px 0;
   @media screen and (max-width: $xl) {
      padding: 36px 15px 0;
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
         background-image: url("/images/noise.png"), var(--gradient);
         background-blend-mode: soft-light;
         z-index: -1;
      }
      @media screen and (max-width: $xl) {
         padding: 100px 0;
      }
      @media screen and (max-width: $md) {
         padding: 24px;
      }
      & .line {
         position: absolute;
         inset: 0;
         width: 100%;
         height: 100%;
         pointer-events: none;
         z-index: -1;
         & svg {
            width: 100%;
         }
         @media screen and (max-width: $xl) {
            display: none;
         }
      }
   }
   &__body {
      max-width: 1332px;
      padding: 0 10px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 0.84fr;
      grid-template-areas:
         "title form"
         "subTitle form";
      gap: 34px 100px;
      @media screen and (max-width: $xl) {
         grid-template-columns: 100%;
         gap: 12px;
         grid-template-areas:
            "title"
            "subTitle"
            "form";
      }
      @media screen and (max-width: $md) {
         padding: 0;
      }
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
      @media screen and (max-width: $md) {
         font-size: 17px;
         line-height: 23px;
      }
   }
   &__form {
      grid-area: form;
      padding-top: 16px;
      position: relative;
      z-index: 2;
      & .form-text {
         padding: 0;
         color: var(--white);
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
