import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function BasicPagination(props) {
  const { pages, handlerChange } = props;
  return (
    <Stack spacing={2} className="mx-auto">
      <Pagination
        size="large"
        count={pages}
        color="primary"
        onChange={handlerChange}
      />
    </Stack>
  );
}
