<template lang="pug">
	section.main-documents#documents
		.container 
			.main-documents__body 
				UiSectionHeading(caption="Документы")
				.main-documents__content 
					h3.section-title.title-sm Документы для оформления сотрудничества
					.main-documents__description 
						p Мы работаем только по Договору с зафиксированными обязательствами и ответственностью.
						p #[strong Ознакомьтесь с комплектом документов] для оформления сотрудничества
					UiButton(buttonText="Скачать документы" classNames="btn-blue" iconName="document" @buttonClick="downloadFile")
					a(ref="downloadLink" href="transmagistral.zip" download="transmagistral" style="display: none;")
			UiSliderDocuments
		LineDocument
</template>

<script setup>
const downloadLink = ref("");
const downloadFile = () => {
   downloadLink.value.click();
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
   const mainDocumentSection = document.querySelector(".main-documents");
   const observerMainDocuments = new IntersectionObserver(callback, options);
   observerMainDocuments.observe(mainDocumentSection);
};
onMounted(() => {
   animation();
});
</script>

<style lang="scss">
.main-documents {
   padding: 74px 0 60px;
   overflow: hidden;
   position: relative;
   @media screen and (max-width: $xl) {
      padding: 36px 0;
   }
   & .line {
      position: absolute;
      top: 0;
      left: 0;
      top: 74px;
      width: 100%;
      pointer-events: none;
      z-index: -1;
      @media screen and (max-width: $xl) {
         display: none;
      }
   }
   &__body {
      display: grid;
      grid-template-columns: repeat(3, 33.3%);
      gap: 8px;
      align-items: start;
      position: relative;
      @media screen and (max-width: $xl) {
         grid-template-columns: 100%;
         gap: 24px;
      }
   }
   &__content {
      grid-column: span 2;
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 40px;
      & .btn {
         margin-top: 17px;
         @media screen and (max-width: $xl) {
            margin: 0;
         }
      }
      @media screen and (max-width: $xl) {
         grid-column: initial;
         gap: 20px;
      }
   }
   &__description {
      max-width: 700px;
      font-size: 24px;
      line-height: 26px;
      @media screen and (max-width: $xl) {
         max-width: 100%;
      }
      @media screen and (max-width: $md) {
         font-size: 17px;
         line-height: 140%;
      }
      & p {
         &:not(:last-child) {
            margin-bottom: 13px;
         }
      }
   }
}
</style>
