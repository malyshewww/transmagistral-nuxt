<template lang="pug">
	section.main-persons
		.container 
			.main-persons__body 
				h3.section-title.title-sm Команда профессионалов, объединённых одной #[span целью]
				.main-persons__cards
					PersonCard
					.person-card last
</template>

<style lang="scss">
.main-persons {
   padding-bottom: 156px;
   &__body {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 100px 20px;
   }
   & .section-title {
      max-width: 904px;
      grid-column: 2/ -1;
   }
   &__cards {
      grid-column: span 3;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
   }
}
</style>

<script setup></script>
