<template lang="pug">
	section.main-work
		.main-work__wrapper 
			.main-work__image.ibg 
				img(:src="`/images/work/main-img.jpg`", alt="фото")
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

const openPopupWork = () => {
   console.log("click");
   isOpenPopupWork.value = !isOpenPopupWork.value;
};
const closePopupWork = () => {
   isOpenPopupWork.value = !isOpenPopupWork.value;
};
const openNoticePopupWork = () => {
   isOpenNoticePopupWork.value = !isOpenNoticePopupWork.value;
};
const closeNoticePopupWork = () => {
   isOpenNoticePopupWork.value = !isOpenNoticePopupWork.value;
};
</script>

<style lang="scss">
.main-work {
   padding: 0 20px;
   color: var(--bg-bg-white);
   &__wrapper {
      background-image: url("/images/work/main-bg.svg");
      background-repeat: no-repeat;
      background-size: cover;
      display: grid;
      grid-template-columns: 0.98fr 1fr;
      align-items: center;
      overflow: hidden;
      border-radius: 14px;
   }
   &__image {
      padding-bottom: math.div(830, 930) * 100%;
      border-radius: 14px;
      overflow: hidden;
   }
   &__body {
      display: grid;
      align-items: center;
   }
   &__content {
      margin: 0 auto;
      display: grid;
      justify-items: start;
      gap: 12px;
   }
   &__title {
      color: var(--bg-bg-white);
   }
   &__sub-title {
      font-size: 32px;
      line-height: 35px;
      max-width: 616px;
   }
   & .btn {
      margin-top: 28px;
   }
}
</style>
