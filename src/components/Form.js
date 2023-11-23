import React, {useState} from "react";
import { format } from "date-fns";

export default function Form(props) {

  const [content, setContent] = useState('');
  const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'));

  function handleContentChange(event) {
    setContent(event.target.value);
  }

  function handleDateChange(event) {
    setDate(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (content.length == 0) {
      alert('Note content cannot be empty.');
    } else {
      props.addDaybook(content, date);
      setContent('');
      setDate('');
    }
  }

  return (
    <form className="daybook-form" onSubmit={handleSubmit}>
      <textarea 
        placeholder="Today I practiced react components ..." 
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
}