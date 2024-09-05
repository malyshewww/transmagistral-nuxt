<template lang="pug">
	section.main-clients
		.container 
			.main-clients__body 
				UiSectionHeading(caption="Клиенты")
				.main-clients__content 
					h2.section-title Нас выбирают лидеры
					.main-clients__description 
						p Мы всегда рады долгосрочному сотрудничеству. Клиенты — основная ценность нашей компании
				.main-clients__cards 
					ClientCard
					UiButton(buttonText="Стать нашим клиентом" classNames="btn-red" buttonType="button" @buttonClick="openPopupClient")
		PopupClient(@close-popup="closePopupClient" :is-open="isOpenPopupClient")
		PopupNotice(@close-popup="closeNoticePopupClient" :is-open="isOpenNoticePopupClient")
</template>

<script setup>
const isOpenPopupClient = ref(false);
const isOpenNoticePopupClient = ref(false);
const openPopupClient = () => {
   isOpenPopupClient.value = !isOpenPopupClient.value;
};
const closePopupClient = () => {
   isOpenPopupClient.value = !isOpenPopupClient.value;
};
const openNoticePopupClient = () => {
   isOpenNoticePopupClient.value = !isOpenNoticePopupClient.value;
};
const closeNoticePopupClient = () => {
   isOpenNoticePopupClient.value = !isOpenNoticePopupClient.value;
};
</script>

<style lang="scss">
.main-clients {
   padding: 60px 0 120px;
   &__body {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      align-items: start;
      gap: 96px 20px;
   }
   &__content {
      grid-column: span 2;
      max-width: 640px;
      display: grid;
      gap: 40px;
   }
   &__description {
      font-size: 24px;
      line-height: 26px;
   }
   &__cards {
      grid-column: span 3;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
      & .btn {
         border-radius: 14px;
         font-weight: 700;
         font-size: 24px;
         line-height: 26px;
         padding: 40px;
         gap: 40px;
         &-text {
            align-self: start;
            max-width: 90%;
            flex: 1;
            text-align: left;
         }
         &-icon {
            width: 56px;
            height: 56px;
            align-self: end;
            & svg {
               width: 100%;
               height: 100%;
            }
         }
      }
   }
}
</style>
