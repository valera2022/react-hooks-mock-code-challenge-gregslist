import React,{useState} from "react";





function ListingCard({objs,onDelete}) {
  
  const [isOff,setState]= useState(false)
 
    // console.log(objs)

  let {id,description,image,location}= objs
  // console.log(objectData)

  function handleClick(){
         setState(!isOff) 
         }

function handleDeleteButton(){
  onDelete(objs)
}



  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {isOff ? (
          <button className="emoji-button favorite active" onClick={handleClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteButton}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
