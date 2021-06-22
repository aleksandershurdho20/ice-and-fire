import React, { useEffect, useState } from "react";
import * as API from "../../utils/api";
import Table from "../../components/Table";
import Grid from "@material-ui/core/Grid";

export default function Characters() {
  const [charactersData, setCharacterData] = useState([]);
  useEffect(() => {
    API.getCharacterPage().then((res) => setCharacterData(res.data));
  }, []);
  return (
    <Grid container justify="center">
      <Grid item lg={10}>
        <Table characters={charactersData} />
      </Grid>
    </Grid>
  );
}
