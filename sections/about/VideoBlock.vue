<template lang="pug">
	.main-about__item.video-block(@mouseover="showTrailer" @mouseleave="hideTrailer")
		a(:href="`/images/transmagistral.mp4`" data-fancybox="video").main-about__video.ibg
			video(ref="video" id="video" autoplay="" muted="" loop="loop" poster="/images/about/poster.jpg")
				source(:src="`/images/transmagistral.mp4`" type="video/mp4")
</template>

<script setup>
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const showTrailer = () => {
   const trailer = document.querySelector(".trailer");
   trailer && trailer.classList.add("active");
};
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
