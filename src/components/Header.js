import React from "react";
import Search from "./Search";

function Header({setSearchData,searchData}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setSearchData={setSearchData} searchData={searchData}  />
    </header>
  );
}

export default Header;
