import React, { useState } from 'react';
import {
  Box,
  Typography,
  useTheme,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { tokens } from '../theme.jsx';
import { mockDataTeam } from '../data/mockData.js';
import { DataGrid } from '@mui/x-data-grid';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import Header from './Header.jsx';

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Filter states
  const [selectedColumn, setSelectedColumn] = useState('');
  const [selectedValue, setSelectedValue] = useState('');

  // Get unique values from selected column
  const getUniqueValues = (columnKey) => {
    const values = mockDataTeam.map((row) => row[columnKey]);
    return [...new Set(values)];
  };

  // Filtered data
  const filteredRows = mockDataTeam.filter((row) => {
    if (!selectedColumn || !selectedValue) return true;
    return row[selectedColumn] === selectedValue;
  });

  const columns = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      headerAlign: 'left',
      align: 'left',
    },
    {
      field: 'phone',
      headerName: 'Phone Number',
      flex: 1,
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
    },
    {
      field: 'access',
      headerName: 'Access Level',
      flex: 1,
      renderCell: ({ row: { access } }) => (
        <Box
          width="60%"
          m="0 auto"
          p="5px"
          display="flex"
          justifyContent="center"
          backgroundColor={
            access === 'admin'
              ? colors.greenAccent[600]
              : access === 'manager'
              ? colors.greenAccent[700]
              : colors.greenAccent[700]
          }
          borderRadius="4px"
        >
          {access === 'admin' && <AdminPanelSettingsOutlinedIcon />}
          {access === 'manager' && <SecurityOutlinedIcon />}
          {access === 'user' && <LockOpenOutlinedIcon />}
          <Typography color={colors.grey[100]} sx={{ ml: '5px' }}>
            {access}
          </Typography>
        </Box>
      ),
    },
  ];

  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />

      {/* 🔽 Filter Controls */}
      <Box display="flex" gap="20px" mb="15px" mt="20px" flexWrap="wrap">
        <FormControl
          sx={{
            minWidth: 200,
            backgroundColor: colors.primary[400],
            borderRadius: '4px',
          }}
        >
          <InputLabel sx={{ color: colors.grey[100] }}>Filter</InputLabel>
          <Select
            value={selectedColumn}
            label="Filter by Column"
            onChange={(e) => {
              setSelectedColumn(e.target.value);
              setSelectedValue('');
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
            sx={{
              minWidth: 200,
              backgroundColor: colors.primary[400],
              borderRadius: '4px',
            }}
          >
            <InputLabel sx={{ color: colors.grey[100] }}>Select Value</InputLabel>
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

      <Box
        m="0"
        height="75vh"
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
          },
          '& .name-column--cell': {
            color: colors.greenAccent[300],
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: colors.blueAccent[700],
            borderBottom: 'none',
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: colors.primary[400],
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor: colors.blueAccent[700],
          },
          '& .MuiCheckbox-root': {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={filteredRows}
          columns={columns}
          disableRowSelectionOnClick
        />
      </Box>
    </Box>
  );
};

export default Team;
