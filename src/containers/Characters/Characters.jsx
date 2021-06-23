import React, { useEffect, useState } from "react";
import * as API from "../../utils/api";
import Table from "../../components/Table";
import Grid from "@material-ui/core/Grid";
import TextInput from "../../components/FilterInput";
import Pagination from "../../components/Pagination";
export default function Characters() {
  const [charactersData, setCharacterData] = useState([]);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  // useEffect(() => {
  //   API.getCharacterPage().then((res) => {
  //     setCharacterData(res.data);
  //     setData(res.data);
  //   });
  // }, []);
  const handleFilterChange = (e) => {
    setQuery(e.target.value);
    if (e.target.value.length !== 0) {
    }
    const filteredCharacters = [...charactersData].filter((character) =>
      character.culture.includes(e.target.value)
    );
    setData(filteredCharacters);
  };
  const handlePaginationChange = (page, pageSize) => {
    API.getCharacterPageByPagination(page, pageSize).then((res) => {
      console.log(res.data, "dskldskldkl");
      setCharacterData(res.data);
      setData(res.data);
    });
  };
  return (
    <Grid container justify="center">
      <Grid item lg={10}>
        <TextInput
          type="text"
          value={query}
          onChange={handleFilterChange}
          placeholder="Search by culture"
        />
        <Pagination handlePaginationChange={handlePaginationChange} />
        <Table characters={data} />
      </Grid>
    </Grid>
  );
}
