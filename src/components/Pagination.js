/**
 * Pagination Component built following Shubham Khatri's article on freeCodeCamp.org
 * https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/
 */

import React from "react";
import { usePagination, DOTS } from "./usePagination";

export const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // if less than 2 times in pagination range, don't render component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className='pagination-container'>
      <li className='pagination-item' onClick={onPrevious}>
        <div className='arrow left'>&lt;</div>
      </li>

      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <li key={index} className='pagination-item dots'>
              ...
            </li>
          );
        }

        return (
          <li
            key={index}
            className='pagination-item'
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}

      <li className='pagination-item' onClick={onNext}>
        <div className='arrow right'>&gt;</div>
      </li>
    </ul>
  );
};
