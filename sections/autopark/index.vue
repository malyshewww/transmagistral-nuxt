<template lang="pug">
	section.main-autopark(data-bgcolor="#255cae" data-bgcolor-leave="white" data-textcolor="#eacbd1")
		.container
			.main-autopark__body 
				UiSectionHeading(caption="Автопарк")
				h3.section-title.title-sm #[span >180] ЕДИНИЦ АВТОТРАНСПОРТА
		MainAutoparkAccordeon

</template>

<script setup></script>

<style lang="scss">
.main-autopark {
   padding: 120px 0;
   display: grid;
   gap: 100px;
   overflow: hidden;
   &__body {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      align-items: start;
   }
   & .section-title {
      grid-column: span 2;
   }
}
</style>
