import React, {useState} from "react";
import { format } from "date-fns";

export default function Form(props) {

  const [content, setContent] = useState(props.isEditing[1]);
  const [date, setDate] = useState(props.isEditing[2]);

  function handleContentChange(event) {
    setContent(event.target.value);
  }

  function handleDateChange(event) {
    setDate(event.target.value);
  }
  
  function handleSubmitEdit(event) {
    event.preventDefault();
    props.editDaybook(props.isEditing[0], content, date);
    setContent('');
    setDate('');
  }

  return (
    <form className="daybook-form" onSubmit={handleSubmitEdit}>
    <textarea 
      autoComplete="off"
      rows={6}
      cols={40}
      value={content}
      onChange={handleContentChange}
    />
    <input 
      type="date"
      onChange={handleDateChange}
      value={date}
     />
    <button 
      type="button"
      >Cancel</button>
    <button type="submit">Add</button>
  </form>
  );
}