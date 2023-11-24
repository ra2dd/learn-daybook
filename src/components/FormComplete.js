import React, { useState, useEffect } from "react";
import { format } from "date-fns";

export default function FormComplete(props) {

  const [content, setContent] = useState('');
  const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'));

  useEffect(() => {
    if (props.isEditing) {
      setContent(props.isEditing[1]);
      setDate(props.isEditing[2]);
    }
  }, [props.isEditing]);

  function handleContentChange(event) {
    setContent(event.target.value);
  }

  function handleDateChange(event) {
    setDate(event.target.value);
  }

  function handleSubmitNew(event) {
    event.preventDefault();
    if (content.length == 0) {
      alert('Note content cannot be empty.');
    } else {
      props.addDaybook(content, date);
      setContent('');
      setDate('');
    }
  }

  const viewTemplate = (
    <form className="daybook-form" onSubmit={handleSubmitNew}>
      <textarea 
        placeholder="Form Test" 
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
      <button type="submit">Add</button>
    </form>
  );

  
  function handleSubmitEdit(event) {
    event.preventDefault();
    props.editDaybook(props.isEditing[0], content, date);
    setContent('');
    setDate('');
  }

  const editTemplate = (
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
  )

  return props.isEditing ? editTemplate : viewTemplate;
}