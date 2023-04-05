import React,{useState,useEffect}  from "react";
 import ListingCard from "./ListingCard";

function ListingsContainer({searchData}) {
  console.log(searchData)

  const [datas,setData] = useState([])
  // const [obj,setobj] = useState({})

  useEffect(()=>{
    fetch("http://localhost:6001/listings")
    .then(r=> r.json())
    .then(data=> setData(data))

  },[])

function handleDelete(deletedItem){
  fetch(`http://localhost:6001/listings/${deletedItem.id}`,{

   method:"DELETE",})
   .then((r) => r.json())
      .then((data) => {
        const UpdatedItems = datas.filter((item)=>{ return item.id !== deletedItem.id
        })
        setData(UpdatedItems)
        //  setItems(data)
      });
        
}

// function search(){
//   fetch(`http://localhost:6001/listings/${deletedItem.id}`)
// }


//  datas.filter((data) => {
//   if (searchData === "") return true;
//   // debugger
//  // return data.description === searchData;
  
// })
const itemsToDisplay = datas.filter((data) => {
  // debugger;
  console.log(data.description)
  console.log(searchData)
    return data.description.toLowerCase().includes(searchData.toLowerCase()) 
  
    
})

console.log(itemsToDisplay)






  return (
    <main>
      <ul className="cards">
        {itemsToDisplay.map((objs)=>( <ListingCard onDelete = {handleDelete}objs = {objs}/> ))
          }
       
        
        
      </ul>
    </main>
  );
}

export default ListingsContainer;
