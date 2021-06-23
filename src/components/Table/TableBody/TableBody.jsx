import React from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { IsAlive } from "../../../helpers/IsAlive";
import { useHistory } from "react-router-dom";
import * as API from "../../../utils/api";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));
export default function TableBody({ characters }) {
  const classes = useStyles();
  const history = useHistory();

  const redirectToAllegianceHouse = async (character, id) => {
    const { data } = await API.getHouseFromAllegiances(id);
    if (character?.allegiances.length !== 0) {
      history.push({
        pathname: "/houses",
        state: data,
      });
    }
  };
  return (
    <div className={classes.root}>
      <Grid container className="table-body-wrapper">
        {characters?.length > 0
          ? characters.map((character, index) => (
              <Grid container className="table-items" key={index}>
                <Grid item lg={3}>
                  {character?.name +
                    "," +
                    character?.aliases.map((alias) => alias)}
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
                  {}
                  {/* <a
                    onClick={() => {
                      redirectToAllegianceHouse(
                        character,
                        character?.allegiances
                      );
                    }}
                    className="allegiance-link"
                  > */}
                  {character?.allegiances.length == 0
                    ? "No Allegancies"
                    : character?.allegiances
                        ?.toString()
                        ?.split("https://www.anapioficeandfire.com/api/houses/")
                        .map((data) => (
                          <a
                            className="allegiance-link"
                            onClick={() => {
                              redirectToAllegianceHouse(character, data);
                            }}
                          >
                            {data}
                          </a>
                        ))}
                  {/* </a> */}
                </Grid>
              </Grid>
            ))
          : "No characters"}
      </Grid>
    </div>
  );
}
