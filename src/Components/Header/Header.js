import React from "react";
import "./Header.css";
import { TextField } from "@mui/material";
import { MenuItem } from "@mui/material";
import languages from "../data/languages";

export const Header = ({word,setWord,language,setLanguage}) => {
  return (
    <div className="header">
      <span className="text">{word?word:"Word dictionary"}</span>
      <div className="inputs">
        <TextField
          className="search"
          label="Search a word"
          variant="outlined"
          helperText="Enter a word"
          value={word}
          onChange={(e) => setWord(e.target.value) }
        />
        <TextField
          id="outlined-select-currency"
          select
          label="English"
          value={language}
          onChange={(e) => setLanguage(e.target.value) }
          helperText="Language selection"
          >
          {
            languages.map((option) =>(
              <MenuItem key={option.label} value={option.label}> {option.value} </MenuItem>
            ))
          }
        
      
        </TextField>
      </div>
    </div>
  );
};

export default Header;