import React, { useState } from 'react';
import {
  Box,
  useTheme,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import { tokens } from '../theme.jsx';
import { mockDataContacts } from '../data/mockData.js';
import { DataGrid } from '@mui/x-data-grid';
import Header from './Header.jsx';

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [selectedColumn, setSelectedColumn] = useState('');
  const [selectedValue, setSelectedValue] = useState('');

  // Extract unique values for selected column
  const getUniqueValues = (columnKey) => {
    const values = mockDataContacts.map((row) => row[columnKey]);
    return [...new Set(values)];
  };

  const filteredRows = mockDataContacts.filter((row) => {
    if (!selectedColumn || !selectedValue) return true;
    return row[selectedColumn] === selectedValue;
  });

  const columns = [
    { field: 'id', headerName: 'ID', flex: 0.5 },
    { field: 'registrarId', headerName: 'Registrar ID', flex: 0.5 },
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
      field: 'address',
      headerName: 'Address',
      flex: 1,
    },
    {
      field: 'city',
      headerName: 'City',
      flex: 1,
    },
    {
      field: 'zipCode',
      headerName: 'ZipCode',
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="STAFFS" subtitle="List of DAFOSEAD Staffs for Future Reference" />

      
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
            <MenuItem value="city">City</MenuItem>
            <MenuItem value="email">Email</MenuItem>
            <MenuItem value="zipCode">Zip Code</MenuItem>
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
          rows={filteredRows}
          columns={columns}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </Box>
  );
};

export default Contacts;
