//importing required files
import React from "react";
import Pagination from "@material-ui/lab/Pagination";

//navigation till 15 pages as it can have hundreds of pages
export default function CustomPagination({ setPage, numOfPages = 15 }) {
  // Scroll to top when page changes
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  //styling for pagination 
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >

        <Pagination
          onChange={(e) => handlePageChange(e.target.textContent)}
          count={numOfPages}
          color="secondary"
          hideNextButton
          hidePrevButton
        />

    </div>
  );
}