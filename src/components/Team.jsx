// src/pages/Team.jsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  useTheme,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { tokens } from "../theme.jsx";
import { mockDataTeam } from "../data/mockData.js";
import { DataGrid } from "@mui/x-data-grid";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "./Header.jsx";

const Team = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [selectedColumn, setSelectedColumn] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  const getUniqueValues = (columnKey) => {
    const values = mockDataTeam.map((row) => row[columnKey]);
    return [...new Set(values)];
  };

  const filteredRows = mockDataTeam.filter((row) => {
    if (!selectedColumn || !selectedValue) return true;
    return row[selectedColumn] === selectedValue;
  });

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => (
        <Box
          width="60%"
          m="0 auto"
          p="5px"
          display="flex"
          justifyContent="center"
          backgroundColor={
            access === "admin"
              ? colors.greenAccent[600]
              : access === "manager"
              ? colors.greenAccent[700]
              : colors.greenAccent[700]
          }
          borderRadius="4px"
        >
          {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
          {access === "manager" && <SecurityOutlinedIcon />}
          {access === "user" && <LockOpenOutlinedIcon />}
          <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
            {access}
          </Typography>
        </Box>
      ),
    },
  ];

  const rows = isDashboard ? filteredRows.slice(0, 5) : filteredRows;

  return (
    <Box m={isDashboard ? "0" : "20px"}>
      {!isDashboard && (
        <Header title="TEAM" subtitle="Managing the Team Members" />
      )}

      {!isDashboard && (
        <Box display="flex" gap="20px" mb="15px" mt="20px" flexWrap="wrap">
          <FormControl
            sx={{ minWidth: 200, backgroundColor: colors.primary[400] }}
          >
            <InputLabel sx={{ color: colors.grey[100] }}>Filter</InputLabel>
            <Select
              value={selectedColumn}
              onChange={(e) => {
                setSelectedColumn(e.target.value);
                setSelectedValue("");
              }}
              sx={{ color: colors.grey[100] }}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="name">Name</MenuItem>
              <MenuItem value="email">Email</MenuItem>
              <MenuItem value="access">Access Level</MenuItem>
            </Select>
          </FormControl>

          {selectedColumn && (
            <FormControl
              sx={{ minWidth: 200, backgroundColor: colors.primary[400] }}
            >
              <InputLabel sx={{ color: colors.grey[100] }}>
                Select Value
              </InputLabel>
              <Select
                value={selectedValue}
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
          "& .MuiDataGrid-root": { border: "none", fontSize: isDashboard ? "0.75rem" : "0.9rem" },
          "& .MuiDataGrid-cell": { borderBottom: "none" },
          "& .name-column--cell": { color: colors.greenAccent[300] },
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
        }}
      >
        <DataGrid
          rows={rows}
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
          Showing {rows.length} of {filteredRows.length} team members
        </Typography>
      )}
    </Box>
  );
};

export default Team;
