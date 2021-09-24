import React from "react";
import { Container, Typography, Grid, TextField } from "@material-ui/core";
import MuiPhoneNumber from "material-ui-phone-number";
import { makeStyles, Button } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import RemoveButton from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { useState } from "react";
const useStyles = makeStyles({
  field: {
    marginTop: 10,
    marginBottom: 10,
    display: "inline-block",
  },
});
const Form = () => {
  const [inputFields, setInputFields] = useState([
    {
      inputValue: "Student",
    },
  ]);
  const [inputValue, setinputValue] = useState("");
  const classes = useStyles();
  const handleAddFields = () => {
    if (inputValue === "") {
      console.log("Not Allowed");
    } else {
      setInputFields([...inputFields, { inputValue }]);
    }
  };
  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };
  return (
    <form autoComplete="off" noValidate>
      <Typography
        variant="h5"
        color="primary"
        style={{ fontWeight: "bold", textAlign: "left" }}
      >
        Personal Details
      </Typography>
      <Grid container spacing={1} style={{ margin: "0.5rem 0" }}>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <TextField
            id=""
            label="First Name"
            variant="outlined"
            color="secondary"
            className={`${classes.field}`}
          />
        </Grid>
        <Grid item lg={4} md={4}>
          <TextField
            id=""
            label="Last Name"
            variant="outlined"
            color="secondary"
            className={`${classes.field}`}
          />
        </Grid>
        <Grid item lg={4} md={4}>
          <TextField
            id=""
            label="Age"
            variant="outlined"
            color="secondary"
            className={`${classes.field}`}
          />
        </Grid>
        <Grid item lg={4} md={4}>
          <TextField
            id=""
            label="Email"
            type="email"
            variant="outlined"
            color="secondary"
            className={`${classes.field}`}
          />
        </Grid>
        <Grid item lg={4} md={4}>
          <MuiPhoneNumber
            name="phone"
            label="Phone Number"
            variant="outlined"
            defaultCountry="pk"
            className={`${classes.field}`}
          />
        </Grid>
      </Grid>
      <Typography
        variant="h5"
        color="primary"
        style={{ fontWeight: "bold", textAlign: "left" }}
      >
        Qualification
      </Typography>
      <Typography
        variant="h6"
        color="primary"
        style={{ textAlign: "left", color: "black" }}
      >
        School
      </Typography>
      <Grid container spacing={1} style={{ margin: "0.5rem 0" }}>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <TextField
            id=""
            label="Institution"
            variant="outlined"
            color="secondary"
            className={`${classes.field}`}
          />
        </Grid>
        <Grid item lg={4} md={4}>
          <TextField
            label="From"
            type="date"
            variant="outlined"
            defaultValue="2017-05-24"
            className={`${classes.field}`}
          />
        </Grid>
        <Grid item lg={4} md={4}>
          <TextField
            label="To"
            type="date"
            variant="outlined"
            color="secondary"
            defaultValue="2017-05-24"
            className={`${classes.field}`}
          />
        </Grid>
      </Grid>
      <Typography
        variant="h6"
        color="primary"
        style={{ textAlign: "left", color: "black" }}
      >
        College
      </Typography>
      <Grid container spacing={1} style={{ margin: "0.5rem 0" }}>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <TextField
            id=""
            label="Institution"
            variant="outlined"
            color="secondary"
            className={`${classes.field}`}
          />
        </Grid>
        <Grid item lg={4} md={4}>
          <TextField
            label="From"
            type="date"
            variant="outlined"
            defaultValue="2017-05-24"
            className={`${classes.field}`}
          />
        </Grid>
        <Grid item lg={4} md={4}>
          <TextField
            label="To"
            type="date"
            variant="outlined"
            color="secondary"
            defaultValue="2017-05-24"
            className={`${classes.field}`}
          />
        </Grid>
      </Grid>
      <Typography
        variant="h6"
        color="primary"
        style={{ textAlign: "left", color: "black" }}
      >
        Univeristy
      </Typography>
      <Grid container spacing={1} style={{ margin: "0.5rem 0" }}>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <TextField
            id=""
            label="Institution"
            variant="outlined"
            color="secondary"
            className={`${classes.field}`}
          />
        </Grid>
        <Grid item lg={4} md={4}>
          <TextField
            label="From"
            type="date"
            variant="outlined"
            defaultValue="2017-05-24"
            className={`${classes.field}`}
          />
        </Grid>
        <Grid item lg={4} md={4}>
          <TextField
            label="To"
            type="date"
            variant="outlined"
            color="secondary"
            defaultValue="2017-05-24"
            className={`${classes.field}`}
          />
        </Grid>
      </Grid>

      <Typography
        variant="h5"
        color="primary"
        style={{ fontWeight: "bold", textAlign: "left" }}
      >
        Experience
      </Typography>
      <Grid container spacing={1} style={{ margin: "0.5rem 0" }}>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <TextField
            id=""
            label="Role"
            variant="outlined"
            color="secondary"
            className={`${classes.field}`}
          />
        </Grid>

        <Grid item lg={6} md={6} sm={6} xs={12}>
          <TextField
            label="Details"
            multiline
            rows={4}
            variant="outlined"
            className={`${classes.field}`}
          />
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <TextField
            label="From"
            type="date"
            variant="outlined"
            color="secondary"
            defaultValue="2017-05-24"
            className={`${classes.field}`}
          />
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <TextField
            label="To"
            type="date"
            variant="outlined"
            color="secondary"
            defaultValue="2017-05-24"
            className={`${classes.field}`}
          />
        </Grid>
      </Grid>
      <Typography
        variant="h5"
        color="primary"
        style={{ fontWeight: "bold", textAlign: "left" }}
      >
        Skills
      </Typography>
      <TextField
        label="Skill"
        onChange={(e) => {
          setinputValue(e.target.value);
        }}
      />
      {inputFields.map((inputField, index) => (
        <div key={index}>
          <Button variant="contained" color="secondary">
            {inputField.inputValue}
          </Button>
          <IconButton onClick={() => handleRemoveFields(index)}>
            <RemoveButton />
          </IconButton>
          <IconButton onClick={() => handleAddFields()}>
            <AddIcon />
          </IconButton>
        </div>
      ))}
    </form>
  );
};

export default Form;
