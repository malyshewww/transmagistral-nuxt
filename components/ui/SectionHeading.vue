<template lang="pug">
	.section-heading
		.section-heading__caption {{ caption }}
</template>

<script setup>
defineProps({
   caption: {
      type: String,
      required: false,
      default: "Заголовок",
   },
});
</script>

<style lang="scss">
.section-heading {
   border-radius: 100px;
   padding: 8px 20px;
   font-size: 20px;
   line-height: 28px;
   color: var(--bg-bg-red-changed);
   min-height: 46px;
   background: var(--bg-bg-red-6-changed);
   display: flex;
   justify-content: center;
   align-items: center;
   width: fit-content;
   backdrop-filter: blur(20px);
   @media screen and (max-width: $md) {
      padding: 4px 10px;
      font-size: 15px;
      line-height: 21px;
      min-height: 32px;
   }
}
</style>
