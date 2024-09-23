<template lang="pug">
	.header__menu.menu(@click="closeMenu")
		.menu__wrapper
			nav.menu__body(@click.stop)
				ul.menu__list 
					li.menu__item(v-for="item, index in menu" :key="index")
						a(:href="item.path" @click.prevent="goToSection($event)").menu__link.anchor-link {{ item.title }}
				.header-actions-mobile
					HeaderActions
</template>

<script setup>
import { useMenuStore } from "~/stores/menu.js";

const storeMenu = useMenuStore();

const props = defineProps({
   menu: {
      type: Object,
      required: true,
   },
   isHiddenHeader: {
      type: Boolean,
      required: false,
   },
});

const emit = defineEmits(["closeMenu"]);

const closeMenu = () => {
   emit("closeMenu");
};

const { $Scrollbar: Scrollbar, $ScrollbarPlugin: ScrollbarPlugin } =
   useNuxtApp();

const addedHeight = ref(0);

const goToSection = (e) => {
   const { bodyScrollBar } = useScrollbar();
   const href = e.target.getAttribute("href");
   const section = document.querySelector(`${href}`);
   if (window.innerWidth > 1024) {
      if (href === "#about") {
         addedHeight.value = 0;
      } else if (href === "#work") {
         addedHeight.value = 0;
      } else {
         addedHeight.value = 50;
      }
   }
   const scrollToHere =
      bodyScrollBar.offset.y +
      section.getBoundingClientRect().top -
      addedHeight.value;
   bodyScrollBar.scrollTo(0, scrollToHere, 1000);
   bodyScrollBar.updatePluginOptions("lock", {
      lock: false,
   });
   closeMenu();
};
onMounted(() => {
   class AnchorPlugin extends ScrollbarPlugin {
      static pluginName = "anchor";
      onHashChange = () => {
         this.jumpToHash(window.location.hash);
      };
      onClick = (event) => {
         const { target } = event;
         if (target.tagName !== "A") {
            return;
         }
         const hash = target.getAttribute("href").replace("/", "");
         if (!hash || hash.charAt(0) !== "#") {
            return;
         }
         this.jumpToHash(hash);
      };
      jumpToHash = (hash) => {
         const { scrollbar } = this;
         if (!hash) {
            return;
         }
         scrollbar.containerEl.scrollTop = 0;
      };
      onInit() {
         this.jumpToHash(window.location.hash);
         window.addEventListener("hashchange", this.onHashChange);
         this.scrollbar.contentEl.addEventListener("click", this.onClick);
      }
      onDestory() {
         window.removeEventListener("hashchange", this.onHashChange);
         this.scrollbar.contentEl.removeEventListener("click", this.onClick);
      }
   }
   Scrollbar.use(AnchorPlugin);
});
</script>

<style lang="scss">
.menu {
   padding-left: 70px;
   @media screen and (max-width: 1600px) {
      padding: 0;
   }
   @media screen and (max-width: $xxl) {
      order: 1;
      width: 100%;
      display: flex;
      justify-content: center;
   }
   @media screen and (max-width: $xl) {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100vh;
      box-shadow: 0 2px 5px 0 rgba(25, 51, 99, 0.05);
      z-index: 20;
      order: 0;
      display: block;
      background: rgba(16, 35, 70, 0.3);
      opacity: 0;
      transition: opacity $time * 2;
      pointer-events: none;
      .menu-open & {
         opacity: 1;
         pointer-events: all;
      }
   }
   &__wrapper {
      position: relative;
      &::before {
         content: "";
         display: none;
         position: absolute;
         inset: 0;
         width: 100%;
         height: 52px;
         background-color: var(--white);
         z-index: 25;
         opacity: 0;
         transition: opacity $time * 2;
         @media screen and (max-width: $xl) {
            display: block;
            .menu-open & {
               opacity: 1;
            }
         }
      }
   }
   &__body {
      display: flex;
      @media screen and (max-width: $xl) {
         background: var(--white);
         height: calc(100vh - 162px);
         padding: 78px 15px 20px;
         overflow-x: hidden;
         overflow-y: auto;
         display: flex;
         flex-direction: column;
         align-items: flex-start;
         justify-content: space-between;
         gap: 36px;
         transform: translateY(-120%);
         transition: transform $time * 2 ease-in-out 0s;
         &::-webkit-scrollbar,
         &::-webkit-scrollbar-track,
         &::-webkit-scrollbar-thumb {
            width: 0;
            height: 0;
            display: none;
            background-color: transparent;
         }
         .menu-open & {
            transform: translateY(0);
         }
      }
   }
   &__list {
      @include reset-list;
      display: flex;
      align-items: center;
      gap: 54px;
      @media screen and (max-width: 1600px) {
         gap: 15px;
      }
      @media screen and (max-width: $xl) {
         flex-direction: column;
         align-items: flex-start;
      }
   }
   &__item {
   }
   &__link {
      color: currentColor;
      line-height: 25px;
      transition: color $time;
      @media (any-hover: hover) {
         &:hover {
            color: var(--bg-bg-dark);
         }
         .header-white &:hover {
            color: var(--bg-bg-red);
         }
      }
      &.active {
         color: var(--bg-bg-red);
      }
   }
}
</style>
