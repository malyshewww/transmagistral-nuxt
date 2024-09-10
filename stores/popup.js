export const usePopupStore = defineStore("popup", {
   state: () => ({
      isPopupPoliticActive: false,
      isPopupQuestionsActive: false,
   }),
   actions: {
      openPopupPolitic() {
         this.isPopupPoliticActive = true;
      },
      closePopupPolitic() {
         this.isPopupPoliticActive = false;
      },
      openPopupQuestions() {
         this.isPopupQuestionsActive = true;
      },
      closePopupQuestions() {
         this.isPopupQuestionsActive = false;
      },
   },
});
