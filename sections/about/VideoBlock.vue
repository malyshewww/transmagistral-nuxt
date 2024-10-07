<template lang="pug">
	.main-about__item.video-block(@mouseover="showTrailer" @mouseleave="hideTrailer")
		a(:href="`/images/transmagistral.mp4`" data-fancybox="video").main-about__video.ibg
			video(ref="video" id="video" data-video="video" muted="" loop="loop" poster="/images/about/poster.jpg")
				source(:src="`/images/transmagistral.mp4`" type="video/mp4")
</template>

<script setup>
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

// eslint-disable-next-line
const showTrailer = () => {
   const trailer = document.querySelector(".trailer");
   trailer && trailer.classList.add("active");
};
// eslint-disable-next-line
const hideTrailer = () => {
   const trailer = document.querySelector(".trailer");
   trailer && trailer.classList.remove("active");
};

const fancyboxOptions = {
   Hash: false,
};

const video = ref("");

onMounted(() => {
   Fancybox.bind(`[data-fancybox="video"]`, fancyboxOptions);
   video.value.addEventListener("timeupdate", function () {
      if (video.value.currentTime > 10) {
         video.value.pause();
         video.value.currentTime = 0;
         video.value.play();
      }
   });
   const optionsObserverVideo = {
      rootMargin: "0px",
      threshold: 0,
   };
   const callbackVideo = (entries) => {
      entries.forEach((entry) => {
         if (entry.target.id === "video") {
            if (entry.isIntersecting) {
               entry.target.play();
            }
            // else {
            //    entry.target.pause();
            // }
         }
      });
   };
   const observerVideo = new IntersectionObserver(
      callbackVideo,
      optionsObserverVideo
   );
   const videos = document.querySelectorAll("video");
   videos.forEach((video) => {
      observerVideo.observe(video);
   });
});
</script>

<style lang="scss">
.main-about {
   &__video {
      display: block;
      width: 100%;
      border-radius: 14px;
      overflow: hidden;
      height: 100%;
      padding-bottom: math.div(506, 840) * 100%;
   }
   & .video-block {
      height: 100%;
   }
}
</style>
