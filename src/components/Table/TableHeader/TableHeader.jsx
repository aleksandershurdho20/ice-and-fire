import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
export default function TableHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className="table-header-wrapper">
        <Grid item lg={3}>
          Character
        </Grid>
        <Grid item lg={3}>
          Alive
        </Grid>
        <Grid item lg={2}>
          Gender
        </Grid>
        <Grid item lg={2}>
          Culture
        </Grid>
        <Grid item lg={2}>
          Allegiances
        </Grid>
      </Grid>
    </div>
  );
}
