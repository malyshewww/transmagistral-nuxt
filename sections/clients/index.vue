<template lang="pug">
	section.main-clients#clients(data-section="clients" data-bgcolor="linear-gradient(90deg, #ffffff 0%, #ffffff 100%)" data-theme="white" data-textcolor="white")
		.container 
			.main-clients__body 
				UiSectionHeading(caption="Клиенты")
				.main-clients__content 
					h2.section-title Нас выбирают лидеры
					.main-clients__description 
						p Мы всегда рады долгосрочному сотрудничеству. Клиенты — основная ценность нашей компании
				.main-clients__cards
					ClientCard
					.anim-client-card
						UiButton(buttonText="Стать нашим клиентом" classNames="btn-red" buttonType="button" @buttonClick="openPopupClient")
		PopupClient(@close-popup="closePopupClient" :is-open="isOpenPopupClient")
</template>

<script setup>
const isOpenPopupClient = ref(false);

// eslint-disable-next-line
const openPopupClient = () => {
   isOpenPopupClient.value = !isOpenPopupClient.value;
   const { bodyScrollBar } = useScrollbar();
   bodyScrollBar.updatePluginOptions("lock", { lock: true });
};
// eslint-disable-next-line
const closePopupClient = () => {
   isOpenPopupClient.value = !isOpenPopupClient.value;
   const { bodyScrollBar } = useScrollbar();
   bodyScrollBar.updatePluginOptions("lock", { lock: false });
};
</script>

<style lang="scss">
.main-clients {
   padding: 60px 0 60px;
   @media screen and (max-width: $xl) {
      padding: 72px 0 0px;
   }
   &__body {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      align-items: start;
      gap: 96px 20px;
      @media screen and (max-width: $xl) {
         grid-template-columns: 100%;
         gap: 27px;
      }
   }
   &__content {
      grid-column: span 2;
      max-width: 640px;
      display: grid;
      gap: 40px;
      @media screen and (max-width: $xl) {
         grid-column: initial;
         gap: 14px;
         margin-bottom: 9px;
         max-width: 98%;
      }
   }
   &__description {
      font-size: 24px;
      line-height: 26px;
      color: #31373b;
      @media screen and (max-width: $md) {
         font-size: 17px;
         line-height: 140%;
      }
   }
   &__cards {
      grid-column: span 3;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
      @media screen and (max-width: $xl) {
         grid-template-columns: repeat(2, 1fr);
         grid-column: initial;
      }
      @media screen and (max-width: $md) {
         grid-template-columns: 100%;
      }
      & .btn {
         border-radius: 14px;
         font-weight: 700;
         font-size: 24px;
         line-height: 26px;
         padding: 40px;
         gap: 40px;
         height: 100%;
         @media screen and (max-width: $xxl) {
            padding: 20px;
            width: 100%;
         }
         @media screen and (max-width: $md) {
            min-height: 150px;
         }
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
