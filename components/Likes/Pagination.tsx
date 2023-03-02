import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight,
  FiMoreHorizontal,
} from "react-icons/fi";
import { PaginationButton } from "./PaginationButton";

interface IPaginationProps {
  currentPage: number;
}

export const Pagination: React.FC<IPaginationProps> = (props) => {
  const { currentPage } = props;

  const isFirstSite = currentPage === 1;

  return (
    <div className="p-1 w-full flex justify-center items-center">
      <PaginationButton toPage={1} disabled={isFirstSite}>
        <FiChevronsLeft />
      </PaginationButton>
      <PaginationButton toPage={currentPage - 1} disabled={isFirstSite}>
        <FiChevronLeft />
      </PaginationButton>
      {!isFirstSite && (
        <PaginationButton toPage={currentPage - 1}>
          {currentPage - 1}
        </PaginationButton>
      )}
      <PaginationButton active toPage={currentPage}>
        {currentPage}
      </PaginationButton>
      <PaginationButton toPage={currentPage + 1}>
        {currentPage + 1}
      </PaginationButton>
      <div className="m-2">
        <FiMoreHorizontal />
      </div>
      <PaginationButton toPage={currentPage + 1}>
        <FiChevronRight />
      </PaginationButton>
      <PaginationButton toPage={currentPage + 1}>
        <FiChevronsRight />
      </PaginationButton>
    </div>
  );
};
