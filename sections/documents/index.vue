<template lang="pug">
	section.main-documents
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
</script>

<style lang="scss">
.main-documents {
   padding: 148px 0 60px;
   overflow: hidden;
   position: relative;
   & .line {
      position: absolute;
      top: 0;
      left: 0;
      top: 150px;
      width: 100%;
      pointer-events: none;
   }
   &__body {
      display: grid;
      grid-template-columns: repeat(3, 33.3%);
      gap: 8px;
      align-items: start;
      position: relative;
   }
   &__content {
      grid-column: span 2;
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 40px;
      & .btn {
         margin-top: 17px;
      }
   }
   &__description {
      max-width: 700px;
      font-size: 24px;
      line-height: 26px;
      & p {
         &:not(:last-child) {
            margin-bottom: 13px;
         }
      }
   }
}
</style>
