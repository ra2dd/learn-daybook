import React from "react";
import FormWithCards from "./components/FormWithCards";

function App(props) {

  const DATA = [
    { id: "daybook-0", content: "I read about IT", date: "2023-11-11" },
    { id: "daybook-1", content: "I made components", date: "2023-11-12" },
    { id: "daybook-2", content: "I read about management", date: "2023-11-13" },
  ]

  return (
    <main>
      <FormWithCards daybookData={DATA} />
    </main>
  );
}

export default App;
