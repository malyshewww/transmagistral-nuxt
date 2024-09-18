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
	PopupQuestions(@close-popup="store.closePopupQuestions" :is-open="store.isPopupQuestionsActive")
	PopupNotice(@close-popup="closeNoticePopupQuestions" :is-open="isOpenNoticePopupQuestions")
	PopupPolitic(@close-popup="closePopupPolitic" :is-open="store.isPopupPoliticActive || store.isOpenPopupPoliticNotNested")
</template>

<script setup>
import { usePopupStore } from "~/stores/popup";
import { useMainDataStore } from "~/stores/maindata";

import formActions from "~/utils/formActions.js";

const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();

const store = usePopupStore();
const storeData = useMainDataStore();
const isHiddenHeader = ref(true);
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
         isHiddenHeader.value = false;
         if (prevScrollPosition < scrollPosition) {
            isHiddenHeader.value = true;
            headerWhite.style.opacity = `0`;
            headerWhite.style.pointerEvents = `none`;
         } else {
            headerWhite.style.opacity = `1`;
            headerWhite.style.pointerEvents = `all`;
            isHiddenHeader.value = false;
         }
      } else if (mainScreen && offset.y < mainScreenHeight) {
         isHiddenHeader.value = true;
         headerWhite.style.opacity = `0`;
         headerWhite.style.pointerEvents = `none`;
      }
      prevScrollPosition = scrollPosition;
   });
   formActions();
});

const isOpenNoticePopupQuestions = ref(false);

const closePopupPolitic = () => {
   store.closePopupPolitic();
   if (store.isOpenPopupPoliticNotNested) {
      store.closePopupPoliticNotNested();
   }
};

const openNoticePopupQuestions = () => {
   isOpenNoticePopupQuestions.value = !isOpenNoticePopupQuestions.value;
};
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
