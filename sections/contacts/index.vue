<template lang="pug">
	section.main-contacts#contacts
		.main-contacts__body 
			.main-contacts__content
				h2.section-title Контакты
				.main-contacts__items
					.main-contacts__item
						address.main-contacts__address г. Н. Новгород, ул. Кузбасская, 1
						.main-contacts__schedule.schedule-contacts
							.schedule-contacts__item ПН-ПТ
							.schedule-contacts__item 8:00–17:00
					.main-contacts__item
						.main-contacts__phones 
							a(href="tel:+78312748833").main-contacts__phone +7 831 274-88-33
							a(href="tel:+78312748811").main-contacts__phone +7 831 274-88-11
						UiButton(buttonText="Позвоните мне" buttonType="button" classNames="btn-blue" iconName="phone" @buttonClick="openPopupQuestions")
					//- .main-contacts__item
						UiSocialList
			ContactsMap
</template>

<script setup>
import { usePopupStore } from "~/stores/popup";

const store = usePopupStore();
const openPopupQuestions = () => {
   store.openPopupQuestions();
};
</script>

<style lang="scss">
.main-contacts {
   & .section-title {
      margin-bottom: 40px;
   }
   &__body {
      padding: 60px;
      background: var(--bg-bg-grey);
      border-radius: 14px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      gap: 20px;
   }
   &__content {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 355px;
      margin: 0 auto;
      & .btn {
         width: 100%;
      }
   }
   &__items {
      display: grid;
      width: 100%;
      gap: 56px;
   }
   &__item {
      display: grid;
      gap: 20px;
   }
   &__address {
      font-style: normal;
      font-size: 24px;
      line-height: 26px;
      color: var(--bg-bg-dark-contacts);
   }
   &__phones {
      display: grid;
      gap: 8px;
   }
   &__phone {
      font-weight: 700;
      font-size: 32px;
      line-height: 35px;
      color: var(--bg-bg-dark-contacts);
      transition: color $time;
      @media (any-hover: hover) {
         &:hover {
            color: #183377;
         }
      }
   }
}
.schedule-contacts {
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 8px;
   &__item {
      font-size: 24px;
      line-height: 26px;
      color: var(--bg-bg-dark-contacts);
      display: grid;
      place-items: center;
      border: 1px solid var(--bg-bg-dark-contacts);
      border-radius: 50px;
      padding: 8px 16px;
      min-height: 42px;
   }
}
</style>
