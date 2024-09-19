<template lang="pug">
	Teleport(to="body")
		Popup(class="popup-politic" :is-open="isOpen" @close-popup="closePopup")
			.popup__content-wrap
				.popup-header 
					.popup__title Политика конфиденциальности
					.popup__description.content
						p Чтобы обеспечить высокий уровень сервиса, мы берём на работу опытных людей без вредных привычек, ответственных и пунктуальных. Все водители имеют медицинские книжки
						p Чтобы обеспечить высокий уровень сервиса, мы берём на работу опытных людей без вредных привычек, ответственных и пунктуальных. Все водители имеют медицинские книжки
						ul
							li Стандартные рефрижераторы
							li Мультирежимные рефрежераторы
							li Двухъярусные рефрежераторы
							li Одиночные развозные автомобили
							li Тягачи
						ol
							li Стандартные рефрижераторы
							li Мультирежимные рефрежераторы
							li Двухъярусные рефрежераторы
							li Одиночные развозные автомобили
							li Тягачи

</template>

<script setup>
defineProps({
   isOpen: {
      type: Boolean,
   },
});
const emit = defineEmits(["closePopup"]);
const closePopup = () => {
   emit("closePopup");
};
</script>
