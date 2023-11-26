import React from "react";

export default function Daybook(props) {
  return (  
    <div className="daybook" id={props.id}>
      <p>{props.content}</p>
      <p>{props.formattedDate}</p>
      <button
        type="button"
        onClick={() => props.toogleEditing(props.id, props.content, props.date)}
      >Edit</button>
      <button
        type="button"
        onClick={() => props.deleteDaybook(props.id)}
      >Delete</button>
    </div>
  );
}