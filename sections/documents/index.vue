<template lang="pug">
	section.main-documents
		.container 
			.main-documents__body 
				UiSectionHeading(caption="Документы")
				.main-documents__content 
					h3.section-title.title-sm Документы для оформления сотрудничества
					.main-documents__description 
						p Мы работаем только по Договору с зафиксированными обязательствами и ответственностью.
						p Ознакомьтесь с комплектом документов для оформления сотрудничества
					UiButton(buttonText="Скачать документы" classNames="btn-blue" iconName="document" @buttonClick="downloadFile")
					a(ref="downloadLink" href="transmagistral.zip" download="transmagistral" style="display: none;")
					UiSliderDocuments
</template>

<script setup>
const downloadLink = ref("");
const downloadFile = () => {
   downloadLink.value.click();
};
</script>

<style lang="scss">
.main-documents {
   padding: 150px 0 60px;
   &__body {
      display: grid;
      grid-template-columns: repeat(3, 33.3%);
      align-items: start;
   }
   &__content {
      grid-column: span 2;
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 40px;
      & .btn {
         margin-top: 16px;
      }
   }
}
</style>
