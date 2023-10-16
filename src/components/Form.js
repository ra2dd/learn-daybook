import React from "react";

export default function Form() {
  return (
    <form className="daybook-form">
      <textarea 
        placeholder="Today I practiced react components ..." 
        autoComplete="off"
        rows={6}
        cols={40}
      />
      <button type="submit">Add</button>
    </form>
  )
}