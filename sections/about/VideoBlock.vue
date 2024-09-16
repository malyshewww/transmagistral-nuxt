<template lang="pug">
	.main-about__item.video-block(@mouseover="showTrailer" @mouseleave="hideTrailer")
		a(:href="`/images/about/poster.jpg`" data-fancybox="video").main-about__video.ibg
			img(:src="`/images/about/poster.jpg`", alt="poster")
			//- video(autoplay="autoplay" loop="loop" poster="/images/about/poster.jpg")
			//- 	source(:src="``" type="video/mp4")
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

onMounted(() => {
   Fancybox.bind(`[data-fancybox="video"]`, fancyboxOptions);
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
