<template lang="pug">
	.scroller(ref="scroller")
		.wrapper
			UiTrailer
			Header(:menu="menu")
			MainScreen
			main
				.main-content
					Header(:menu="menu" :isHiddenHeader="isHiddenHeader" classNames="header-white")
					slot 
					Footer(:menu="menu")
	PopupQuestions(@close-popup="closePopupQuestions" :is-open="store.isPopupQuestionsActive || store.isPopupQuestionsNotNested")
	PopupNotice(@close-popup="closeNoticePopupQuestions" :is-open="isOpenNoticePopupQuestions")
	PopupPolitic(@close-popup="closePopupPolitic" :is-open="store.isPopupPoliticActive || store.isOpenPopupPoliticNotNested")
</template>

<script setup>
import { usePopupStore } from "~/stores/popup";
import { useMainDataStore } from "~/stores/maindata";
import { useMenuStore } from "~/stores/menu";

import formActions from "~/utils/formActions.js";

const { $ScrollTrigger: ScrollTrigger } = useNuxtApp();

const store = usePopupStore();
const storeData = useMainDataStore();
const storeMenu = useMenuStore();
// eslint-disable-next-line
const isHiddenHeader = ref(storeMenu.isHiddenHeader);
// eslint-disable-next-line
const menu = storeData.menu;

onMounted(() => {
   const { bodyScrollBar, scroller } = useScrollbar();
   setTimeout(() => {
      ScrollTrigger.refresh();
   }, 1000);
   ScrollTrigger.scrollerProxy(scroller, {
      scrollTop(value) {
         if (arguments.length > 0) {
            bodyScrollBar.scrollTop = value;
         }
         return bodyScrollBar.scrollTop;
      },
   });
   bodyScrollBar.addListener(ScrollTrigger.update);
   ScrollTrigger.defaults({ scroller: scroller });

   const mainScreen = document.querySelector(".main-screen");
   const headerWhite = document.querySelector(".header.header-white");
   const mainScreenHeight = mainScreen.getBoundingClientRect().height;
   let prevScrollPosition = bodyScrollBar.scrollTop;
   bodyScrollBar.addListener(({ offset }) => {
      let scrollPosition = bodyScrollBar.offset.y;
      headerWhite.style.top = `${offset.y}px`;
      // pageGradient.value.top = scrollPosition;
      if (mainScreen && offset.y > mainScreenHeight) {
         // isHiddenHeader.value = false;
         storeMenu.visibleHeader();
         if (prevScrollPosition < scrollPosition) {
            // isHiddenHeader.value = true;
            storeMenu.hideHeader();
            headerWhite.style.opacity = `0`;
            headerWhite.style.pointerEvents = `none`;
         } else {
            headerWhite.style.opacity = `1`;
            headerWhite.style.pointerEvents = `all`;
            // isHiddenHeader.value = false;
            storeMenu.visibleHeader();
         }
      } else if (mainScreen && offset.y < mainScreenHeight) {
         // isHiddenHeader.value = true;
         storeMenu.hideHeader();
         headerWhite.style.opacity = `0`;
         headerWhite.style.pointerEvents = `none`;
      }
      prevScrollPosition = scrollPosition;
   });
   // const headerObjArr = [];
   // const anchorLinks = document.querySelectorAll(".header-white .anchor-link");
   // [...anchorLinks].forEach((link) => {
   //    const hash = link.getAttribute("href").substring(1);
   //    const target = document.getElementById(hash);
   //    headerObjArr.push({
   //       element: link,
   //       target: target,
   //       targetStart: target.getBoundingClientRect().top + window.scrollY,
   //       targetEnd:
   //          target.getBoundingClientRect().top +
   //          window.scrollY +
   //          target.clientHeight,
   //    });
   // });
   /* CHANGE NAVIGATION */
   function scrollNav() {
      const sections = document.querySelectorAll("[data-section]");
      const navLinks = document.querySelectorAll(".header-white .anchor-link");
      sections.forEach((section) => {
         const rect = section.getBoundingClientRect();
         const sectionId = section.id;
         if (rect.top >= -50 && rect.top <= 150) {
            navLinks.forEach((link) => {
               link.classList.remove("active");
               if (link.getAttribute("href").substring(1) === sectionId) {
                  link.classList.add("active");
               }
            });
         }
      });
   }
   const scrollEvent = new Event("scroll");
   bodyScrollBar.addListener(() => {
      document.dispatchEvent(scrollEvent);
   });
   document.addEventListener("scroll", () => {
      scrollNav();
      // headerObjArr.forEach((obj) => {
      //    if (
      //       obj.targetStart < window.scrollY + 100 &&
      //       obj.targetEnd > window.screenY
      //    ) {
      //       anchorLinks.forEach((item) => {
      //          item.classList.remove("active");
      //       });
      //       obj.element.classList.add("active");
      //    }
      // });
   });
   formActions();
});

const isOpenNoticePopupQuestions = ref(false);

// eslint-disable-next-line
const closePopupPolitic = () => {
   store.closePopupPolitic();
   if (store.isOpenPopupPoliticNotNested) {
      store.closePopupPoliticNotNested();
   }
};
// eslint-disable-next-line
const closePopupQuestions = () => {
   store.closePopupQuestions();
   if (store.isPopupQuestionsNotNested) {
      store.closePopupQuestionsNotNested();
   }
};
// eslint-disable-next-line
const openNoticePopupQuestions = () => {
   isOpenNoticePopupQuestions.value = !isOpenNoticePopupQuestions.value;
};
// eslint-disable-next-line
const closeNoticePopupQuestions = () => {
   isOpenNoticePopupQuestions.value = !isOpenNoticePopupQuestions.value;
};
</script>

<style lang="scss">
.main-content {
   position: relative;
}
.scroller {
   height: 100vh;
   width: 100vw;
   overflow: auto;
   position: relative;
   isolation: isolate;
   & .scrollbar-track {
      width: 6px;
      background: rgba(#255cae, 0.5);
   }
   & .scrollbar-thumb {
      background: rgba(#255cae, 0.8);
   }
   & .scrollbar-track-x {
      display: none;
   }
}
@media screen and (max-width: 1024px) {
   .scroller {
      // overflow: clip;
      // width: auto;
      // height: auto;
      & .scrollbar-track {
         width: 0;
      }
   }
}
</style>
