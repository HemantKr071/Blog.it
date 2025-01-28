import { useState, useEffect } from "react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import React from 'react';

interface CircularPaginationProps {
  totalBlogs: number;
  totalPages: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
}

interface CardProps {
  pages: number[];
  activePage: number;
  onPageChange: (pageNumber: number) => void;
}

const Card: React.FC<CardProps> = ({ pages, activePage, onPageChange }) => {
  return (
    <div className="flex items-center justify-center px-4 [&_svg]:size-full [&:nth-child(1)]:[&_figure]:order-3 [&:nth-child(2)]:[&_figure]:order-2 [&:nth-child(3)]:[&_figure]:order-4 [&:nth-child(4)]:[&_figure]:order-1 [&:nth-child(5)]:[&_figure]:order-5 [&_figure]:[box-shadow:#0000001f_0_1px_3px,#0000003d_0_0_1px] [&_figure]:[transition:all_.25s_ease] hover:[&_figure]:z-[50] hover:[&_figure]:size-16 [&:hover_figure:not(:hover)]:size-[38px]">
      {pages.map((page, index) => (
        <figure
          key={index}
          className={`flex items-center justify-center text-2xl font-extrabold leading-none text-zinc-400 p-4 bg-white relative rounded-full object-cover border border-solid border-zinc-300 cursor-pointer ${
            activePage === page ? 'size-16 z-[6]' : 'size-8 z-[3]'
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </figure>
      ))}
    </div>
  );
};

export function CircularPagination({ totalBlogs, totalPages, currentPage, onPageChange }: CircularPaginationProps) {
  const [active, setActive] = useState(currentPage);

  useEffect(() => {
    setActive(currentPage);
  }, [currentPage]);

  const next = () => {
    if (active === totalPages) return;
    const newPage = active + 1;
    setActive(newPage);
    onPageChange(newPage);
  };

  const prev = () => {
    if (active === 1) return;
    const newPage = active - 1;
    setActive(newPage);
    onPageChange(newPage);
  };

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }


  return (
    <div className="flex items-center justify-center py-20 gap-4">
      <button
        className="flex items-center font-bold gap-2 p-4 rounded-full disabled:text-slate-400 hover:bg-slate-200"
        onClick={prev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </button>
      <Card pages={pages} activePage={active} onPageChange={onPageChange} />
      <button
        className="flex items-center gap-2 p-4 font-bold rounded-full disabled:text-slate-400 hover:bg-slate-200"
        onClick={next}
        disabled={active === totalPages}
      >
        Next <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </button>
    </div>
  );
}

export default CircularPagination;