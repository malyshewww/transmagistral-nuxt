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
      const bgOpacity = i === 0 ? 0 : 1;
      // ScrollTrigger.create({
      //    trigger: colorSection,
      //    scroller: ".wrapper",
      //    start: "top 50%",
      //    onEnter: () =>
      //       gsap.to("body", {
      //          backgroundColor: colorSection.dataset.bgcolor,
      //          color: colorSection.dataset.textcolor,
      //          overwrite: "auto",
      //       }),
      //    onLeaveBack: () =>
      //       gsap.to("body", {
      //          backgroundColor: prevBg,
      //          color: prevText,
      //          overwrite: "auto",
      //       }),
      // });
      //   ScrollTrigger.create({
      //      trigger: colorSection,
      //      start: "bottom 50%",
      //      onLeave: () =>
      //         gsap.to(colorSection, {
      //            backgroundColor: colorSection.dataset.bgcolorLeave,
      //            color: prevText,
      //            overwrite: true,
      //         }),
      //   });
      ScrollTrigger.create({
         trigger: colorSection,
         start: "top 50%",
         //  triggerActions: "restart none reset none",
         onEnter: () => {
            gsap.to(".wrapper", {
               "--bgOpacity": bgOpacity,
               background: colorSection.dataset.bgcolor,
               color: colorSection.dataset.textcolor,
               overwrite: "auto",
            });
         },
         onLeaveBack: () => {
            gsap.to(".wrapper", {
               "--bgOpacity": bgOpacity,
               background: prevBg,
               color: prevText,
               overwrite: "auto",
            });
         },
         onUpdate: (self) => console.log(self),
      });
   });
});
</script>
