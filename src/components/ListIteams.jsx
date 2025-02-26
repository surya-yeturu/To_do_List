import React, { useState } from "react";

function ListIteams(props) {
  
  return (
    <div onClick={()=>{
      {props.clicked(props.id)}
    }
    }>
      <li >{props.listiteam}</li>
    </div>
  );
}

export default ListIteams;
