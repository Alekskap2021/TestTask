import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./index.module.scss";
import Link from "next/link";

const cn = classNames.bind(cls);

interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = (props) => {
  const { className } = props;

  return (
    <header className={cn(cls.Header)} id="Header">
      <div className="con flex">
        <Link className={cls.Header__logo} href="/">
          LOGO
        </Link>

        <nav className={cls.Header__nav}>
          <Link className={cls.Header__navLink} href="/">
            Главная
          </Link>
          <Link className={cn(cls.Header__navLink, cls.Header__navLink_active)} href="/">
            Каталог
          </Link>
          <Link className={cls.Header__navLink} href="/">
            Услуги
          </Link>
          <Link className={cls.Header__navLink} href="/">
            Цены
          </Link>
        </nav>

        <button className={cls.Header__burger}>
          <svg
            width="26"
            height="11"
            viewBox="0 0 26 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1H25M25 10H1"
              stroke="#030711"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};
