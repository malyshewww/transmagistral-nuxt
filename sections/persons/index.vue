<template lang="pug">
	section.main-persons
		.container 
			.main-persons__body 
				h3.section-title.title-sm Команда профессионалов, объединённых одной #[span целью]
				.main-persons__cards
					PersonCard(:cards="personList")
					.person-card.person-card-last
						.person-card__top 
							.person-card__small-image.ibg(v-for="image, index in 3") 
								img(:src="`/images/persons/person-small-${index+1}.jpg`", alt="маленькое фото команды")
							.person-card__small-image
								span
						.person-card__bottom
							.person-card__num 200 #[span +]
							.person-card__description Профессионалов в нашей команде
</template>

<script setup>
const personList = [
   {
      name: "Литвинчук Сергей",
      post: "Исполнительный директор",
      email: "litvinchuk@transmagistral.ru",
      phone: "+7 953 415-01-06",
   },
   {
      name: "Гусева Наталья",
      post: "Начальник отдела логистики",
      email: "guseva@transmagistral.ru",
      phone: "+7 915 958-75-68",
   },
   {
      name: "Тощенкова Арина",
      post: "Логист",
      email: "toshenkova@transmagistral.ru",
      phone: "+7 910 395-06-20",
   },
   {
      name: "Доскинский Дмитрий",
      post: "Логист",
      email: "dima@transmagistral.ru",
      phone: "+7 915 956-47-71",
   },
   {
      name: "Свистунов Андрей",
      post: "Логист",
      email: "svistunov@transmagistral.ru",
      phone: "+7 910 394-20-34",
   },
   {
      name: "Перевалова Светлана",
      post: "Логист",
      email: "perevalova@transmagistral.ru",
      phone: "+7 910 396-13-50",
   },
];
</script>

<style lang="scss">
.main-persons {
   padding-bottom: 156px;
   &__body {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 100px 20px;
   }
   & .section-title {
      max-width: 904px;
      grid-column: 2/ -1;
   }
   &__cards {
      grid-column: span 3;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
   }
}
</style>

<script setup></script>
