<template lang="pug">
	a(v-if="buttonType === 'link'" :class="classNames" href="https://yandex.ru/maps/org/transmagistral/1137116339/?ll=43.885648%2C56.309208&mode=search&sctx=ZAAAAAgBEAAaKAoSCQ2poniV8UVAEZ55Oey%2BJ0xAEhIJLqbb9Lq6tD8RIq629DL%2Fpj8iBgABAgMEBSgKOABAwJwGSAFqAnJ1nQHNzEw9oAEAqAEAvQHpRSa5wgEFs4mcngSCAh7QotGA0LDQvdGB0JzQsNCz0LjRgdGC0YDQsNC70YyKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=43.885648%2C56.309208&source=wizbiz_new_map_single&sspn=0.107298%2C0.033186&text=%D0%A2%D1%80%D0%B0%D0%BD%D1%81%D0%9C%D0%B0%D0%B3%D0%B8%D1%81%D1%82%D1%80%D0%B0%D0%BB%D1%8C&z=14.2" target="_blank").btn
		span.btn-text {{ buttonText }}
		span.btn-icon
			svg(width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg")
					path(fill-rule="evenodd" clip-rule="evenodd" d="M23 0C10.2975 0 0 10.2975 0 23C0 35.7025 10.2975 46 23 46C35.7025 46 46 35.7025 46 23C46 10.2975 35.7025 0 23 0ZM16.35 17C16.35 17.359 16.641 17.65 17 17.65H27.7465L16.5404 28.8562C16.2865 29.11 16.2865 29.5216 16.5404 29.7754C16.7942 30.0292 17.2058 30.0292 17.4596 29.7754L28.6658 18.5692V29.3158C28.6658 29.6748 28.9568 29.9658 29.3158 29.9658C29.6748 29.9658 29.9658 29.6748 29.9658 29.3158V17C29.9658 16.641 29.6748 16.35 29.3158 16.35H17C16.641 16.35 16.35 16.641 16.35 17Z" fill="white")
	button(v-else :type="buttonType" :class="classNames" @click="buttonClick").btn
		span.btn-text {{ buttonText }}
		span.btn-icon
			svg(v-if="iconName === 'document'" width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg")
				path(fill-rule="evenodd" clip-rule="evenodd" d="M0 23C0 10.2975 10.2975 0 23 0C35.7025 0 46 10.2975 46 23C46 35.7025 35.7025 46 23 46C10.2975 46 0 35.7025 0 23ZM15.65 24.1667C15.291 24.1667 15 24.4577 15 24.8167V28.15C15 28.7644 15.2441 29.3537 15.6785 29.7881C16.113 30.2226 16.7023 30.4667 17.3167 30.4667H28.9833C29.5978 30.4667 30.187 30.2226 30.6215 29.7881C31.0559 29.3537 31.3 28.7644 31.3 28.15V24.8167C31.3 24.4577 31.009 24.1667 30.65 24.1667C30.291 24.1667 30 24.4577 30 24.8167V28.15C30 28.4196 29.8929 28.6782 29.7022 28.8689C29.5116 29.0596 29.253 29.1667 28.9833 29.1667H17.3167C17.047 29.1667 16.7884 29.0596 16.5978 28.8689C16.4071 28.6782 16.3 28.4196 16.3 28.15V24.8167C16.3 24.4577 16.009 24.1667 15.65 24.1667ZM18.5263 21.0239C18.2725 21.2777 18.2725 21.6893 18.5263 21.9431L22.658 26.0748C22.7698 26.2041 22.9316 26.2889 23.1134 26.299C23.2925 26.3098 23.4753 26.2467 23.6122 26.1098L27.7789 21.9431C28.0327 21.6893 28.0327 21.2777 27.7789 21.0239C27.5251 20.7701 27.1135 20.7701 26.8597 21.0239L23.8 24.0835V15.65C23.8 15.291 23.509 15 23.15 15C22.791 15 22.5 15.291 22.5 15.65V24.0783L19.4456 21.0239C19.1917 20.7701 18.7802 20.7701 18.5263 21.0239Z" fill="white")
			svg(v-else-if="iconName === 'phone'" width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg")
				path(fill-rule="evenodd" clip-rule="evenodd" d="M0 23C0 10.2975 10.2975 0 23 0C35.7025 0 46 10.2975 46 23C46 35.7025 35.7025 46 23 46C10.2975 46 0 35.7025 0 23ZM18.8333 15.3167C18.2718 15.3167 17.8167 15.7718 17.8167 16.3333V29.6667C17.8167 30.2282 18.2718 30.6833 18.8333 30.6833H27.1667C27.7282 30.6833 28.1833 30.2282 28.1833 29.6667V16.3333C28.1833 15.7718 27.7282 15.3167 27.1667 15.3167H18.8333ZM16.5167 16.3333C16.5167 15.0539 17.5539 14.0167 18.8333 14.0167H27.1667C28.4461 14.0167 29.4833 15.0539 29.4833 16.3333V29.6667C29.4833 30.9461 28.4461 31.9833 27.1667 31.9833H18.8333C17.5539 31.9833 16.5167 30.9461 16.5167 29.6667V16.3333ZM23 27.35C22.641 27.35 22.35 27.641 22.35 28C22.35 28.359 22.641 28.65 23 28.65H23.0083C23.3673 28.65 23.6583 28.359 23.6583 28C23.6583 27.641 23.3673 27.35 23.0083 27.35H23Z" fill="white")
			svg(v-else width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg")
				path(fill-rule="evenodd" clip-rule="evenodd" d="M23 0C10.2975 0 0 10.2975 0 23C0 35.7025 10.2975 46 23 46C35.7025 46 46 35.7025 46 23C46 10.2975 35.7025 0 23 0ZM16.35 17C16.35 17.359 16.641 17.65 17 17.65H27.7465L16.5404 28.8562C16.2865 29.11 16.2865 29.5216 16.5404 29.7754C16.7942 30.0292 17.2058 30.0292 17.4596 29.7754L28.6658 18.5692V29.3158C28.6658 29.6748 28.9568 29.9658 29.3158 29.9658C29.6748 29.9658 29.9658 29.6748 29.9658 29.3158V17C29.9658 16.641 29.6748 16.35 29.3158 16.35H17C16.641 16.35 16.35 16.641 16.35 17Z" fill="white")

</template>

<script setup>
defineProps({
   classNames: {},
   buttonText: {},
   buttonType: {},
   iconName: {},
});
const emit = defineEmits(["buttonClick"]);

const buttonClick = () => {
   emit("buttonClick");
};

defineExpose({
   buttonClick,
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
   color: var(--bg-bg-dark);
   border-radius: 100px;
   padding: 8px;
   padding-left: 24px;
   min-height: 62px;
   background-color: var(--bg-bg-white);
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
      & svg path {
         fill: var(--bg-bg-dark);
      }
      .btn-blue &,
      .btn-red & {
         svg path {
            fill: var(--bg-bg-white);
         }
      }
   }
   &.btn-blue {
      background-color: var(--bg-bg-dark);
      color: var(--bg-bg-white);
   }
   &.btn-red {
      background-color: var(--bg-bg-red);
      color: var(--bg-bg-white);
   }
   @media (any-hover: hover) {
      &:hover {
         background-color: var(--bg-bg-grey-dark);
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
