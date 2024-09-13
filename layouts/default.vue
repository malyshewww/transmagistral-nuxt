<template lang="pug">
	.page-gradient(ref="pageGradient")
	.scroller(ref="scroller")
		.wrapper
			Header(:menu="menu" :isMainMenu="isMainMenu === true")
			MainScreen
			main
				.main-content
					Header(:menu="menu" classNames="header-white" :isHiddenHeader="isHiddenHeader" :isMainMenu="isMainMenu")
					slot 
					Footer(:menu="menu")
	PopupQuestions(@close-popup="store.closePopupQuestions" :is-open="store.isPopupQuestionsActive")
	PopupNotice(@close-popup="closeNoticePopupQuestions" :is-open="isOpenNoticePopupQuestions")
	PopupPolitic(@close-popup="store.closePopupPolitic" :is-open="store.isPopupPoliticActive")
</template>

<script setup>
import { usePopupStore } from "~/stores/popup";

const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();

const store = usePopupStore();

const isHiddenHeader = ref(true);

const isMainMenu = ref(false);

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
   // if (window.innerWidth > 1024) {
   // } else {
   //    ScrollTrigger.defaults({ scroller: ".wrapper" });
   // }

   const mainScreen = document.querySelector(".main-screen");
   const mainContent = document.querySelector(".main-content");
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
            headerWhite.style.pointerEvents = `all`;
            headerWhite.style.opacity = `0`;
         } else {
            headerWhite.style.opacity = `1`;
            isHiddenHeader.value = false;
         }
      } else if (mainScreen && offset.y == 0) {
         isHiddenHeader.value = true;
         headerWhite.style.opacity = `0`;
         headerWhite.style.pointerEvents = `none`;
      }
      prevScrollPosition = scrollPosition;
   });

   /* COLOR CHANGER */
   // const scrollColorElems = document.querySelectorAll("[data-bgcolor]");
   // scrollColorElems.forEach((colorSection, i) => {
   //    const prevBg = i === 0 ? "" : scrollColorElems[i - 1].dataset.bgcolor;
   //    const prevText = i === 0 ? "" : scrollColorElems[i - 1].dataset.textcolor;
   //    const bgOpacity = i === 0 ? 0 : 1;
   //    const theme = i === 0 ? "white" : scrollColorElems[i - 1].dataset.theme;
   //    ScrollTrigger.create({
   //       trigger: colorSection,
   //       start: "top 50%",
   //       onEnter: () => {
   //          gsap.to(".wrapper", {
   //             // "--bgOpacity": bgOpacity,
   //             "--color": colorSection.dataset.textcolor,
   //             backgroundImage: colorSection.dataset.bgcolor,
   //             color: colorSection.dataset.textcolor,
   //             overwrite: "auto",
   //             duration: 0.4,
   //          });
   //          document.querySelector(
   //             ".wrapper"
   //          ).className = `wrapper ${colorSection.dataset.theme}`;
   //          document.documentElement.className = `${colorSection.dataset.theme}`;
   //       },
   //       onLeaveBack: () => {
   //          gsap.to(".wrapper", {
   //             // "--bgOpacity": bgOpacity,
   //             "--color": prevText,
   //             backgroundImage: prevBg,
   //             color: prevText,
   //             overwrite: "auto",
   //             duration: 0.4,
   //          });
   //          document.documentElement.className = `${theme}`;
   //          document.querySelector(".wrapper").className = `wrapper ${theme}`;
   //       },
   //    });
   // });

   // const observer = new IntersectionObserver((entries) => {
   //    entries.forEach((entry) => {
   //       const id = entry.target.getAttribute("id");
   //       if (entry.intersectionRatio > 0) {
   //          document
   //             .querySelector(`.header li a[href="#${id}"]`)
   //             .parentElement.classList.add("active");
   //       } else {
   //          document
   //             .querySelector(`.header li a[href="#${id}"]`)
   //             .parentElement.classList.remove("active");
   //       }
   //    });
   // });
   // document.querySelectorAll("section[id]").forEach((section) => {
   //    observer.observe(section);
   // });
});

const isOpenNoticePopupQuestions = ref(false);

const openNoticePopupQuestions = () => {
   isOpenNoticePopupQuestions.value = !isOpenNoticePopupQuestions.value;
};
const closeNoticePopupQuestions = () => {
   isOpenNoticePopupQuestions.value = !isOpenNoticePopupQuestions.value;
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
      overflow: clip;
      width: auto;
      height: auto;
      & .scrollbar-track {
         width: 0;
      }
   }
}
</style>
