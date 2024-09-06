<template>
   <div class="line line-card">
      <svg
         width="417"
         height="475"
         viewBox="0 0 417 475"
         fill="none"
         xmlns="http://www.w3.org/2000/svg">
         <g clip-path="url(#clip0_936_1231)">
            <path
               opacity="0.2"
               d="M-56.5 416.5C-52.8333 454.667 128.797 500.556 211.5 396.5C349 223.5 161 -2.5 79 83C-16.3935 182.465 270 327.5 372.5 186.5C413.573 130 437.5 5.5 297 -83"
               stroke="#CFD3DE"
               stroke-width="20" />
         </g>
         <defs>
            <clipPath id="clip0_936_1231">
               <rect
                  width="419"
                  height="475"
                  fill="white"
                  transform="translate(-2.04297 -0.212891)" />
            </clipPath>
         </defs>
      </svg>
   </div>
</template>

<style lang="scss">
.line-card {
   & svg path {
      stroke-dasharray: 2000;
      stroke-dashoffset: 2000;
   }
}
.person-card.in-view {
   animation: dash 5s linear forwards 0s;
}
@keyframes dash {
   to {
      stroke-dashoffset: 0;
   }
}
</style>
