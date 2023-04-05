import React,{useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [searchData, setSearchData]= useState("")
  return (
    <div className="app">
      <Header setSearchData={setSearchData}/>
      <ListingsContainer searchData={searchData} />
    </div>
  );
}

export default App;
