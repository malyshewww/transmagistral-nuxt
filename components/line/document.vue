<template>
   <div class="line line-document">
      <svg
         width="1920"
         height="906"
         viewBox="0 0 1920 906"
         fill="none"
         xmlns="http://www.w3.org/2000/svg">
         <g clip-path="url(#clip0_936_1250)">
            <path
               d="M-10.5 19C45.3333 132.167 182.2 304 351 232C562 142 526.5 18.5 377 108.5C227.5 198.5 71 621.5 351 797C885.674 1132.13 1428.5 133.768 1428.5 608C1428.5 975 2034 451.5 1964.5 906"
               stroke="#ECEFF7"
               stroke-width="20" />
         </g>
         <defs>
            <clipPath id="clip0_936_1250">
               <rect width="1920" height="906" fill="white" />
            </clipPath>
         </defs>
      </svg>
   </div>
</template>

<style lang="scss">
.line-document {
   & svg path {
      stroke-dasharray: 4000;
      stroke-dashoffset: 5000;
      animation: dash 10s linear forwards;
   }
}
@keyframes dash {
   to {
      stroke-dashoffset: 0;
   }
}
</style>
