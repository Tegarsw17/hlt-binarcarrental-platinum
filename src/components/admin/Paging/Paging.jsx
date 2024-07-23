import './Paging.css';
import { Pagination } from 'flowbite-react';
const Paging = ({ pageCount, currentPage, onPageChange }) => {
  return (
    <div className="h-full w-full flex justify-end items-end ">
      <div className="btn-page-list flex sm:justify-center items-end">
        <Pagination
          className="btn-paging"
          currentPage={currentPage}
          totalPages={pageCount}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default Paging;
