import React from "react";
import { FormControl, Button, TextField, Box, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from "@mui/icons-material/Send";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "30%",
    margin: "auto",
    height: "400px",
    paddinBottom: "400px",
  },
  Box: {
    border: "1px solid white",
    borderRaduis: "16px",
    margin: "auto",
    textAlign: "center",
  },
  container: {
    marginTop: "100px",
  },
}));

function ContactUs() {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "45ch" },
        }}
        noValidate
        autoComplete="off"
        className={classes.Box}
      >
        <div style={{ paddingTop: "50px" }}>
          <FormControl>
            <TextField
              id="outlined-basic"
              label="first-name"
              variant="outlined"
              placeholder="enter your first name"
            />
          </FormControl>
        </div>
        <div>
          <FormControl>
            <TextField
              id="outlined-basic"
              label="last-name"
              variant="outlined"
              placeholder="enter your last Name"
            />
          </FormControl>
        </div>

        <div>
          <FormControl>
            <TextField
              id="outlined-basic"
              label="email"
              variant="outlined"
              placeholder="type your email"
            />
          </FormControl>
        </div>
        <div>
          <FormControl>
            <TextField
              id="outlined-basic"
              label="msg"
              variant="outlined"
              placeholder="how we can help you"
            />
          </FormControl>
        </div>
        <Button variant="outlined" endIcon={<SendIcon />}>
          Submit
        </Button>
      </Box>
    </Box>
  );
}

export default ContactUs;
