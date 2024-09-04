<template lang="pug">
	.main-advantages__slider.slider-advantages
		.slider-advantages__track
			.slider-advantages__body 
				.slider-advantages__item.item-advantages(v-for="item, index in advantagesList" :key="index")
					.item-advantages__image.ibg
						img(:src="`/images/advantages/image-${index+1}.jpg`", alt="")
					.item-advantages__content 
						.item-advantages__number
						.item-advantages__title {{ item.title }}
						.item-advantages__text(v-html="item.text")
</template>

<script setup>
const advantagesList = [
   {
      title: "Мультирежимные перевозки",
      text: "<p>Мы поддерживаем разные температурные режимы внутри одного кузова с помощью <strong>погружных электронных градусников в каждом отсеке</strong></p>",
   },
   {
      title: "Водители профессионалы",
      text: "<p>Чтобы обеспечить высокий уровень сервиса, мы берём на работу <strong>опытных людей</strong> без вредных привычек, ответственных и пунктуальных. Все водители имеют <strong>медицинские книжки</strong></p>",
   },
   {
      title: "GPS/Глонасс мониторинг",
      text: "<p>Все наши тягачи подключены к системе мониторинга GPS/Глонасс, с помощью чего логисты контролируют перевозки</p><p>Нашим постоянным клиентам доступен <strong>роуминг Wialon</strong></p>",
   },
   {
      title: "Страхование груза",
      text: "<p>Все грузы страхуются в известных страховых компаниях <strong>в пределах 15 млн ₽</strong></p>",
   },
   {
      title: "Сертифицированный автосервис",
      text: "<p>Для обслуживания автопарка в 2005 году мы открыли <strong>собственный сервисный центр.</strong></p><p>Ремонт выполняют сертифицированные механики, исключительно оригинальными запчастями</p>",
   },
   {
      title: "Собственный автопарк",
      text: "<p>Наш автопарк регулярно проходит полноценное ТО, чтобы соответствовать техническим и санитарным нормам.</p><p>Около 30% наших тягачей используют экологически чистое газовое топливо</p>",
   },
];
</script>

<style lang="scss">
.slider-advantages {
   &__track {
   }
   &__body {
      display: flex;
      gap: 120px;
   }
}
.item-advantages {
   flex-shrink: 0;
   width: 594px;
   counter-increment: num;
   display: grid;
   gap: 40px;
   color: $text-text-secondary;
   &__image {
      border-radius: 14px;
      overflow: hidden;
      padding-bottom: math.div(394, 594) * 100%;
   }
   &__content {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 24px;
   }
   &__number {
      border-radius: 40px;
      display: grid;
      place-items: center;
      width: 56px;
      height: 56px;
      background: $bg-bg-grey;
      &::before {
         content: counter(num);
         display: block;
         font-weight: 700;
         font-size: 24px;
         line-height: 26px;
         color: $text-text-secondary;
      }
   }
   &__title {
      font-weight: 700;
      font-size: 32px;
      line-height: 35px;
   }
   &__text {
      font-size: 20px;
      line-height: 28px;
      & p {
         &:not(:last-child) {
            margin-bottom: 20px;
         }
      }
   }
}
</style>
