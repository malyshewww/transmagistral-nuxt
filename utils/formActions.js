// Маска телефона
const formActions = (elem = document) => {
   const inputs = elem.querySelectorAll("input");
   if (inputs.length) {
      inputs.forEach((input) => {
         if (input) {
            input.addEventListener("focus", (e) => {
               e.target.parentNode.classList.add("focus");
            });
            input.addEventListener("blur", (e) => {
               e.target.parentNode.classList.contains("focus") &&
                  e.target.parentNode.classList.remove("focus");
            });
         }
      });
   }
};

export default formActions;
