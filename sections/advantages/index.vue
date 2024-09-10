<template lang="pug">
	section.main-advantages
		.container 
			.main-advantages__body 
				UiSectionHeading(caption="Преимущества")
				h2.section-title В чем секрет нашего успеха?
			UiSliderAdvantages
</template>

<style lang="scss">
.main-advantages {
   padding: 120px 0 114px;
   overflow: hidden;
   &__body {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      align-items: start;
      gap: 20px 20px;
      & .section-title {
         grid-column: span 2;
      }
   }
   &__slider {
      grid-column: span 3;
   }
}
.slider-advantages {
   display: grid;
   gap: 100px 20px;
}
</style>
