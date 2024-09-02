import React from "react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const MAX_PAGE_BUTTONS = 5;

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const renderPageButtons = () => {
    const pageButtons = [];

    if (totalPages <= MAX_PAGE_BUTTONS) {
      for (let i = 1; i <= totalPages; i++) {
        pageButtons.push(
          <button
            key={i}
            onClick={() => onPageChange(i)}
            className={`text-[14px] w-[40px] h-[40px] rounded ${
              currentPage === i
                ? "bg-[#6B4D1E] text-quaternary"
                : "bg-[#FFFFFF] text-[#666666] border border-[#DDDFE1]"
            }`}
          >
            {i}
          </button>
        );
      }
    } else {
      if (currentPage > 2) {
        pageButtons.push(
          <button
            key="prev"
            onClick={handlePrevPage}
            className="text-[14px] w-[40px] h-[40px] rounded bg-[#FFFFFF] text-[#666666] border border-[#DDDFE1]"
          >
            {"<"}
          </button>
        );
      }

      pageButtons.push(
        <button
          key={1}
          onClick={() => onPageChange(1)}
          className={`text-[14px] w-[40px] h-[40px] rounded ${
            currentPage === 1
              ? "bg-[#6B4D1E] text-quaternary"
              : "bg-[#FFFFFF] text-[#666666] border border-[#DDDFE1]"
          }`}
        >
          1
        </button>
      );

      if (currentPage > 3) {
        pageButtons.push(<span key="start-ellipsis">...</span>);
      }

      let startPage = Math.max(currentPage - 1, 2);
      let endPage = Math.min(currentPage + 1, totalPages - 1);

      for (let i = startPage; i <= endPage; i++) {
        pageButtons.push(
          <button
            key={i}
            onClick={() => onPageChange(i)}
            className={`text-[14px] w-[40px] h-[40px] rounded ${
              currentPage === i
                ? "bg-[#6B4D1E] text-quaternary"
                : "bg-[#FFFFFF] text-[#666666] border border-[#DDDFE1]"
            }`}
          >
            {i}
          </button>
        );
      }

      if (currentPage < totalPages - 2) {
        pageButtons.push(<span key="end-ellipsis">...</span>);
      }

      pageButtons.push(
        <button
          key={totalPages}
          onClick={() => onPageChange(totalPages)}
          className={`text-[14px] w-[40px] h-[40px] rounded ${
            currentPage === totalPages
              ? "bg-[#6B4D1E] text-quaternary"
              : "bg-[#FFFFFF] text-[#666666] border border-[#DDDFE1]"
          }`}
        >
          {totalPages}
        </button>
      );

      if (currentPage < totalPages) {
        pageButtons.push(
          <button
            key="next"
            onClick={handleNextPage}
            className="text-[14px] w-[40px] h-[40px] rounded bg-[#FFFFFF] text-[#666666] border border-[#DDDFE1]"
          >
            {">"}
          </button>
        );
      }
    }

    return pageButtons;
  };

  return (
    <div className="flex justify-center space-x-1">{renderPageButtons()}</div>
  );
};

export default Pagination;
