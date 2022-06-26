import React from "react";

function Search({search, onSearchType, onSearchSubmit}) {

  function handleSubmit(e) {
    e.preventDefault();
    onSearchSubmit();
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={onSearchType}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
