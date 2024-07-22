import './Paging.css';

import { Pagination } from 'flowbite-react';
import useTableAdmin from '../../../../hooks/useTableAdmin';

const Paging = () => {
  const { currentPage, onPageChange } = useTableAdmin();

  return (
    <div className="btn-page-list flex sm:justify-center">
      <Pagination
        currentPage={currentPage}
        totalPages={100}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default Paging;
