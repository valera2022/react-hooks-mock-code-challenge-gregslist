import React from "react";

function Search({setSearchData}) {
  // function handleSubmit(e){
  //   e.preventDefault();
  //   e.target.setAttribute("value", "e.target.value")
  //   console.log(e.target.value)}


  function handleChange(e,event) {
    event.preventDefault();
    console.log(event)
    e.preventDefault();
    console.log("submitted");
   console.log( e.target.value)
   setSearchData(e.target.value)

  }
    
  
 

  return (
    <form className="searchbar" onSubmit={handleChange}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        // value={""}
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
