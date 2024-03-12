import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
} from "@mui/material";
import {
  flexRender,
  MRT_GlobalFilterTextField,
  MRT_TableBodyCellValue,
  MRT_TablePagination,
  useMaterialReactTable,
} from "material-react-table";

import { columns, data } from "./helpers";

export default function UsersList() {
  const { spacing, breakpoints } = useTheme();

  const table = useMaterialReactTable({
    columns,
    data,
    initialState: {
      pagination: { pageSize: 5, pageIndex: 0 },
      showGlobalFilter: true,
    },
    muiPaginationProps: {
      variant: "text",
      showRowsPerPage: false,
      shape: "rounded",
    },
    muiSearchTextFieldProps: {
      sx: {
        borderRadius: spacing(6.25),

        "& fieldset": {
          padding: `${spacing(1)} ${spacing(3)} ${spacing(1)} 0`,
          borderRadius: spacing(6.25),
          alignItems: "center",
          gap: spacing(0.5),
        },

        "& .MuiInputBase-input": {
          padding: "8px 14px",
          paddingLeft: 0,
        },
      },
    },

    paginationDisplayMode: "pages",
  });

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",

          [breakpoints.up("md")]: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          },
        }}
      >
        <MRT_GlobalFilterTextField table={table} />
        <MRT_TablePagination table={table} />
      </Box>

      <TableContainer component={Paper} sx={{ borderRadius: 6.25 }}>
        <Table>
          <TableHead sx={{ "& th": { fontWeight: 600 } }}>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableCell key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map((row, rowIndex) => (
              <TableRow key={row.id} selected={row.getIsSelected()}>
                {row.getVisibleCells().map((cell, _columnIndex) => (
                  <TableCell key={cell.id}>
                    {MRT_TableBodyCellValue({
                      cell,
                      table,
                      staticRowIndex: rowIndex,
                    })}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
