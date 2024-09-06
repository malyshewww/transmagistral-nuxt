export default defineNuxtPlugin((nuxtApp) => {
   nuxtApp.vueApp.directive("click-outside", {
      bind: function (el, binding, vnode) {
         el.clickOutsideEvent = function (event) {
            // here I check that click was outside the el and his childrens
            if (!(el == event.target || el.contains(event.target))) {
               // and if it did, call method provided in attribute value
               vnode.context.isDropdownActive = false;
            }
         };
         document.body.addEventListener("click", el.clickOutsideEvent);
      },
      unbind: function (el) {
         document.body.removeEventListener("click", el.clickOutsideEvent);
      },
   });
});
