import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listingsArr, handleDelete}) {

  const listingCards = listingsArr.map((listing) => {
    return(
      <ListingCard
        listingObj={listing}
        onDelete={handleDelete}
        key={listing.id}
      />
    )
  });

  return (
    <main>
      <ul className="cards">
        {listingCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
