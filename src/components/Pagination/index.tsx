"use client";

import { FC, useState } from "react";
import classNames from "classnames/bind";
import cls from "./index.module.scss";
import { Button } from "@/UI/Button";

const cn = classNames.bind(cls);

interface PaginationProps {
  className?: string;
  next: () => void;
  prev: () => void;
  currentPage: number;
  productsCount: number;
  limit: number;
}

export const Pagination: FC<PaginationProps> = (props) => {
  const { className, next, prev, currentPage, limit, productsCount } = props;

  const isLeftBorder = currentPage === 1;
  const isRightBorder = currentPage * limit >= productsCount;

  const changePage = (operation: "plus" | "minus") => {
    if (!isLeftBorder && operation == "minus") {
      prev();
    } else if (!isRightBorder && operation === "plus") {
      next();
    }
  };

  return (
    <nav className={cn(cls.Pagination, className)}>
      <Button
        className={cn(cls.Pagination__btn, cls.Pagination__prev)}
        clear={true}
        disable={isLeftBorder}
        onClick={() => changePage("minus")}
      >
        <svg
          width="16"
          height="10"
          viewBox="0 0 16 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 1L15 5M15 5L11 9M15 5L1 5"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Button>

      <span className={cls.Pagination__currentPage}>{currentPage}</span>

      <Button
        className={cn(cls.Pagination__btn, cls.Pagination__next)}
        clear={true}
        disable={isRightBorder}
        onClick={() => changePage("plus")}
      >
        <svg
          width="16"
          height="10"
          viewBox="0 0 16 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 1L15 5M15 5L11 9M15 5L1 5"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Button>
    </nav>
  );
};
