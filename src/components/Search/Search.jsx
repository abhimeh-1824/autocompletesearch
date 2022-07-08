import React from "react";
import "./search.css";
import { MdSearch } from "react-icons/md";
const Search = ({ setUserName }) => {
  const nameHandle = (evant) => {
    if (evant.key === "Enter") setUserName(evant.target.value);
  };
  return (
    <div className="serch-name max-width">
      <MdSearch className="absolute-postion search-icon" />
      <input
        type="text"
        placeholder="Enter Your Name"
        className="input-text"
        onKeyPress={(evant) => nameHandle(evant)}
      />
    </div>
  );
};

export default Search;
