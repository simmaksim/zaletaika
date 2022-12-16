import {
  Pagination as MuiPagination,
  PaginationItem,
  Stack,
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

export const Pagination = ({ count, onChange, page }) => (
  <Stack spacing={2}>
    <MuiPagination
      page={page}
      count={count}
      onChange={(_, page) => onChange(page)}
      renderItem={(item) => (
        <PaginationItem
          slots={{ previous: ArrowBack, next: ArrowForward }}
          {...item}
        />
      )}
    />
  </Stack>
);
