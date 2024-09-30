import Scrollbar from "smooth-scrollbar";

function useScrollbar(scroller) {
   let bodyScrollBar;
   scroller = document.querySelector(".scroller");
   if (scroller) {
      bodyScrollBar = Scrollbar.init(scroller, {
         damping: 0.1,
         delegateTo: document || window,
         alwaysShowTracks: true,
         renderByPixels: true,
         continuousScrolling: true,
         thumbMinSize: 20,
         syncCallbacks: true,
      });
   }
   return { bodyScrollBar, scroller };
}

export default useScrollbar;
