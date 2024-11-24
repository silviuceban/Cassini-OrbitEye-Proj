// import React, { useState } from "react";
// import {
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   TextField,
//   Snackbar,
//   Select,
//   MenuItem,
//   InputLabel,
//   FormControl,
// } from "@mui/material";

// const AgriculturePlanForm: React.FC = () => {
//   // State variables for dialog and snackbar
//   const [openDialog, setOpenDialog] = useState(false);
//   const [openSnackbar, setOpenSnackbar] = useState(false);

//   // State variables for form data
//   const [fieldArea, setFieldArea] = useState("");
//   const [cropType, setCropType] = useState("");
//   const [amount, setAmount] = useState("");
//   const [valueInvested, setValueInvested] = useState("");
//   const [plantingDate, setPlantingDate] = useState("");
//   const [expectedHarvestDate, setExpectedHarvestDate] = useState("");
//   const [location, setLocation] = useState("");
//   const [irrigationMethod, setIrrigationMethod] = useState("");
//   const [soilType, setSoilType] = useState("");

//   // Handle opening the dialog
//   const handleOpenDialog = () => {
//     setOpenDialog(true);
//   };

//   // Handle closing the dialog
//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//   };

//   // Handle form submission
//   const handleSubmit = () => {
//     // You can use the form data here, e.g., send it to an API or use it in a prompt for AI analysis
//     console.log({
//       fieldArea,
//       cropType,
//       amount,
//       valueInvested,
//       plantingDate,
//       expectedHarvestDate,
//       location,
//       irrigationMethod,
//       soilType,
//     });

//     // Display the snackbar message
//     setOpenDialog(false);
//     setOpenSnackbar(true);
//   };

//   // Handle closing the snackbar
//   const handleCloseSnackbar = () => {
//     setOpenSnackbar(false);
//   };

//   return (
//     <>
//       <Button variant="contained" onClick={handleOpenDialog}>
//         Open Agriculture Plan Form
//       </Button>

//       <Dialog open={openDialog} onClose={handleCloseDialog}>
//         <DialogTitle>Enter Your Agriculture Plans</DialogTitle>
//         <DialogContent>
//           <TextField
//             autoFocus
//             margin="dense"
//             label="Field Area"
//             type="text"
//             fullWidth
//             value={fieldArea}
//             onChange={(e) => setFieldArea(e.target.value)}
//           />
//           <TextField
//             margin="dense"
//             label="Crop Type"
//             type="text"
//             fullWidth
//             value={cropType}
//             onChange={(e) => setCropType(e.target.value)}
//           />
//           <TextField
//             margin="dense"
//             label="Amount"
//             type="number"
//             fullWidth
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//           />
//           <TextField
//             margin="dense"
//             label="Value Invested"
//             type="number"
//             fullWidth
//             value={valueInvested}
//             onChange={(e) => setValueInvested(e.target.value)}
//           />
//           <TextField
//             margin="dense"
//             label="Planting Date"
//             type="date"
//             fullWidth
//             InputLabelProps={{
//               shrink: true,
//             }}
//             value={plantingDate}
//             onChange={(e) => setPlantingDate(e.target.value)}
//           />
//           <TextField
//             margin="dense"
//             label="Expected Harvest Date"
//             type="date"
//             fullWidth
//             InputLabelProps={{
//               shrink: true,
//             }}
//             value={expectedHarvestDate}
//             onChange={(e) => setExpectedHarvestDate(e.target.value)}
//           />
//           <TextField
//             margin="dense"
//             label="Location"
//             type="text"
//             fullWidth
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//           />
//           <FormControl fullWidth margin="dense">
//             <InputLabel>Irrigation Method</InputLabel>
//             <Select
//               value={irrigationMethod}
//               onChange={(e) => setIrrigationMethod(e.target.value)}
//               label="Irrigation Method"
//             >
//               <MenuItem value="Drip Irrigation">Drip Irrigation</MenuItem>
//               <MenuItem value="Sprinkler Irrigation">
//                 Sprinkler Irrigation
//               </MenuItem>
//               <MenuItem value="Surface Irrigation">Surface Irrigation</MenuItem>
//               <MenuItem value="Manual Watering">Manual Watering</MenuItem>
//             </Select>
//           </FormControl>
//           <TextField
//             margin="dense"
//             label="Soil Type"
//             type="text"
//             fullWidth
//             value={soilType}
//             onChange={(e) => setSoilType(e.target.value)}
//           />
//           {/* Add other fields that might be important */}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDialog}>Cancel</Button>
//           <Button variant="contained" onClick={handleSubmit}>
//             Submit
//           </Button>
//         </DialogActions>
//       </Dialog>

//       <Snackbar
//         open={openSnackbar}
//         autoHideDuration={6000}
//         message="Form submitted successfully!"
//         onClose={handleCloseSnackbar}
//       />
//     </>
//   );
// };

