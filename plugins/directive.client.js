export default defineNuxtPlugin((nuxtApp) => {
   nuxtApp.vueApp.directive("my-directive", {
      // mounted(el) {
      //    el.classList.remove("active");
      // },
      // getSSRProps(binding, vnode) {
      //    // you can provide SSR-specific props here
      //    return {};
      // },
      mounted(element, binding, globalThis) {
         // Your custom directive logic here
         console.log("My directive works!", binding.value); // Output: the value passed as an argument to the directive. In this case the string 'Hello'
      },
      bind: function (el, binding, vnode) {
         el.clickOutsideEvent = function (event) {
            // here I check that click was outside the el and his childrens
            if (!(el == event.target || el.contains(event.target))) {
               // and if it did, call method provided in attribute value
               vnode.context[binding.expression](event);
               console.log(vnode.context);
            }
         };
         document.body.addEventListener("click", el.clickOutsideEvent);
      },
      unbind: function (el) {
         document.body.removeEventListener("click", el.clickOutsideEvent);
      },
   });
});
