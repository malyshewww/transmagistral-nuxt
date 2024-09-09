<template lang="pug">
	.scroller(ref="scroller")
		.wrapper
			.page-gradient
			Header(:menu="menu" @openPopup="openPopupQuestions")
			MainScreen
			main
				.main-content
					Header(:menu="menu" @openPopup="openPopupQuestions" classNames="header-white" :isHiddenHeader="isHiddenHeader")
					slot 
					Footer(:menu="menu" @openPopup="openPopupQuestions" @openPopupPolitic="openPopupPolitic")
	PopupQuestions(@close-popup="closePopupQuestions" :is-open="isOpenPopupQuestions" @openPopupPolitic="openPopupPolitic")
	PopupNotice(@close-popup="closeNoticePopupQuestions" :is-open="isOpenNoticePopupQuestions")
	PopupPolitic(@close-popup="closePopupPolitic" :is-open="isOpenPopupPolitic")
</template>

<script setup>
const { $ScrollTrigger: ScrollTrigger } = useNuxtApp();

const isHiddenHeader = ref(true);

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
   const mainContent = document.querySelector(".main-content");
   const headerWhite = document.querySelector(".header.header-white");
   const mainScreenHeight = mainScreen.getBoundingClientRect().height;
   let prevScrollPosition = bodyScrollBar.scrollTop;
   bodyScrollBar.addListener(({ offset }) => {
      let scrollPosition = bodyScrollBar.offset.y;
      if (mainScreen && offset.y > mainScreenHeight) {
         isHiddenHeader.value = false;
         if (prevScrollPosition < scrollPosition) {
            console.log("false");
            isHiddenHeader.value = true;
            headerWhite.style.top = `0px`;
            headerWhite.style.opacity = `1`;
            headerWhite.style.pointerEvents = `all`;
         } else {
            isHiddenHeader.value = false;
            console.log("true");
            headerWhite.style.top = `${offset.y}px`;
         }
      } else if (mainScreen && offset.y == 0) {
         isHiddenHeader.value = true;
         headerWhite.style.opacity = `0`;
         headerWhite.style.pointerEvents = `none`;
      }
      prevScrollPosition = scrollPosition;
   });

   const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
         const id = entry.target.getAttribute("id");
         if (entry.intersectionRatio > 0) {
            document
               .querySelector(`.header li a[href="#${id}"]`)
               .parentElement.classList.add("active");
         } else {
            document
               .querySelector(`.header li a[href="#${id}"]`)
               .parentElement.classList.remove("active");
         }
      });
   });

   // Track all sections that have an `id` applied
   document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
   });
});

const isOpenPopupQuestions = ref(false);
const isOpenNoticePopupQuestions = ref(false);
const isOpenPopupPolitic = ref(false);
const openPopupQuestions = () => {
   isOpenPopupQuestions.value = !isOpenPopupQuestions.value;
};
const closePopupQuestions = () => {
   isOpenPopupQuestions.value = !isOpenPopupQuestions.value;
};
const openNoticePopupQuestions = () => {
   isOpenNoticePopupQuestions.value = !isOpenNoticePopupQuestions.value;
};
const closeNoticePopupQuestions = () => {
   isOpenNoticePopupQuestions.value = !isOpenNoticePopupQuestions.value;
};
const openPopupPolitic = () => {
   isOpenPopupPolitic.value = !isOpenPopupPolitic.value;
};
const closePopupPolitic = () => {
   isOpenPopupPolitic.value = !isOpenPopupPolitic.value;
};
const menu = [
   {
      title: "О компании",
      path: "#about",
   },
   {
      title: "Автопарк",
      path: "#autopark",
   },
   {
      title: "Работа",
      path: "#work",
   },
   {
      title: "Документы",
      path: "#documents",
   },
   {
      title: "Клиенты",
      path: "#clients",
   },
   {
      title: "Контакты",
      path: "#contacts",
   },
];
</script>

<style lang="scss">
.main-content {
   position: relative;
}
.scroller {
   height: 100vh;
   width: 100vw;
   overflow: auto;
   & .scrollbar-track {
      width: 6px;
      // background: rgba($bg-anthracite, 0.5);
   }
   & .scrollbar-thumb {
      // background: rgba($bg-green-lime, 0.8);
   }
   & .scrollbar-track-x {
      display: none;
   }
}
@media screen and (max-width: 1024px) {
   .scroller {
      // overflow: unset;
      // height: auto;
      & .scrollbar-track {
         width: 0;
      }
   }
}
</style>
