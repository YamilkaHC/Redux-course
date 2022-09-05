import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField/TextField";
import { useState } from "react";

const Searcher = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <TextField
        InputProps={{ endAdornment: (<InputAdornment position="start"> <SearchIcon color="secondary" /> </InputAdornment>), }}
        onChange={(e: any) => setValue(e.target.value)}
        className="search"
        id="outlined-basic"
        variant="outlined"
        placeholder="search"
        color="secondary"
        focused
      />

      <div className="filter-div d-flex justify-content-between">
        {["", "", "", "", "", ""].map((element: any, index: number) => (
          <div key={`element-${index}`} className="d-flex filter-badge gap-2 justify-content-between">
            <span>Water</span>
            <img alt="pokemon" src="/assets/filterwater.svg" />
          </div>
        ))}
      </div>
    </>
  );
};
export default Searcher;
