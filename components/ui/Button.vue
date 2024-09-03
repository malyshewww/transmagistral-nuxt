<template lang="pug">
	button(type="submit" :class="classNames").btn
		span.btn-text {{ buttonText }}
		span.btn-icon
			svg(width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg")
				path(fill-rule="evenodd" clip-rule="evenodd" d="M23 0C10.2975 0 0 10.2975 0 23C0 35.7025 10.2975 46 23 46C35.7025 46 46 35.7025 46 23C46 10.2975 35.7025 0 23 0ZM16.35 17C16.35 17.359 16.641 17.65 17 17.65H27.7465L16.5404 28.8562C16.2865 29.11 16.2865 29.5216 16.5404 29.7754C16.7942 30.0292 17.2058 30.0292 17.4596 29.7754L28.6658 18.5692V29.3158C28.6658 29.6748 28.9568 29.9658 29.3158 29.9658C29.6748 29.9658 29.9658 29.6748 29.9658 29.3158V17C29.9658 16.641 29.6748 16.35 29.3158 16.35H17C16.641 16.35 16.35 16.641 16.35 17Z" fill="#0D235A")
</template>

<script setup>
defineProps({
   classNames: {},
   buttonText: {},
});
</script>

<style lang="scss">
.btn {
   display: flex;
   align-items: center;
   gap: 10px;
   font-weight: 500;
   font-size: 18px;
   line-height: 23px;
   letter-spacing: -0.02em;
   text-align: center;
   color: $bg-bg-dark;
   border-radius: 100px;
   padding: 8px;
   min-height: 62px;
   background-color: $bg-bg-white;
   transition: background-color $time;
   &-text {
      flex-grow: 1;
      flex-shrink: 0;
      text-align: center;
   }
   &-icon {
      width: 46px;
      height: 46px;
      flex-shrink: 0;
      display: grid;
      place-items: center;
      .btn-blue &,
      .btn-red & {
         svg path {
            fill: $bg-bg-white;
         }
      }
   }
   &.btn-blue {
      background-color: $bg-bg-dark;
      color: $bg-bg-white;
   }
   &.btn-red {
      background-color: $bg-bg-red;
      color: $bg-bg-white;
   }
   @media (any-hover: hover) {
      &:hover {
         background-color: $bg-bg-grey-dark;
      }
      &.btn-blue:hover {
         background-color: #183377;
      }
      &.btn-red:hover {
         background-color: #d6192f;
      }
      &:active {
         background-color: #d8dbe2;
      }
      &.btn-blue:active {
         background-color: #2c478b;
      }
      &.btn-red:active {
         background-color: #c2051b;
      }
   }
   &:disabled,
   &.disabled {
      background-color: #e6e6e6;
      pointer-events: none;
      color: rgba(13, 35, 90, 0.3);
      & svg {
         fill: rgba(13, 35, 90, 0.3);
      }
   }
}
</style>
