import TextField from '@mui/material/TextField';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';


const Searcher = () => {

    const [value, setValue] = useState("")
    return (
        <TextField
            InputProps={{ endAdornment: <InputAdornment position="start"><SearchIcon color='secondary' /></InputAdornment>, }}
            onChange={(e) => setValue(e.target.value)} className="search" id="outlined-basic" variant="outlined" placeholder='search' color="secondary" focused />

    )
}
export default Searcher;