import React, { useState, useEffect } from "react";
import TablePagination from "@material-ui/core/TablePagination";

export default function Pagination({ handlePaginationChange }) {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
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
      onChangePage={(e, newPage) => setPage(newPage)}
      rowsPerPage={rowsPerPage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
    />
  );
}
