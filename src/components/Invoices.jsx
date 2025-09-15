// src/pages/Invoices.jsx
import React, { useState } from "react";
import {
  Box,
  useTheme,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
} from "@mui/material";
import { tokens } from "../theme.jsx";
import { mockDataInvoices } from "../data/mockData.js";
import { DataGrid } from "@mui/x-data-grid";
import Header from "./Header.jsx";

const Invoices = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [selectedColumn, setSelectedColumn] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  // Extract unique values for selected column
  const getUniqueValues = (columnKey) => {
    const values = mockDataInvoices.map((row) => row[columnKey]);
    return [...new Set(values)];
  };

  const filteredRows = mockDataInvoices.filter((row) => {
    if (!selectedColumn || !selectedValue) return true;
    return row[selectedColumn] === selectedValue;
  });

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID", flex: 0.7 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[300]}>
          ${params.row.cost}
        </Typography>
      ),
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];

  return (
    <Box m={isDashboard ? "0" : "20px"}>
      {!isDashboard && (
        <Header title="INVOICES" subtitle="List of Invoice Balances" />
      )}

      {!isDashboard && (
        <Box display="flex" gap="20px" mb="15px" mt="20px" flexWrap="wrap">
          <FormControl
            sx={{
              minWidth: 200,
              backgroundColor: colors.primary[400],
              borderRadius: "4px",
            }}
          >
            <InputLabel sx={{ color: colors.grey[100] }}>Filter</InputLabel>
            <Select
              value={selectedColumn}
              label="Filter by Column"
              onChange={(e) => {
                setSelectedColumn(e.target.value);
                setSelectedValue("");
              }}
              sx={{ color: colors.grey[100] }}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="name">Name</MenuItem>
              <MenuItem value="phone">Phone Number</MenuItem>
              <MenuItem value="email">Email</MenuItem>
              <MenuItem value="cost">Cost</MenuItem>
              <MenuItem value="date">Date</MenuItem>
            </Select>
          </FormControl>

          {selectedColumn && (
            <FormControl
              sx={{
                minWidth: 200,
                backgroundColor: colors.primary[400],
                borderRadius: "4px",
              }}
            >
              <InputLabel sx={{ color: colors.grey[100] }}>
                Select Value
              </InputLabel>
              <Select
                value={selectedValue}
                label="Select Value"
                onChange={(e) => setSelectedValue(e.target.value)}
                sx={{ color: colors.grey[100] }}
              >
                {getUniqueValues(selectedColumn).map((value) => (
                  <MenuItem key={value} value={value}>
                    {value}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        </Box>
      )}

      <Box
        height={isDashboard ? "280px" : "75vh"}
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
            fontSize: isDashboard ? "0.75rem" : "0.9rem",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
            fontSize: isDashboard ? "0.75rem" : "0.9rem",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
            display: isDashboard ? "none" : "flex",
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          rows={isDashboard ? filteredRows.slice(0, 5) : filteredRows}
          columns={columns}
          checkboxSelection={!isDashboard}
          disableRowSelectionOnClick
        />
      </Box>

      {isDashboard && (
        <Typography
          variant="body2"
          color={colors.grey[200]}
          mt="10px"
          textAlign="right"
        >
          Showing 5 of {filteredRows.length} invoices
        </Typography>
      )}
    </Box>
  );
};

export default Invoices;
