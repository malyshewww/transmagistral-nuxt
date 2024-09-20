<template lang="pug">
	header.header(:class="[classNames, {'hide': isHiddenHeader, 'menu-open': isMenuOpen}]")
		.container 
			.header__body 
				NuxtLink(to="/").header__logo.logo
					picture 
						source(:srcset="`/images/logo.svg`" media="(min-width: 767.98px)")
						source(:srcset="`/images/logo-small.svg`" media="(min-width: 767px)")
						img(src="/images/logo.svg", alt="логотип")
				HeaderMenu(:menu="menu" @closeMenu="closeMenu")
				HeaderActions
				button(type="button" @click="openMenu" :class="{active: isMenuOpen}").burger
					.burger__icon
						span
</template>

<script setup>
import { useMenuStore } from "~/stores/menu";
import { usePopupStore } from "~/stores/popup";

const store = useMenuStore();
const storePopup = usePopupStore();

defineProps({
   menu: {
      type: Object,
      required: true,
   },
   isHiddenHeader: {
      type: Boolean,
   },
   classNames: {
      type: String,
   },
});

const isMenuOpen = ref(store.isMenuOpen);
const isMenuOpenPopupStore = ref(storePopup.isMenuOpen);

const openMenu = () => {
   if (window.innerWidth < 1024) {
      const { bodyScrollBar } = useScrollbar();
      isMenuOpen.value = !isMenuOpen.value;
      bodyScrollBar.updatePluginOptions("lock", {
         lock: !isMenuOpen.value ? false : true,
      });
      isMenuOpenPopupStore.value = !isMenuOpenPopupStore.value;
   }
};
const closeMenu = () => {
   if (window.innerWidth < 1024) {
      const { bodyScrollBar } = useScrollbar();
      isMenuOpen.value = false;
      bodyScrollBar.updatePluginOptions("lock", {
         lock: !isMenuOpen.value ? false : true,
      });
      isMenuOpenPopupStore.value = false;
   }
};
</script>

<style lang="scss">
.header {
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   min-height: 123px;
   background-color: transparent;
   display: grid;
   align-items: center;
   z-index: 10;
   color: var(--white);
   padding: 10px 0;
   &.header-white {
      position: fixed;
      color: #31373b;
      box-shadow: 0 2px 5px 0 rgba(25, 51, 99, 0.05);
      background: var(--white);
      min-height: 87px;
      transition: opacity $time * 2;
      z-index: 11;
      &.hide {
         opacity: 0;
         pointer-events: none;
      }
      @media screen and (max-width: $md) {
         min-height: 52px;
      }
   }
   @media screen and (max-width: $md) {
      min-height: 52px;
      color: var(--main-color);
   }
   &__body {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px 24px;
      @media screen and (max-width: $xxl) {
         flex-wrap: wrap;
      }
   }
   &__logo {
      flex-shrink: 0;
      max-width: 267px;
      @media screen and (max-width: $xxxl) {
         max-width: 200px;
      }
      @media screen and (max-width: $md) {
         z-index: 25;
      }
   }
}
.burger {
   display: none;
   @media screen and (max-width: $md) {
      display: block;
      position: relative;
      padding: 8px 5px;
      width: 32px;
      height: 32px;
      flex-shrink: 0;
      z-index: 25;
      &.active {
         & .burger__icon {
            & span,
            &::before,
            &::after {
               background-color: #0d235a;
            }
            & span {
               transform: scale(0);
               background-color: transparent;
               transition: transform 0.5s ease, background-color 0.5s ease,
                  background-color 0.3s ease;
            }
            &::before {
               top: calc(50%);
               transform: rotate(45deg);
               transition: top 0.3s ease, transform 0.3s ease-out 0.3s,
                  background-color 0.3s ease;
            }
            &::after {
               bottom: calc(50% - 1px);
               transform: rotate(-45deg);
               transition: bottom 0.3s ease, transform 0.3s ease-out 0.3s,
                  background-color 0.3s ease;
            }
         }
      }
      &__icon {
         width: 21px;
         height: 14px;
         position: relative;
         display: grid;
         place-items: center;
         pointer-events: none;
         & span,
         &::before,
         &::after {
            position: absolute;
            display: block;
            transition: all ease-in 0s;
            background-color: var(--white);
            height: 1px;
            width: 100%;
            .header-white & {
               background-color: #0d235a;
            }
         }
         & span {
            position: static;
         }
         &::before,
         &::after {
            content: "";
         }
         &::before {
            top: 0;
            transition: top 0.3s ease 0.5s, transform 0.3s ease-out,
               background-color 0.3s ease;
         }

         &::after {
            bottom: 0;
            transition: bottom 0.3s ease 0.5s, transform 0.3s ease-out,
               background-color 0.3s ease;
         }
      }
   }
}
</style>
