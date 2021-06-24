import React, { useState, useEffect } from "react";
import TablePagination from "@material-ui/core/TablePagination";
import Pagination from "@material-ui/lab/Pagination";

export default function PaginationComponent({
  handlePaginationChange,
  countApiPage
}) {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(1);
  useEffect(() => {
    handlePaginationChange(page, rowsPerPage);
  }, [rowsPerPage, page]);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
  };
  return (
    <TablePagination
      component="div"
      count={100}
      page={page}
      rowsPerPage={rowsPerPage}
      onChangePage={()=>{}}
      onChangeRowsPerPage={handleChangeRowsPerPage}
      rowsPerPageOptions={[10,25,50]}
      ActionsComponent={() => (
        <Pagination
          count={100}
          onChange={(e, newPage) => setPage(newPage)}
          page={page}
        />
      )}
    />
  );
}
