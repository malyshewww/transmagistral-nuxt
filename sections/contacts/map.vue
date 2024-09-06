<template lang="pug">
	.main-contacts__map.map-contacts
		.map#mapElem
		UiButton(buttonText="Проложить маршрут" classNames="map-button" buttonType="link")
</template>

<script setup>
import json from "~/static/geo.json";

const coords = [43.870026, 56.303546];

onMounted(() => {
   const mapElem = document.getElementById("mapElem");
   const script = document.createElement("script");
   script.src =
      "https://api-maps.yandex.ru/v3/?apikey=c87eadb5-9e35-48d6-8175-3e770edb04e0&lang=ru_RU";
   document.body.appendChild(script);
   script.onload = function () {
      initMap();
   };
   async function initMap() {
      await ymaps3.ready;
      const {
         YMap,
         YMapDefaultSchemeLayer,
         YMapDefaultFeaturesLayer,
         YMapMarker,
      } = ymaps3;
      const map = new YMap(document.getElementById("mapElem"), {
         location: {
            center: coords,
            zoom: 16,
         },
      });
      // Добавьте слой с дорогами и зданиями
      map.addChild(
         new YMapDefaultSchemeLayer({
            theme: "monochrome",
            customization: json,
         })
      );
      // Добавьте слой для маркеров
      map.addChild(new YMapDefaultFeaturesLayer());
      const content = document.createElement("img");
      content.classList.add("map-contacts__point");
      content.src = "/images/icons/map-pin.svg";
      // Инициализируйте маркер
      const marker = new YMapMarker(
         {
            coordinates: coords,
            draggable: true,
         },
         content
      );
      map.addChild(marker);
   }
});
</script>

<style lang="scss">
.main-contacts {
   &__map {
      position: relative;
      height: 780px;
      border-radius: 14px;
      overflow: hidden;
      background-color: var(--bg-bg-white);
      display: flex;
      justify-content: center;
      & .map {
         width: 100%;
         height: 100%;
      }
   }
}
.map-button {
   position: absolute;
   bottom: 42px;
   width: 100%;
   max-width: 355px;
}
.map-contacts {
   &__point {
      width: 100%;
      height: 100%;
      display: block;
      transform: translate(-50%, -100%);
   }
   [class*="--marker"] {
      width: 56px;
      height: 64px;
   }
   [class*="--map-copyrights"] {
      display: none;
   }
}
</style>
