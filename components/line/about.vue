<template>
   <div class="line line-about">
      <svg
         v-if="index === 0"
         class="svg-one"
         width="840"
         height="475"
         viewBox="0 0 840 475"
         fill="none"
         xmlns="http://www.w3.org/2000/svg">
         <g clip-path="url(#clip0_936_1103)">
            <path
               d="M-11.5505 34.4495C117.698 10.4734 379.52 95.3973 386.605 173.177C395.462 270.401 229.805 205.273 356.689 64.6219C483.574 -76.029 577.472 80.2935 625.174 257.71C672.876 435.126 873.105 264.859 941.455 464.545"
               stroke="#ECEFF7"
               stroke-width="20"
               width="0" />
            <animate
               attributeName="width"
               dur="1s"
               from="0"
               to="100%"
               fill="freeze" />
         </g>
         <defs>
            <clipPath id="clip0_936_1103">
               <rect width="840" height="475" fill="white" />
            </clipPath>
         </defs>
      </svg>
      <svg
         v-else-if="index === 1"
         ref="svgSecond"
         class="svg-second"
         width="100%"
         height="280"
         fill="none"
         xmlns="http://www.w3.org/2000/svg">
         <path
            d="M662 33.8065C504.539 56.7455 368.09 142.626 322.663 93.2574C289.266 56.9632 343.813 -3.7616 388.936 41.3953C407.871 60.345 455.707 175.075 314.192 246.944C172.676 318.812 -18.6689 116.196 -68 2"
            stroke="#ECEFF7"
            stroke-width="20" />
      </svg>
      <svg
         v-else-if="index === 2"
         ref="svgThree"
         class="svg-three"
         width="100%"
         height="255"
         fill="none"
         xmlns="http://www.w3.org/2000/svg">
         <g clip-path="url(#clip0_936_1096)">
            <path
               d="M800 409.626C474.563 471.803 771.435 203.558 240.149 223.558V223.558C172.391 226.109 165.233 155.719 206.4 101.839C235.558 63.6778 247.505 29.9671 189.17 38.2693C120.913 47.9837 -91.5868 144.834 -137 95.5593"
               stroke="#ECEFF7"
               stroke-width="20" />
         </g>
         <defs>
            <clipPath id="clip0_936_1096">
               <rect width="410" height="255" fill="white" />
            </clipPath>
         </defs>
      </svg>
   </div>
</template>

<script setup>
defineProps({
   index: {
      type: Number,
      required: true,
   },
});

const svgSecond = ref("");
const svgThree = ref("");

onMounted(() => {
   // const svgSecond = document.querySelector(".svg-second");
   // svgSecond.addEventListener("animationend", () => {
   //    console.log("end");
   // });
});
</script>

<style lang="scss">
.line-about {
   .svg-one path {
      stroke-dasharray: 2000;
      stroke-dashoffset: 2000;
   }
   & .svg-second path {
      stroke-dasharray: 2000;
      stroke-dashoffset: -1500;
   }
   & .svg-three path {
      stroke-dasharray: 2000;
      stroke-dashoffset: -1500;
   }
}
.about-card.active {
   .svg-one path {
      animation: dash 3s linear forwards;
   }
   .svg-second path {
      animation: dash 3s linear forwards;
   }
   .svg-three path {
      animation: dash 3s linear forwards 1.8s;
   }
}
@keyframes dash {
   to {
      stroke-dashoffset: 0;
   }
}
</style>
