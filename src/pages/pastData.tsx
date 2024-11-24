import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TextField,
  Select,
  MenuItem,
  FormControl,
  Button,
  Typography,
} from "@mui/material";
import { Delete as DeleteIcon, Add as AddIcon } from "@mui/icons-material";

interface HarvestRecord {
  id: number;
  year: string;
  fieldArea: string;
  cropType: string;
  amount: string;
  valueInvested: string;
  plantingDate: string;
  harvestDate: string;
  location: string;
  irrigationMethod: string;
  soilType: string;
}

const FarmersRecordsTable = () => {
  const [rows, setRows] = useState<HarvestRecord[]>([]);

  // Function to add a new empty row
  const handleAddRow = () => {
    const newId = rows.length > 0 ? rows[rows.length - 1].id + 1 : 1;
    const newRow: HarvestRecord = {
      id: newId,
      year: "",
      fieldArea: "",
      cropType: "",
      amount: "",
      valueInvested: "",
      plantingDate: "",
      harvestDate: "",
      location: "",
      irrigationMethod: "",
      soilType: "",
    };
    setRows([...rows, newRow]);
  };

  // Function to delete a row
  const handleDeleteRow = (id: number) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  // Function to handle changes in text fields
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id: number,
    field: keyof HarvestRecord,
  ) => {
    const { value } = e.target;
    setRows((prevRows) =>
      prevRows.map((row) => (row.id === id ? { ...row, [field]: value } : row)),
    );
  };

  // Function to handle changes in select fields
  const handleSelectChange = (
    e: React.ChangeEvent<{ value: unknown }>,
    id: number,
    field: keyof HarvestRecord,
  ) => {
    const value = e.target.value as string;
    setRows((prevRows) =>
      prevRows.map((row) => (row.id === id ? { ...row, [field]: value } : row)),
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h5" gutterBottom>
        Farmers' Past Harvest Records
      </Typography>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={handleAddRow}
        style={{ marginBottom: "10px" }}
      >
        Add Record
      </Button>
      <TableContainer component={Paper}>
        <Table aria-label="farmers records table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Year</TableCell>
              <TableCell>Field Area</TableCell>
              <TableCell>Crop Type</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Value Invested</TableCell>
              <TableCell>Planting Date</TableCell>
              <TableCell>Harvest Date</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Irrigation Method</TableCell>
              <TableCell>Soil Type</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>
                  <TextField
                    type="number"
                    value={row.year}
                    onChange={(e) => handleChange(e, row.id, "year")}
                    fullWidth
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    value={row.fieldArea}
                    onChange={(e) => handleChange(e, row.id, "fieldArea")}
                    fullWidth
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    value={row.cropType}
                    onChange={(e) => handleChange(e, row.id, "cropType")}
                    fullWidth
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    type="number"
                    value={row.amount}
                    onChange={(e) => handleChange(e, row.id, "amount")}
                    fullWidth
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    type="number"
                    value={row.valueInvested}
                    onChange={(e) => handleChange(e, row.id, "valueInvested")}
                    fullWidth
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    type="date"
                    value={row.plantingDate}
                    onChange={(e) => handleChange(e, row.id, "plantingDate")}
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    type="date"
                    value={row.harvestDate}
                    onChange={(e) => handleChange(e, row.id, "harvestDate")}
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    value={row.location}
                    onChange={(e) => handleChange(e, row.id, "location")}
                    fullWidth
                  />
                </TableCell>
                <TableCell>
                  <FormControl fullWidth>
                    <Select
                      value={row.irrigationMethod}
                      onChange={(e: any) =>
                        handleSelectChange(e, row.id, "irrigationMethod")
                      }
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="Drip Irrigation">
                        Drip Irrigation
                      </MenuItem>
                      <MenuItem value="Sprinkler Irrigation">
                        Sprinkler Irrigation
                      </MenuItem>
                      <MenuItem value="Surface Irrigation">
                        Surface Irrigation
                      </MenuItem>
                      <MenuItem value="Manual Watering">
                        Manual Watering
                      </MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell>
                  <TextField
                    value={row.soilType}
                    onChange={(e) => handleChange(e, row.id, "soilType")}
                    fullWidth
                  />
                </TableCell>
                <TableCell>
                  <IconButton
                    aria-label="delete"
                    onClick={() => handleDeleteRow(row.id)}
                  >
                    <DeleteIcon color="error" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            {rows.length === 0 && (
              <TableRow>
                <TableCell colSpan={12} align="center">
                  No records available. Click "Add Record" to start.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default FarmersRecordsTable;
