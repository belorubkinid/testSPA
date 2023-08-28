import { PaginationProps } from "./MemoPagination";

export function Pagination(props: PaginationProps) {
  const { nav = null, disable, onNextPageClick, onPrevPageClick } = props;

  const handleNextPageClick = () => {
    onNextPageClick();
  };
  const handlePrevPageClick = () => {
    onPrevPageClick();
  };

  return (
    <div className="pagination">
      {nav && (
        <span className="pagination_navigation">
          {`Страница: ${nav.currentPage} из ${nav.totalPageCount}`}
        </span>
      )}
      <button
        className="pagination_button_prev_page"
        type="button"
        onClick={handlePrevPageClick}
        disabled={disable.isLeftPageExist}
      >
        {'Предыдущая'}
      </button>
      <button
        className="pagination_button_next_page"
        type="button"
        onClick={handleNextPageClick}
        disabled={disable.isRightPageExist}
      >
        {'Следующая'}
      </button>
    </div>
  );
}
