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
         const { bodyScrollBar } = useScrollbar();
         bodyScrollBar.updatePluginOptions("lock", { lock: true });
         this.isPopupQuestionsActive = true;
      },
      closePopupQuestions() {
         const { bodyScrollBar } = useScrollbar();
         bodyScrollBar.updatePluginOptions("lock", { lock: false });
         this.isPopupQuestionsActive = false;
      },
   },
});
