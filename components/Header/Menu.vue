<template lang="pug">
	.header__menu.menu 
		nav.menu__body 
			ul.menu__list 
				li.menu__item(v-for="item, index in menu" :key="index")
					a(:href="item.path" @click.prevent="goToSection($event)").menu__link.anchor-link {{ item.title }}
					//- NuxtLink(ref="anchorLink" :to="{ hash: `${item.path}`, path: '/'}" @click.prevent="goToSection($event)").menu__link.anchor-link {{ item.title }}
</template>

<script setup>
const { $Scrollbar: Scrollbar, $ScrollbarPlugin: ScrollbarPlugin } =
   useNuxtApp();

const goToSection = (e) => {
   const { bodyScrollBar } = useScrollbar();
   console.log(bodyScrollBar);
   const href = e.target.getAttribute("href");
   if (window.innerWidth > 1024) {
      const section = document.querySelector(`${href}`);
      var scrollToHere = section.offsetTop;
      bodyScrollBar.scrollTo(0, scrollToHere, 1000);
      // document.querySelector(`${href}`).scrollIntoView({
      //    behavior: "smooth",
      // });
   }
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
         let offset = 0;
         let headerHeight = 87;
         let itemY =
            document.querySelector(hash).getBoundingClientRect().top +
            scrollbar.offset.y;
         if (hash === "#about") {
            itemY =
               scrollbar.offset.y +
               document?.querySelector(hash).getBoundingClientRect().top;
         }
         // if (hash === "#clients") {
         //    itemY =
         //       document.querySelector(".buy-footer__wrap").getBoundingClientRect()
         //          .top +
         //       scrollbar.offset.y -
         //       document.querySelector(".documentation").clientHeight -
         //       document.querySelector(".gallery").clientHeight;
         // }
         // if (hash === "#application") {
         //    itemY =
         //       document.querySelector(".buy-footer__wrap").getBoundingClientRect()
         //          .top +
         //       scrollbar.offset.y -
         //       document.querySelector(".documentation").clientHeight -
         //       document.querySelector(".gallery").clientHeight -
         //       document.querySelector(".application").clientHeight;
         // }
         // reset scrollTop
         // scrollbar.containerEl.scrollTop = 0;

         // scrollbar.scrollIntoView(document.querySelector(hash), {
         //     // offsetTop: 60
         // });
         if (document.querySelector(hash).getBoundingClientRect().top > 0) {
            if (
               window
                  .getComputedStyle(document.querySelector(hash), null)
                  .paddingTop.replace("px", "") < 100
            ) {
               scrollbar.scrollTo(0, itemY - offset, 1000);
            } else {
               scrollbar.scrollTo(0, itemY + offset, 1000);
            }
         } else {
            if (
               window
                  .getComputedStyle(document.querySelector(hash), null)
                  .paddingTop.replace("px", "") < 100
            ) {
               scrollbar.scrollTo(0, itemY - offset - headerHeight, 1000);
            } else {
               scrollbar.scrollTo(0, itemY + offset - headerHeight, 1000);
            }
         }
         // scrollbar.scrollTo(0, document.querySelector(hash).getBoundingClientRect().top + scrollbar.offset.y, 600);
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

defineProps({
   menu: {
      type: Object,
      required: true,
   },
});
</script>

<style lang="scss">
.header__menu {
}
.menu {
   padding-left: 70px;
   &__body {
      display: flex;
   }
   &__list {
      @include reset-list;
      display: flex;
      align-items: center;
      gap: 54px;
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
   }
}
</style>
