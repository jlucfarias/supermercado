import { Search, ShoppingCart } from 'lucide-react';
import { useTranslations } from 'next-intl';
import BasketCount from '@/components/basket-count';

export default function Header() {
  const t = useTranslations("header");

  return (
    <header className="flex items-center gap-x-6 py-3 mx-auto w-3/4">
      <a className="block min-w-fit" href="/">
        <img width="100" height="50" src="https://placehold.co/100x50" alt={t("logo-alternative-text")} />
      </a>
      <form className="relative w-full">
        <input className="py-3 ps-5 pe-13.5 border rounded-full w-full" type="search" name="search" placeholder={t("search-placeholder")} />
        <button className="absolute top-0 right-0 border border-transparent rounded-full p-3 cursor-pointer" type="submit">
          <Search />
        </button>
      </form>

      <aside className="flex items-center gap-x-4">
        <a className="border border-transparent p-3" href="/login">{t("login-button")}</a>
        <nav className="flex flex-col hidden">
          <a>{t("profile-navigation.my-profile")}</a>
          <a>{t("profile-navigation.logout")}</a>
        </nav>
        <a className="border border-transparent relative p-3" href="/register">
          <ShoppingCart />
          <BasketCount />
        </a>
      </aside>
    </header>
  );
}
