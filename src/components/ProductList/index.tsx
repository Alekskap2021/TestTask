"use client";
import { FC, useState } from "react";
import classNames from "classnames/bind";
import cls from "./index.module.scss";
import { ProductCard } from "@/components/ProductCard";
import { ProductI } from "@/types";
import { Pagination } from "@/components/Pagination";

const cn = classNames.bind(cls);

interface ProductListProps {
  products: ProductI[];
}

export const ProductList: FC<ProductListProps> = (props) => {
  const { products } = props;

  const [currentPage, setCurrentPage] = useState<number>(1);
  const limit = 10;
  const productsCount = products.length;

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className={cn(cls.ProductList)}>
      <div className={cls.ProductList__grid}>
        {products.slice(limit * currentPage - limit, limit * currentPage).map((card) => (
          <ProductCard {...card} key={card.id} />
        ))}
      </div>

      <Pagination
        className={cls.ProductList__padination}
        next={nextPage}
        prev={prevPage}
        currentPage={currentPage}
        productsCount={productsCount}
        limit={limit}
      />
    </div>
  );
};
