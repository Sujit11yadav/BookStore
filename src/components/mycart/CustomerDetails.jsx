import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "./CustomerDetails.css";
import { CustomerDetailsEdit } from "../../service/DataService";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";

function CustomerDetails(props) {
  const [addressObj, setAddressObj] = useState({
    addressType: "",
    fullAddress: "",
    city: "",
    state: "",
  });
  const takeAddressType = (event) => {
    setAddressObj({ ...addressObj, addressType: event.target.value });
  };
  const takeFullAddress = (event) => {
    setAddressObj({ ...addressObj, fullAddress: event.target.value });
  };
  const takeCity = (event) => {
    setAddressObj({ ...addressObj, city: event.target.value });
  };
  const takeState = (event) => {
    setAddressObj({ ...addressObj, state: event.target.value });
  };

  const onSubmit = () => {
    CustomerDetailsEdit(addressObj)
      .then((response) => {
        console.log(response);
        props.displayParticularOrder(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="customerdetailsSection">
      <div className="DetailsContainer">
        <div className="Details">Customer Details</div>
        <div className="NameAndNumber">
          <TextField id="outlined-basic" label="Full Name" variant="outlined" />
          <TextField
            id="outlined-basic"
            label="Mobile Number"
            variant="outlined"
          />
        </div>
        <div className="AddressField">
          <TextField
            id="outlined-basics"
            onChange={takeFullAddress}
            label="Address"
            variant="outlined"
          />
        </div>
        <div className="CityAndState">
          <TextField
            id="outlined-basic"
            onChange={takeCity}
            label="city/town"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            onChange={takeState}
            label="State"
            variant="outlined"
          />
        </div>
        <div className="RadioButtons">
          <FormControl component="fieldset">
            <FormLabel style={{ paddingRight: "250px" }} component="legend">
              Type
            </FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              name="row-radio-buttons-group"
              onChange={takeAddressType}
            >
              <FormControlLabel value="Home" control={<Radio />} label="Home" />
              <FormControlLabel value="Work" control={<Radio />} label="Work" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <Button
          style={{ marginBottom: "20px" }}
          variant="contained"
          className="ContinueButton"
          onClick={onSubmit}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}

export default CustomerDetails;
