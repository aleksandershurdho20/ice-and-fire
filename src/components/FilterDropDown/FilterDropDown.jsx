import React,{useState,useEffect} from "react";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

export default function FilterDropDown({handleFilterByDropDownOptions}) {
    const [searchValue,setSearchValue]=useState("any")
    useEffect(()=>{
        handleFilterByDropDownOptions(searchValue)
    },[searchValue])
  return (
    <Select value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}>
      <MenuItem value={"any"}>Any</MenuItem>
      <MenuItem value={"Male"}>Male</MenuItem>
      <MenuItem value={"Female"}>Female</MenuItem>
    </Select>
  );
}
