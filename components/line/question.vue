<template>
   <div class="line line-question">
      <svg
         width="1880"
         height="568"
         viewBox="0 0 1880 568"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         preserveAspectRatio="none">
         <path
            d="M-120.5 87C-80.6667 224.5 62 499 314 497C629 494.5 755 353.5 700.5 316.5C651.136 282.987 576.081 468.627 696.5 548.5C894 679.5 1083.5 645.667 1207.5 695.5C1187.83 629.333 1194.6 497 1379 497C1609.5 497 1461.23 120.182 1705 209C2280 418.5 1912.83 -1.66667 2011.5 -46"
            stroke="url(#paint0_radial_936_1182)"
            stroke-opacity="0.5"
            stroke-width="20" />
         <defs>
            <radialGradient
               id="paint0_radial_936_1182"
               cx="0"
               cy="0"
               r="1"
               gradientUnits="userSpaceOnUse"
               gradientTransform="translate(480 538.5) rotate(-1.52831) scale(8014.36 859.57)">
               <stop stop-color="white" stop-opacity="0" />
               <stop offset="1" stop-color="white" />
            </radialGradient>
         </defs>
      </svg>
   </div>
</template>

<style lang="scss">
.line-question {
   & svg {
      width: 100%;
   }
   & svg path {
      stroke-dasharray: 4000;
      stroke-dashoffset: 5000;
   }
}
.main-questions.in-view {
   & svg path {
      animation: dash 5s linear forwards;
   }
}
@keyframes dash {
   to {
      stroke-dashoffset: 0;
   }
}
</style>
