import { memo } from "react";
import { Pagination } from "./Pagination";

export type PaginationProps = {
  onNextPageClick: () => void;
  onPrevPageClick: () => void;
  disable: {
    isLeftPageExist: boolean;
    isRightPageExist: boolean;
  };
  nav?: {
    currentPage: number;
    totalPageCount: number;
  };
};

const memoPagination = memo(Pagination);

export default memoPagination;
