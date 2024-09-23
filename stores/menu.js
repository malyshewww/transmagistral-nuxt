export const useMenuStore = defineStore("menu", {
   state: () => ({
      isMenuOpen: false,
      isHiddenHeader: true,
   }),
   actions: {
      openMenu() {
         this.isMenuOpen = !this.isMenuOpen;
      },
      closeMenu() {
         this.isMenuOpen = !this.isMenuOpen;
      },
      visibleHeader() {
         this.isHiddenHeader = false;
      },
      hideHeader() {
         this.isHiddenHeader = true;
      },
   },
});
