import React from "react";
import { Button, Grid, TextField, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(4),
  },
  inputs: {
    marginTop: theme.spacing(1),
    background: "#fbfbfb",
    "& .MuiFilledInput-input": {
      background: "#fbfbfb",
    },
  },
  titleWrapper: {
    display: "flex",
    flexDirection: "column",
  },
  mainTitle: {
    margin: theme.spacing(2, "auto"),
  },
  titleContent: {
    background: "#fbfbfb",
    padding: 10,
    borderRadius: 8,
    width: 200,
    marginBottom: 8,
  },
  button: {
    margin: theme.spacing(1),
  },
}));
export default function Houses(props) {
  const { state } = props?.location;
  const classes = useStyles();
  console.log(state);
  return (
    <Paper className={classes.root}>
      <Button onClick={() => props.history.goBack()} className={classes.button}>
        Go Back
      </Button>
      <Grid container spacing={24} justify="center" alignItems="center ">
        <Grid item md={4}>
          <TextField
            value={state.name}
            label="Name"
            className={classes.inputs}
            InputProps={{
              readOnly: true,
            }}
            variant="filled"
          />
        </Grid>
        <Grid item md={4}>
          <TextField
            value={state.region}
            label="Region"
            className={classes.inputs}
            InputProps={{
              readOnly: true,
            }}
            variant="filled"
          />
        </Grid>
        <Grid item md={4}>
          <TextField
            value={state.coatOfArms}
            label="Coat of Arms"
            className={classes.inputs}
            InputProps={{
              readOnly: true,
            }}
            variant="filled"
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={4}>
          <div className={classes.mainTitle}>
            <span>Titles</span>
          </div>
          <div className={classes.titleWrapper}>
            {state.titles?.length > 0
              ? state.titles.map((title, index) => (
                  <span key={index} className={classes.titleContent}>
                    {title}
                  </span>
                ))
              : "No Titles"}
          </div>
        </Grid>
        <Grid item md={4}>
          <TextField
            value={state.words}
            label="Words"
            className={classes.inputs}
            InputProps={{
              readOnly: true,
            }}
            variant="filled"
          />
        </Grid>
        <Grid item md={4}>
          <div className={classes.mainTitle}>
            <span>Seats</span>
          </div>
          <div className={classes.titleWrapper}>
            {state.seats?.length > 0
              ? state.seats.map((seat, index) => (
                  <span key={index} className={classes.titleContent}>
                    {seat}
                  </span>
                ))
              : "No Seats"}
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={24} justify="center" alignItems="center ">
        <Grid item md={4}>
          <TextField
            value={state.diedOut}
            label="Died out"
            className={classes.inputs}
            InputProps={{
              readOnly: true,
            }}
            variant="filled"
          />
        </Grid>
        <Grid item md={4}>
          <TextField
            value={state.overlord}
            label="Lord"
            className={classes.inputs}
            InputProps={{
              readOnly: true,
            }}
            variant="filled"
          />
        </Grid>
        <Grid item md={4}>
          <TextField
            value={state.coatOfArms}
            label="Cadet Branches"
            className={classes.inputs}
            InputProps={{
              readOnly: true,
            }}
            variant="filled"
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
