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
   @media screen and (max-width: $xl) {
      padding: 100px 0;
   }
   @media screen and (max-width: $md) {
      padding: 72px 0 36px;
   }

   &__body {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      align-items: start;
      gap: 20px 20px;
      & .section-title {
         grid-column: span 2;
         @media screen and (max-width: $xl) {
            grid-column: initial;
         }
      }
      @media screen and (max-width: $xl) {
         grid-template-columns: 100%;
         gap: 24px;
      }
   }
}
</style>
