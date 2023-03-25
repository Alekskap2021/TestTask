import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./index.module.scss";
import Link from "next/link";

const cn = classNames.bind(cls);

interface FooterProps {
  className?: string;
}

export const Footer: FC<FooterProps> = (props) => {
  const { className } = props;

  return (
    <footer className={cn(cls.Footer)}>
      <div className="con">
        <div className={cls.Footer__wrapper}>
          <div className={cls.Footer__logo}>
            <Link className={cls.Footer__logoImg} href="/">
              LOGO
            </Link>
            <p className={cls.Footer__logoDescr}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus fuga sed debitis
              enim cum iusto nihil libero expedita soluta eos.
            </p>
          </div>

          <div className={cls.Footer__contacts}>
            <a href="tel:+77777777777">8 (777) 777-77-77</a>
            <a href="tel:+78888888888">8 (888) 888-88-88</a>
            <a href="mailto:info@mock-company.ru">info@mock-company.ru</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
