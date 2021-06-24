import React, { useEffect, useState } from "react";
import * as API from "../../utils/api";
import Table from "../../components/Table";
import Grid from "@material-ui/core/Grid";
import TextInput from "../../components/FilterInput";
import Pagination from "../../components/Pagination";
import Loader from "../../components/Loader";
import FilterDropDown from "../../components/FilterDropDown/FilterDropDown";
import parse from  'parse-link-header'
export default function Characters() {
  const [charactersData, setCharacterData] = useState([]);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const[countApiPage,setCountApiPage]=useState(null)
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
    setOpen(true);
    API.getCharacterPageByPagination(page, pageSize).then((res) => {
    
      setCharacterData(res.data);
      setData(res.data);
      setOpen(false);
       

    });
  };
  
  const handleFilterByDropDownOptions = (value) => {
    const filteredCharacters =
      value === "any"
        ? [...charactersData]
        : charactersData.filter((character) =>
          character.gender.includes(value)
        );
    setData(filteredCharacters);
  };
  return (
    <Grid container justify="center">
      <Grid item lg={10}>
        <div className="filter-wrappers">
          <TextInput
            type="text"
            value={query}
            onChange={handleFilterChange}
            placeholder="Search by culture"
          />
          <FilterDropDown
            handleFilterByDropDownOptions={handleFilterByDropDownOptions}
          />
        </div>
        <Pagination
          handlePaginationChange={handlePaginationChange}
          characters={data}
          countApiPage={countApiPage}
        />
        <Table characters={data} />
        <Loader open={open} />
      </Grid>
    </Grid>
  );
}
