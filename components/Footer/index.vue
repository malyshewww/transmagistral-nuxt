<template lang="pug">
	footer.footer(data-section="contacts" data-bgcolor="linear-gradient(90deg, #255cae 0%, #b7d8e9 100%)" data-theme="dark" data-textcolor="#31373b" style="--gradient: linear-gradient(90deg, #255cae 0%, #b7d8e9 100%);")
		.container 
			.footer__body
				Contacts
				nav.footer__menu.menu-footer
					.menu-footer__body 
						.menu-footer__logo 
							img(src="/images/footer-logo.svg", alt="логотип")
						FooterMenu(:menu="menu")
						.menu-footer__actions 
							button(type="button" @click="scrollToTop").button-up 
								svg(width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg")
									path(fill-rule="evenodd" clip-rule="evenodd" d="M24.3684 1C11.4624 1 1 11.4624 1 24.3684C1 37.2744 11.4624 47.7368 24.3684 47.7368C37.2744 47.7368 47.7368 37.2744 47.7368 24.3684C47.7368 11.4624 37.2744 1 24.3684 1ZM15.5534 24.4466C15.8001 24.6932 16.1999 24.6932 16.4466 24.4466L24.077 16.8162V32.7086C24.077 33.0574 24.3598 33.3402 24.7086 33.3402C25.0574 33.3402 25.3402 33.0574 25.3402 32.7086V16.8162L32.9706 24.4466C33.2172 24.6932 33.6171 24.6932 33.8638 24.4466C34.1104 24.1999 34.1104 23.8001 33.8638 23.5534L25.1552 14.8448C24.9085 14.5982 24.5086 14.5982 24.262 14.8448L15.5534 23.5534C15.3068 23.8001 15.3068 24.1999 15.5534 24.4466Z" fill="#0D235A")
				.footer__bottom 
					.footer__copy ©{{getFullYear()}} Трансмагистраль
					button(type="button" @click="openPopupPolitic").footer__button.text-link Политика конфиденциальности 
					a(href="https://webshop.ru/" target="_blank").footer__company.company-footer Разработано #[span в WEBSHOP]
</template>

<script setup>
import { usePopupStore } from "~/stores/popup";

const store = usePopupStore();

const openPopupPolitic = () => {
   store.openPopupPoliticNotNested();
};

defineProps({
   menu: {
      type: Object,
      required: true,
   },
});

const getFullYear = () => {
   return new Date().getFullYear();
};

const scrollToTop = () => {
   const wrapper = document.querySelector(".wrapper");
   if (wrapper) {
      const { bodyScrollBar } = useScrollbar();
      bodyScrollBar.scrollIntoView(wrapper);
   }
};

defineExpose({
   getFullYear,
   openPopupPolitic,
});

onMounted(() => {
   scrollToTop();
});
</script>

<style lang="scss">
.footer {
   padding: 60px 0 27px;
   position: relative;
   @media screen and (max-width: $xl) {
      padding: 36px 0 24px;
   }
   &__body {
      display: grid;
      gap: 80px;
      @media screen and (max-width: $md) {
         gap: 54px;
      }
   }
   &__bottom {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: center;
      gap: 20px;
      color: var(--text-text-secondary);
      @media screen and (max-width: $md) {
         flex-direction: column;
         gap: 24px;
      }
      @media screen and (max-width: $md) {
         line-height: 140%;
         font-size: 18px;
      }
   }
}
.menu-footer {
   min-height: 68px;
   border-radius: 100px;
   padding: 10px 10px 10px 40px;
   background: var(--bg-footer-nav);
   @media screen and (max-width: $xxxl) {
      padding: 10px;
   }
   @media screen and (max-width: $xl) {
      padding: 20px;
      border-radius: 14px;
   }
   &__logo {
      max-width: 290px;
      @media screen and (max-width: $md) {
         max-width: 242px;
      }
   }
   &__body {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      @media screen and (max-width: $xl) {
         flex-direction: column;
         align-items: center;
         gap: 36px;
      }
      @media screen and (max-width: $md) {
         align-items: flex-start;
      }
   }
   &__list {
      @include reset-list;
      display: flex;
      align-items: center;
      gap: 61px;
      padding-right: 60px;
      @media screen and (max-width: $xxxl) {
         padding: 0;
         gap: 20px;
      }
      @media screen and (max-width: $xl) {
         flex-direction: column;
         align-items: center;
      }
      @media screen and (max-width: $md) {
         align-items: flex-start;
      }
   }
   &__link {
      line-height: 25px;
      transition: color $time;
      @media (any-hover: hover) {
         &:hover {
            color: var(--bg-bg-red);
         }
      }
      @media screen and (max-width: $md) {
         font-size: 18px;
         line-height: 140%;
      }
   }
}
.button-up {
   width: 46px;
   height: 46px;
   flex-shrink: 0;
   border-radius: 50%;
   & svg path {
      transition: fill $time;
   }
   @media (any-hover: hover) {
      &:hover {
         & svg path {
            fill: #183377;
         }
      }
      &:active {
         & svg path {
            fill: #2c478b;
         }
      }
   }
}
.company-footer {
   & span {
      font-weight: 700;
   }
}
</style>
