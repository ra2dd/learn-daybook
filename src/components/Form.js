import React, {useState} from "react";

export default function Form(props) {

  const [content, setContent] = useState('');

  function handleContentChange(event) {
    setContent(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (content.length == 0) {
      alert('Note content cannot be empty.');
    } else {
      props.addDaybook(content);
      setContent('');
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
      <button type="submit">Add</button>
    </form>
  )
}