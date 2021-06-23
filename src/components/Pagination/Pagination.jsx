import React, { useState } from "react";
import TablePagination from "@material-ui/core/TablePagination";

export default function Pagination({
  handleChangePage,
  pageNumber,
  count,
  rowsPerPage,
}) {
  return (
    <TablePagination
      component="div"
      count={count}
      page={pageNumber}
      onChangePage={handleChangePage}
      rowsPerPage={rowsPerPage}
    />
  );
}
