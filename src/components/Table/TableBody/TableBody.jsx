import React from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { IsAlive } from "../../../helpers/IsAlive";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));
export default function TableBody({ characters }) {
  const classes = useStyles();
  console.log(characters, "charactersData");
  return (
    <div className={classes.root}>
      <Grid container className="table-body-wrapper">
        {characters.length > 0
          ? characters.map((character, index) => (
              <Grid container className="table-items" key={index}>
                <Grid item lg={3}>
                  {character?.name + "," + character?.aliases[0]}
                </Grid>
                <Grid item lg={3}>
                  {IsAlive(character)}
                </Grid>
                <Grid item lg={2}>
                  {character?.gender}
                </Grid>
                <Grid item lg={2}>
                  {!character?.culture ? "Unknown" : character?.culture}
                </Grid>
                <Grid item lg={2}>
                  <a href={character?.allegiances} className="allegiance-link">
                    {character?.allegiances.length == 0
                      ? "No Allegancies"
                      : character?.allegiances
                          ?.toString()
                          ?.split("/houses/")[1]}
                  </a>
                </Grid>
              </Grid>
            ))
          : "No characters"}
      </Grid>
    </div>
  );
}
