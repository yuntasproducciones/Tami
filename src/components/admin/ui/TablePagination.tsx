import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface TablePaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number | ((prev: number) => number)) => void;
}

export const TablePagination: React.FC<TablePaginationProps> = ({
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  if (totalPages <= 0) return null;

  
  const maxVisible = 2;
  const visibleCount = Math.min(totalPages, maxVisible);

  const startPage = currentPage >= totalPages && totalPages > 1 
    ? totalPages - 1 
    : currentPage;

  const pagesToShow = totalPages === 1 ? [1] : [startPage, startPage + 1];


  return (
    <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-6 px-2 pb-6">
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        aria-label="Página anterior"
        className="w-9 h-9 flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed text-xs text-gray-700 dark:text-gray-200 transition-colors shrink-0"
      
      >
       <FaChevronLeft />
      </button>

{pagesToShow.map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`w-9 h-9 flex items-center justify-center rounded-lg text-xs font-bold transition-all shrink-0 ${
            currentPage === page
              ? "bg-teal-500 text-white border border-teal-500 shadow-sm"
              : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
        aria-label="Página siguiente"
        className="w-9 h-9 flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed text-xs text-gray-700 dark:text-gray-200 transition-colors shrink-0"
      
      >
        <FaChevronRight />
      </button>
    </div>
  );
};
