import React,{useState} from "react";

function Search({setSearchData,searchData}) {
  const[search,setSearch]= useState("")
  // function handleSubmit(e){
  //   e.preventDefault();
  //   e.target.setAttribute("value", "e.target.value")
  //   console.log(e.target.value)}

function handleChange(e){
  e.preventDefault()
  setSearch(e.target.value)

}
  function handleSubmit(e) {
   
    e.preventDefault();
    console.log("submitted");
   console.log( e.target.value)
   setSearchData(search)

  }
    
  
 

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={handleChange}
        
      />
      <button type="submit"  >🔍</button>
    </form>
  );
}

export default Search;