// export default AgriculturePlanForm;

import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Snackbar,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Tabs,
  Tab,
  Box,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const AgriculturePlanForm: React.FC = () => {
  // State variables for dialog and snackbar
  const [openDialog, setOpenDialog] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  // State variable for selected tab
  const [selectedTab, setSelectedTab] = useState(0);

  // State variables for future plans form data
  const [fieldArea, setFieldArea] = useState("");
  const [cropType, setCropType] = useState("");
  const [amount, setAmount] = useState("");
  const [valueInvested, setValueInvested] = useState("");
  const [plantingDate, setPlantingDate] = useState("");
  const [expectedHarvestDate, setExpectedHarvestDate] = useState("");
  const [location, setLocation] = useState("");
  const [irrigationMethod, setIrrigationMethod] = useState("");
  const [soilType, setSoilType] = useState("");

  // State variables for past data entries
  const [pastDataEntries, setPastDataEntries] = useState<any[]>([]);
  const [currentPastData, setCurrentPastData] = useState({
    fieldArea: "",
    cropType: "",
    amount: "",
    valueInvested: "",
    plantingDate: "",
    harvestDate: "",
    location: "",
    irrigationMethod: "",
    soilType: "",
    year: "",
  });

  // Handle opening the dialog
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  // Handle closing the dialog
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  // Handle snackbar close
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  // Handle tab change
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  // Handle future plans form submission
  const handleSubmitFuturePlans = () => {
    // Use the future plans data as needed
    console.log({
      fieldArea,
      cropType,
      amount,
      valueInvested,
      plantingDate,
      expectedHarvestDate,
      location,
      irrigationMethod,
      soilType,
    });

    // Reset form fields
    setFieldArea("");
    setCropType("");
    setAmount("");
    setValueInvested("");
    setPlantingDate("");
    setExpectedHarvestDate("");
    setLocation("");
    setIrrigationMethod("");
    setSoilType("");

    // Close dialog and show snackbar
    setOpenDialog(false);
    setOpenSnackbar(true);
  };

  // Handle past data form submission
  const handleAddPastDataEntry = () => {
    // Add current past data entry to the list
    setPastDataEntries([...pastDataEntries, currentPastData]);

    // Reset current past data form
    setCurrentPastData({
      fieldArea: "",
      cropType: "",
      amount: "",
      valueInvested: "",
      plantingDate: "",
      harvestDate: "",
      location: "",
      irrigationMethod: "",
      soilType: "",
      year: "",
    });
  };

  // Handle overall submission for past data
  const handleSubmitPastData = () => {
    // Use the past data entries as needed
    console.log("Past Data Entries:", pastDataEntries);

    // Reset past data entries
    setPastDataEntries([]);

    // Close dialog and show snackbar
    setOpenDialog(false);
    setOpenSnackbar(true);
  };

  // Form content for future plans
  const futurePlansForm = (
    <>
      <TextField
        autoFocus
        margin="dense"
        label="Field Area"
        type="text"
        fullWidth
        value={fieldArea}
        onChange={(e) => setFieldArea(e.target.value)}
      />
      <TextField
        margin="dense"
        label="Crop Type"
        type="text"
        fullWidth
        value={cropType}
        onChange={(e) => setCropType(e.target.value)}
      />
      <TextField
        margin="dense"
        label="Amount"
        type="number"
        fullWidth
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <TextField
        margin="dense"
        label="Value Invested"
        type="number"
        fullWidth
        value={valueInvested}
        onChange={(e) => setValueInvested(e.target.value)}
      />
      <TextField
        margin="dense"
        label="Planting Date"
        type="date"
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        value={plantingDate}
        onChange={(e) => setPlantingDate(e.target.value)}
      />
      <TextField
        margin="dense"
        label="Expected Harvest Date"
        type="date"
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        value={expectedHarvestDate}
        onChange={(e) => setExpectedHarvestDate(e.target.value)}
      />
      <TextField
        margin="dense"
        label="Location"
        type="text"
        fullWidth
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <FormControl fullWidth margin="dense">
        <InputLabel>Irrigation Method</InputLabel>
        <Select
          value={irrigationMethod}
          onChange={(e) => setIrrigationMethod(e.target.value)}
          label="Irrigation Method"
        >
          <MenuItem value="Drip Irrigation">Drip Irrigation</MenuItem>
          <MenuItem value="Sprinkler Irrigation">Sprinkler Irrigation</MenuItem>
          <MenuItem value="Surface Irrigation">Surface Irrigation</MenuItem>
          <MenuItem value="Manual Watering">Manual Watering</MenuItem>
        </Select>
      </FormControl>
      <TextField
        margin="dense"
        label="Soil Type"
        type="text"
        fullWidth
        value={soilType}
        onChange={(e) => setSoilType(e.target.value)}
      />
    </>
  );

  // Form content for past data
  const pastDataForm = (
    <>
      <TextField
        autoFocus
        margin="dense"
        label="Year"
        type="number"
        fullWidth
        value={currentPastData.year}
        onChange={(e) =>
          setCurrentPastData({ ...currentPastData, year: e.target.value })
        }
      />
      <TextField
        margin="dense"
        label="Field Area"
        type="text"
        fullWidth
        value={currentPastData.fieldArea}
        onChange={(e) =>
          setCurrentPastData({ ...currentPastData, fieldArea: e.target.value })
        }
      />
      <TextField
        margin="dense"
        label="Crop Type"
        type="text"
        fullWidth
        value={currentPastData.cropType}
        onChange={(e) =>
          setCurrentPastData({ ...currentPastData, cropType: e.target.value })
        }
      />
      <TextField
        margin="dense"
        label="Amount"
        type="number"
        fullWidth
        value={currentPastData.amount}
        onChange={(e) =>
          setCurrentPastData({ ...currentPastData, amount: e.target.value })
        }
      />
      <TextField
        margin="dense"
        label="Value Invested"
        type="number"
        fullWidth
        value={currentPastData.valueInvested}
        onChange={(e) =>
          setCurrentPastData({
            ...currentPastData,
            valueInvested: e.target.value,
          })
        }
      />
      <TextField
        margin="dense"
        label="Planting Date"
        type="date"
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        value={currentPastData.plantingDate}
        onChange={(e) =>
          setCurrentPastData({
            ...currentPastData,
            plantingDate: e.target.value,
          })
        }
      />
      <TextField
        margin="dense"
        label="Harvest Date"
        type="date"
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        value={currentPastData.harvestDate}
        onChange={(e) =>
          setCurrentPastData({
            ...currentPastData,
            harvestDate: e.target.value,
          })
        }
      />
      <TextField
        margin="dense"
        label="Location"
        type="text"
        fullWidth
        value={currentPastData.location}
        onChange={(e) =>
          setCurrentPastData({ ...currentPastData, location: e.target.value })
        }
      />
      <FormControl fullWidth margin="dense">
        <InputLabel>Irrigation Method</InputLabel>
        <Select
          value={currentPastData.irrigationMethod}
          onChange={(e) =>
            setCurrentPastData({
              ...currentPastData,
              irrigationMethod: e.target.value,
            })
          }
          label="Irrigation Method"
        >
          <MenuItem value="Drip Irrigation">Drip Irrigation</MenuItem>
          <MenuItem value="Sprinkler Irrigation">Sprinkler Irrigation</MenuItem>
          <MenuItem value="Surface Irrigation">Surface Irrigation</MenuItem>
          <MenuItem value="Manual Watering">Manual Watering</MenuItem>
        </Select>
      </FormControl>
      <TextField
        margin="dense"
        label="Soil Type"
        type="text"
        fullWidth
        value={currentPastData.soilType}
        onChange={(e) =>
          setCurrentPastData({ ...currentPastData, soilType: e.target.value })
        }
      />
      <Box display="flex" justifyContent="flex-end" mt={2}>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAddPastDataEntry}
        >
          Add Entry
        </Button>
      </Box>
      {pastDataEntries.length > 0 && (
        <Box mt={2}>
          <Typography variant="h6">Added Entries:</Typography>
          {pastDataEntries.map((entry, index) => (
            <Box key={index} mt={1} p={1} border={1} borderRadius={4}>
              <Typography>
                <strong>Year:</strong> {entry.year}
              </Typography>
              <Typography>
                <strong>Field Area:</strong> {entry.fieldArea}
              </Typography>
              <Typography>
                <strong>Crop Type:</strong> {entry.cropType}
              </Typography>
              {/* Display other fields as needed */}
            </Box>
          ))}
        </Box>
      )}
    </>
  );

  return (
    <>
      <Button variant="contained" onClick={handleOpenDialog}>
        Open Agriculture Plan Form
      </Button>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>Enter Your Agriculture Plans</DialogTitle>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="Future Plans" />
          <Tab label="Past Data" />
        </Tabs>
        <DialogContent dividers>
          {selectedTab === 0 && futurePlansForm}
          {selectedTab === 1 && pastDataForm}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          {selectedTab === 0 && (
            <Button variant="contained" onClick={handleSubmitFuturePlans}>
              Submit
            </Button>
          )}
          {selectedTab === 1 && (
            <Button variant="contained" onClick={handleSubmitPastData}>
              Submit All Entries
            </Button>
          )}
        </DialogActions>
      </Dialog>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        message="Form submitted successfully!"
        onClose={handleCloseSnackbar}
      />
    </>
  );
};

export default AgriculturePlanForm;
