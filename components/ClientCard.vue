<template lang="pug">
	.client-card(v-for="item, index in 7")
		.client-card__image
			img(:src="`/images/clients/client-${item}.svg`", alt="лого клиента")
</template>

<style lang="scss">
.client-card {
   min-height: 233px;
   display: grid;
   place-items: center;
   border-radius: 14px;
   background: $bg-bg-grey;
   &:nth-child(4) {
      grid-column: 2 / 3;
   }
}
</style>
