import './Paging.css';

import { Pagination } from 'flowbite-react';
import useTableAdmin from '../../../../hooks/useTableAdmin';

const Paging = () => {
  const { pageCount, currentPage, onPageChange } = useTableAdmin();

  return (
    <div className="btn-page-list flex sm:justify-center">
      <Pagination
        currentPage={currentPage}
        totalPages={pageCount}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default Paging;
