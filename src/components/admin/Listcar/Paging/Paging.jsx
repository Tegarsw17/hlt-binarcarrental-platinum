import './Paging.css';

import { Pagination } from 'flowbite-react';
import useListCarAdmin from '../../../../hooks/useListCarAdmin';

const Paging = () => {
  const { pageCount, currentPage, onPageChange } = useListCarAdmin();

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
