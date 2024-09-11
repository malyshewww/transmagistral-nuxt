<template lang="pug">
	section.section.main-about#about(data-bgcolor="linear-gradient(90deg, transparent 0%, transparent 100%)" data-theme="white" data-textcolor="#31373b")
		.container 
			.main-about__body
				.main-about__item.start-heading
					.main-about__content
						UiSectionHeading(caption="О компании")
						h2.section-title Мы дорожим своей репутацией
				MainAboutCard(v-for="item, index in aboutCards" :key="index" :item="item" :idx="index")
				.main-about__item.end-heading
					.main-about__content
						h3.title-sm Поэтому #[span всегда ответственно] подходим к любому контракту
				.main-about__item.video-block
					.main-about__video.ibg
						img(src="/images/about/poster.jpg", alt="")
						//- video(autoplay="autoplay" loop="loop" poster="/images/about/poster.jpg")
						//- 	source(:src="``" type="video/mp4")
</template>

<script setup>
const aboutCards = [
   {
      title: "АСМАП",
      subTitle: "Действительный член АСМАП",
      text: "Каждый год мы подтверждаем право быть лучшими и участвовать в&nbsp;Международных перевозках",
   },
   {
      title: "25",
      separator: "лет",
      subTitle: "На дорогах России",
      text: "Проверено временем — без&nbsp;единого сбоя. </br> Мы действительно можем этим гордиться",
   },
   {
      title: "100",
      separator: "+",
      subTitle: "Грузовиков SCANIA",
      text: "Наш автопарк постоянно обновляется в соответствии с&nbsp;современными стандартами качества",
   },
];
defineExpose({
   aboutCards,
});
</script>

<style lang="scss">
.main-about {
   padding: 120px 0 120px;
   @media screen and (max-width: $xl) {
      padding: 72px 0;
   }
   &__body {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(3, 1fr);
      gap: 19px 20px;
      align-items: start;
      @media screen and (max-width: $md) {
         grid-template-columns: 100%;
         grid-template-rows: auto;
         gap: 14px;
      }
   }
   &__item {
      grid-column: span 2;
      min-height: 506px;
      gap: 56px;
      @media screen and (max-width: $xl) {
         min-height: 212px;
      }
      @media screen and (max-width: $md) {
         grid-column: initial;
         min-height: auto;
      }
      &.end-heading {
         grid-area: 3 / 1 / 4 / 3;
         display: flex;
         flex-direction: row;
         justify-content: flex-end;
         text-align: right;
         align-items: end;
         @media screen and (max-width: $md) {
            grid-area: initial;
         }
      }
      &.video-block {
         grid-area: 3 / 3 / 4 / -1;
         @media screen and (max-width: $md) {
            grid-area: initial;
         }
      }
      &.start-heading {
         & .section-title {
            max-width: 659px;
            @media screen and (max-width: $md) {
               max-width: 100%;
            }
         }
         @media screen and (max-width: $md) {
            padding-bottom: 22px;
         }
      }
   }
   &__content {
      display: grid;
      gap: 56px;
      @media screen and (max-width: $md) {
         gap: 23px;
      }
      .end-heading & {
         max-width: 670px;
         padding-right: 52px;
         transform: translateY(20px);
         @media screen and (max-width: $md) {
            max-width: 100%;
            transform: none;
            text-align: left;
            padding: 34px 0 32px;
         }
      }
      & .title-sm {
         @media screen and (max-width: $xl) {
            font-size: 36px;
         }
      }
   }
   &__video {
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
