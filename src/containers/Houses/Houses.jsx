import React from "react";
import { Button, Grid, TextField, Paper, Typography } from "@material-ui/core";
import{useStyles} from '../../utils/useStyles'

export default function Houses(props) {
  const { state } = props?.location;
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Button onClick={() => props.history.goBack()} className={classes.button}>
        Go Back
      </Button>
      <Grid container  justify="center" >
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
      <Grid container justify="center">
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
