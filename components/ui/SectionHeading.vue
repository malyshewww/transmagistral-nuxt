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
