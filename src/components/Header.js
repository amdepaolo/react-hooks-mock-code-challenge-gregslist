import React from "react";
import Search from "./Search";

function Header({search, onSearchType, onSearchSubmit}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search 
        search={search}
        onSearchType={onSearchType}
        onSearchSubmit={onSearchSubmit}/>
    </header>
  );
}

export default Header;
