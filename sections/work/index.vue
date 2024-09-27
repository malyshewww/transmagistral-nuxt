<template lang="pug">
	section.main-work#work(data-section="work")
		.main-work__wrapper 
			.main-work__image.ibg 
				picture
					source(type="image/webp" :srcset="`/images/work/main-img.webp`" )
					source(:srcset="`/images/work/main-img.jpg`" )
					img(:src="`/images/work/main-img.jpg`" alt="секция есть работа")
			.main-work__body
				.main-work__content 
					h2.main-work__title.section.title ЕСТЬ РАБОТА
					.main-work__sub-title Получайте стабильно высокий доход, спокойно занимаясь любимым делом
					UiButton(buttonText="Стать водителем" @buttonClick="openPopupWork")
		PopupWork(@close-popup="closePopupWork" :is-open="isOpenPopupWork")
		PopupNotice(@close-popup="closeNoticePopupWork" :is-open="isOpenNoticePopupWork" noticeSubTitle="Форма успешно отправлена. Мы позвоним вам в указанный промежуток")
</template>

<script setup>
const isOpenPopupWork = ref(false);
const isOpenNoticePopupWork = ref(false);

// eslint-disable-next-line
const openPopupWork = () => {
   isOpenPopupWork.value = !isOpenPopupWork.value;
   const { bodyScrollBar } = useScrollbar();
   bodyScrollBar.updatePluginOptions("lock", { lock: true });
};
// eslint-disable-next-line
const closePopupWork = () => {
   isOpenPopupWork.value = !isOpenPopupWork.value;
   const { bodyScrollBar } = useScrollbar();
   bodyScrollBar.updatePluginOptions("lock", { lock: false });
};
// eslint-disable-next-line
const openNoticePopupWork = () => {
   isOpenNoticePopupWork.value = !isOpenNoticePopupWork.value;
};
// eslint-disable-next-line
const closeNoticePopupWork = () => {
   isOpenNoticePopupWork.value = !isOpenNoticePopupWork.value;
};
</script>

<style lang="scss">
.main-work {
   padding: 79px 20px 74px;
   color: var(--bg-bg-white);
   @media screen and (max-width: $xl) {
      padding: 72px 20px 0px;
   }
   &__wrapper {
      background: var(--gradient);
      display: grid;
      grid-template-columns: 0.98fr 1fr;
      align-items: center;
      overflow: hidden;
      border-radius: 14px;
      position: relative;
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
         padding: 24px 15px;
         grid-template-columns: 100%;
         gap: 36px;
      }
      @media screen and (max-width: $md) {
         background: var(--gradient);
      }
   }
   &__image {
      padding-bottom: math.div(830, 930) * 100%;
      border-radius: 14px;
      overflow: hidden;
   }
   &__body {
      display: grid;
      align-items: center;
      padding: 20px;
      @media screen and (max-width: $xl) {
         align-items: stretch;
         width: 100%;
         padding: 0;
      }
   }
   &__content {
      margin: 0 auto;
      display: grid;
      justify-items: start;
      gap: 12px;
      @media screen and (max-width: $xl) {
         width: 100%;
         justify-items: stretch;
         gap: 8px;
      }
   }
   &__title {
      color: var(--bg-bg-white);
   }
   &__sub-title {
      font-size: 32px;
      line-height: 35px;
      max-width: 616px;
      @media screen and (max-width: $xl) {
         font-size: 24px;
         line-height: 140%;
         max-width: 100%;
      }
      @media screen and (max-width: $md) {
         font-size: 17px;
      }
   }
   & .btn {
      margin-top: 28px;
      @media screen and (max-width: $xl) {
         margin-top: 12px;
      }
   }
}
</style>
