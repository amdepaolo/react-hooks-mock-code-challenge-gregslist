import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listingsArr, setListings] = useState([]);
  const [search, setSearch] = useState('');

  function updateSearch(e){
    setSearch(e.target.value)
    console.log(search)
  }

  useEffect(()=>{
    fetch('http://localhost:6001/listings')
    .then(r => r.json())
    .then(listings => setListings(listings))
  },[]);

  function handleDelete(deletedId){
    const updatedListings = listingsArr.filter(listing => listing.id !== deletedId);
    setListings(updatedListings);
  }

  function handleSearch(){
    const updatedListings = listingsArr.filter(listing => {
      return listing.description.toLowerCase().includes(search.toLowerCase())
    })
    setListings(updatedListings);
  }

  return (
    <div className="app">
      <Header 
        search={search}
        onSearchType={updateSearch}
        onSearchSubmit={handleSearch}
      />
      <ListingsContainer 
        listingsArr={listingsArr} 
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
