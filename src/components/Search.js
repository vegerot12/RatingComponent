import React, { useState } from "react";
const Search = () => {
  const list = [
    "app",
    "apple",
    "apprentice",
    "application",
    "appliance",
    "master",
    "main",
  ];

  const [searchText, setSearchText] = useState("");
  let filteredList = list.filter((item) =>
    item.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <div>
      <input
        placeholder="search here..."
        onChange={(e) => setSearchText(e.target.value)}
      />
      <ul>{filteredList && filteredList.map((item) => <li>{item}</li>)}</ul>
    </div>
  );
};
export default Search;
