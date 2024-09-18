export const usePopupStore = defineStore("popup", {
   state: () => ({
      isPopupPoliticActive: false,
      isPopupQuestionsActive: false,
      // Дополнительное свойство для отслеживания открытия меню в мобильной версии
      isMenuOpen: false,
      isOpenPopupPoliticNotNested: false,
   }),
   actions: {
      openPopupPoliticNotNested() {
         this.isOpenPopupPoliticNotNested = true;
         const { bodyScrollBar } = useScrollbar();
         bodyScrollBar.updatePluginOptions("lock", {
            lock: true,
         });
      },
      closePopupPoliticNotNested() {
         this.isOpenPopupPoliticNotNested = false;
         const { bodyScrollBar } = useScrollbar();
         bodyScrollBar.updatePluginOptions("lock", {
            lock: false,
         });
      },
      openPopupPolitic() {
         this.isPopupPoliticActive = true;
      },
      closePopupPolitic() {
         this.isPopupPoliticActive = false;
      },
      popupPoliticNotNestedActive() {
         this.isOpenPopupPoliticNotNested = true;
      },
      openPopupQuestions() {
         const { bodyScrollBar } = useScrollbar();
         if (window.innerWidth < 1024) {
            bodyScrollBar.updatePluginOptions("lock", {
               lock: this.isMenuOpen === true ? false : true,
            });
         } else {
            bodyScrollBar.updatePluginOptions("lock", {
               lock: true,
            });
         }
         this.isPopupQuestionsActive = true;
      },
      closePopupQuestions() {
         const { bodyScrollBar } = useScrollbar();
         if (window.innerWidth < 1024) {
            bodyScrollBar.updatePluginOptions("lock", {
               lock: this.isMenuOpen === false ? true : false,
            });
         } else {
            bodyScrollBar.updatePluginOptions("lock", {
               lock: false,
            });
         }
         this.isPopupQuestionsActive = false;
      },
   },
});
