<template lang="pug">
	section.main-advantages
		.container 
			.main-advantages__body 
				.section-heading
					.section-heading__caption О компании
				UiSliderAdvantages
</template>

<style lang="scss">
.main-advantages {
   padding: 120px 0;
   &__body {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      align-items: start;
      gap: 20px;
   }
   &__slider {
      grid-column: span 2;
   }
}
.slider-advantages {
   display: grid;
   gap: 100px 20px;
   &__body {
   }
   &__item {
   }
}

.title-sm {
}
</style>
