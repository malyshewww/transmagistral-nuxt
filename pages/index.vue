<template lang="pug">
	About
	Reliably
	Autopark
	Questions
	Advantages
	Persons
	Work
	Documents
	Clients
</template>

<script setup>
const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();
onMounted(() => {
   /* COLOR CHANGER */
   const scrollColorElems = document.querySelectorAll("[data-bgcolor]");
   scrollColorElems.forEach((colorSection, i) => {
      const prevBg = i === 0 ? "" : scrollColorElems[i - 1].dataset.bgcolor;
      const prevText = i === 0 ? "" : scrollColorElems[i - 1].dataset.textcolor;
      const theme = i === 0 ? "white" : scrollColorElems[i - 1].dataset.theme;
      ScrollTrigger.create({
         trigger: colorSection,
         start: "top 50%",
         onEnter: () => {
            gsap.to(".wrapper", {
               "--color": colorSection.dataset.textcolor,
               "--page-gradient": colorSection.dataset.bgcolor,
               //    backgroundImage: colorSection.dataset.bgcolor,
               color: colorSection.dataset.textcolor,
               overwrite: "auto",
               duration: 1,
            });
            document.documentElement.className = `${colorSection.dataset.theme}`;
         },
         onLeaveBack: () => {
            gsap.to(".wrapper", {
               "--color": prevText,
               "--page-gradient": prevBg,
               //    backgroundImage: prevBg,
               color: prevText,
               overwrite: "auto",
               duration: 1,
            });
            document.documentElement.className = `${theme}`;
         },
      });
   });
   /* CHANGE NAVIGATION */
   // const scroller = document.querySelector(".scroller");
   // const options = {
   //    root: document,
   //    threshold: 0.55,
   // };
   // const changeNav = (entries) => {
   //    entries.forEach((entry) => {
   //       const id = entry.target.dataset.section;
   //       if (entry.intersectionRatio > 0 && entry.intersectionRatio >= 0.55) {
   //          console.log(id);
   //          const newLink = document
   //             .querySelector(`.header-white .menu__list a[href="#${id}"]`)
   //             .classList.add("active");
   //          console.log(newLink);
   //          document
   //             .querySelectorAll(".header-white .menu__list a")
   //             .forEach((item) => {
   //                item.classList.remove("active");
   //             });
   //       }
   //    });
   // };
   // const observer = new IntersectionObserver(changeNav, options);
   // document.querySelectorAll("[data-section]").forEach((section) => {
   //    observer.observe(section);
   // });
});
</script>
