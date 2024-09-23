<template lang="pug">
	section.reliably.section-gradient(data-bgcolor="linear-gradient(90deg, #b7d8e9 0%, #255cae 100%)" data-theme="dark" data-textcolor="white")
		.container
			.reliably__body 
				.reliably__heading 
					h3.title-sm Трансмагистраль — это надёжно
				UiSliderReliably
</template>

<style lang="scss">
.reliably {
   padding: 152px 0 60px;
   @media screen and (max-width: $xl) {
      padding: 100px 0 0px;
   }
   @media screen and (max-width: $md) {
      padding: 36px 0;
   }
   &__body {
      display: grid;
      gap: 12px;
      position: relative;
      z-index: 10;
      @media screen and (max-width: $xxl) {
         gap: 24px;
      }
   }
   &__heading {
      max-width: 560px;
   }
}
</style>
