import ReactPaginate from 'react-paginate';
import { TiChevronLeft, TiChevronRight } from 'react-icons/ti';
import { PiDotsThreeOutlineBold } from 'react-icons/pi';

const Pagination = ({ pageCount, onPageChange }) => {
  const handlePageClick = (selectedPage) => {
    onPageChange(selectedPage.selected);
  };

  return (
    <div className="align-items-center d-flex justify-content-center contPagination">
      <ReactPaginate
        previousLabel={<TiChevronLeft />}
        breakLabel={<PiDotsThreeOutlineBold />}
        nextLabel={<TiChevronRight />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={3}
        pageCount={pageCount}
        containerClassName="pagination"
        activeClassName="active"
      />
    </div>
  );
};

export default Pagination;
