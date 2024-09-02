<template lang="pug">
	.main-screen__advantages 
		ul.main-screen__advantages-list 
			li.main-screen__advantages-item(v-for="item, index in advantagesList" :key="index") {{ item }}
</template>

<script setup>
const advantagesList = ["Быстро", "Безопасно", "Надежно"];
defineExpose({
   advantagesList,
});
</script>

<style lang="scss">
.main-screen {
   &__advantages {
      &-list {
         @include reset-list;
         display: flex;
         align-items: center;
         gap: 14px;
      }
      &-item {
         backdrop-filter: blur(20px);
         background: $bg-bg-white-15;
         padding: 8px 20px;
         border-radius: 100px;
         min-height: 46px;
         font-size: 20px;
         line-height: 28px;
         color: $bg-bg-white;
      }
   }
}
</style>
