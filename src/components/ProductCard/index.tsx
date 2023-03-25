import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./index.module.scss";
import Image from "next/image";
import mockImg from "../../../public/mockImage.png";
import Link from "next/link";
import { ProductI } from "@/types";
import { Button } from "@/UI/Button";

const cn = classNames.bind(cls);

export const ProductCard: FC<ProductI> = (props) => {
  const { body, title, id } = props;
  return (
    <div className={cn(cls.ProductCard)}>
      <Image
        className={cls.ProductCard__img}
        src={`https://source.unsplash.com/random/200x200?sig=${id}`}
        alt="Карточка товара"
        width={178}
        height={178}
      />

      <h2 className={cls.ProductCard__title}>
        {title.length > 20 ? `${title.slice(0, 20)}...` : title}
      </h2>

      <p className={cls.ProductCard__brand}>
        {body.length > 50 ? `${body.slice(0, 50)}...` : body}
      </p>

      <div className={cls.ProductCard__actions}>
        <Button className={cls.ProductCard__addToCard}>В корзину</Button>
        <Button className={cls.ProductCard__more} as="link" href="/" bgColor="Success">
          Подробнее
        </Button>
      </div>

      <span className={cls.ProductCard__bage}>New</span>
    </div>
  );
};
