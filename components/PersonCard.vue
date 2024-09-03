<template lang="pug">
	.person-card(v-for="item, index in personList" :key="index")
		.person-card__body 
			.person-card__image
				img(:src="`/images/persons/person-${index+1}.jpg`", :alt="item.name")
			.person-card__name {{ item.name }}
			.person-card__post {{ item.post }}
			.person-card__contacts.contacts-person
				a(:href="item.email").contacts-person__link {{ item.email }}
				a(:href="item.phone").contacts-person__link {{ item.phone }}
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
.person-card {
   padding: 40px;
   border-radius: 14px;
   background-color: $bg-bg-grey;
   color: $text-text-secondary;
   &:last-child {
      grid-column: span 2;
   }
   &__image {
      width: 275px;
      height: 275px;
      border-radius: 50%;
      overflow: hidden;
      align-self: center;
   }
   &__body {
      display: flex;
      flex-direction: column;
      gap: 20px;
      text-align: center;
   }
   &__name {
      font-weight: 700;
      font-size: 24px;
      line-height: 26px;
   }
   &__post {
      border-radius: 100px;
      padding: 6px 8px 8px 8px;
      display: flex;
      justify-content: center;
      min-height: 35px;
      background: $bg-bg-grey-dark;
      font-size: 20px;
      line-height: 28px;
   }
   &__contacts {
      display: grid;
      gap: 8px;
   }
}
.contacts-person {
   &__link {
      font-size: 20px;
      line-height: 28px;
   }
}
</style>
