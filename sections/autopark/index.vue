<template lang="pug">
	section.main-autopark#autopark(data-section="autopark" data-bgcolor="linear-gradient(90deg, #ffffff 0%, #ffffff 100%)" data-theme="white" data-textcolor="#31373b")
		.container
			.main-autopark__body 
				UiSectionHeading(caption="Автопарк")
				h3.section-title.title-sm #[span >180] ЕДИНИЦ АВТОТРАНСПОРТА
		MainAutoparkAccordeon

</template>

<script setup></script>

<style lang="scss">
.main-autopark {
   padding: 60px 0 60px;
   display: grid;
   gap: 100px;
   overflow: hidden;
   @media screen and (max-width: $xl) {
      padding: 36px 0;
      gap: 36px;
   }
   &__body {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      align-items: start;
      @media screen and (max-width: $xl) {
         grid-template-columns: 100%;
         gap: 24px;
      }
   }
   & .section-title {
      grid-column: span 2;
      @media screen and (max-width: $xl) {
         grid-column: initial;
      }
   }
}
</style>
