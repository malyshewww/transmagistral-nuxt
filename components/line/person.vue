<template>
   <div class="line line-person">
      <svg
         width="1920"
         height="571"
         viewBox="0 0 1920 571"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         preserveAspectRatio="none">
         <g clip-path="url(#clip0_936_1202)">
            <path
               d="M-78 18.2629C32.9732 106.555 262.5 207.617 405.883 170.692C665.424 103.853 490 -50.2779 437.5 37.1863C375.274 140.854 412.861 229.123 468.368 387.592C513.357 516.033 336.9 648.971 1991 481.049"
               stroke="#ECEFF7"
               stroke-width="20" />
         </g>
         <defs>
            <clipPath id="clip0_936_1202">
               <rect
                  width="1921"
                  height="571"
                  fill="white"
                  transform="translate(-1)" />
            </clipPath>
         </defs>
      </svg>
   </div>
</template>
<style lang="scss">
.line-person {
   & svg {
      width: 100%;
   }
   & svg path {
      stroke-dasharray: 4000;
      stroke-dashoffset: 5000;
   }
}
.main-persons.in-view {
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
