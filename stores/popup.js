export const usePopupStore = defineStore("popup", {
   state: () => ({
      isPopupPoliticActive: false,
      isPopupQuestionsActive: false,
      // Дополнительное свойство для отслеживания открытия меню в мобильной версии
      isMenuOpen: false,
      isOpenPopupPoliticNotNested: false,
      isPopupQuestionsNotNested: false,
      isPopupNoticeActive: false,
      popupNoticeText:
         "Форма успешно отправлена. Звонок поступит в ближайшее время",
      isPopupNoticeWorkActive: false,
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
         if (window.innerWidth <= 1024) {
            bodyScrollBar.updatePluginOptions("lock", {
               lock: this.isMenuOpen === true ? false : true,
            });
         } else if (window.innerWidth > 1024) {
            bodyScrollBar.updatePluginOptions("lock", {
               lock: true,
            });
         }
         bodyScrollBar.updatePluginOptions("lock", {
            lock: true,
         });
         this.isPopupQuestionsActive = true;
      },
      closePopupQuestions() {
         const { bodyScrollBar } = useScrollbar();
         if (window.innerWidth <= 1024) {
            bodyScrollBar.updatePluginOptions("lock", {
               lock: this.isMenuOpen === false ? true : false,
            });
         } else if (window.innerWidth > 1024) {
            bodyScrollBar.updatePluginOptions("lock", {
               lock: false,
            });
         }
         this.isPopupQuestionsActive = false;
      },
      openPopupQuestionsNotNested() {
         this.isPopupQuestionsNotNested = true;
         const { bodyScrollBar } = useScrollbar();
         bodyScrollBar.updatePluginOptions("lock", {
            lock: true,
         });
      },
      closePopupQuestionsNotNested() {
         this.isPopupQuestionsNotNested = false;
         const { bodyScrollBar } = useScrollbar();
         bodyScrollBar.updatePluginOptions("lock", {
            lock: false,
         });
      },
      openPopupNotice(popupText) {
         // this.popupNoticeText = popupText ? popupText : this.popupNoticeText;
         this.isPopupNoticeActive = true;
      },
      closePopupNotice() {
         // this.popupNoticeText = this.popupNoticeText;
         this.isPopupNoticeActive = false;
      },
      openPopupNoticeWork() {
         this.isPopupNoticeWorkActive = true;
      },
      closePopupNoticeWork() {
         this.isPopupNoticeWorkActive = false;
      },
   },
});
