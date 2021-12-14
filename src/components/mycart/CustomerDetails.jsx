import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import "./CustomerDetails.css";
import { CustomerDetailsEdit } from "../../service/DataService";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function CustomerDetails(props) {
  const [customerObj, setcustomerObj] = useState({
    addressType: "",
    fullAddress: "",
    city: "",
    state: "",
  });
  const takeaddresstype = (event) => {
    setcustomerObj({ ...customerObj, addressType: event.target.value });
  };
  const takefulladdress = (event) => {
    setcustomerObj({ ...customerObj, fullAddress: event.target.value });
  };
  const takecity = (event) => {
    setcustomerObj({ ...customerObj, city: event.target.value });
  };
  const takestate = (event) => {
    setcustomerObj({ ...customerObj, state: event.target.value });
  };

  const onSubmit = () => {
    CustomerDetailsEdit(customerObj)
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
            onChange={takefulladdress}
            label="Address"
            variant="outlined"
          />
        </div>
        <div className="CityAndState">
          <TextField
            id="outlined-basic"
            onChange={takecity}
            label="city/town"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            onChange={takestate}
            label="State"
            variant="outlined"
          />
        </div>
        <div className="RadioButtons" onChange={takeaddresstype}>
          <FormControl component="fieldset">
            <FormLabel style={{ paddingRight: "250px" }} component="legend">
              Type
            </FormLabel>
            <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
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
        <div className="ContinueButton" onClick={onSubmit}>
          Continue
        </div>
      </div>
    </div>
  );
}

export default CustomerDetails;
