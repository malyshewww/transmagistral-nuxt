export const useMenuStore = defineStore("menu", {
   state: () => ({
      isMenuOpen: false,
   }),
   actions: {
      openMenu() {
         this.isMenuOpen = !this.isMenuOpen;
      },
      closeMenu() {
         this.isMenuOpen = !this.isMenuOpen;
      },
   },
});
