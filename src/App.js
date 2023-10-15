function App(props) {


  return (
    <main>
      <form className="daybook-form">
        <textarea 
          placeholder="Today I practiced react components ..." 
          autocomplete="off"
          rows={6}
          cols={40}
        />
        <button type="submit">Add</button>
      </form>

      <section>
        <div className="daybook">
          <p>I created index page</p>
          <p>16 October 2023</p>
        </div>
      </section>
    </main>
  );
}

export default App;
