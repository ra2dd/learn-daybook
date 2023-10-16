import React from "react";

export default function Daybook(props) {
  return (  
    <div className="daybook" id={props.id}>
      <p>{props.content}</p>
      <p>{props.date}</p>
    </div>
  )
}