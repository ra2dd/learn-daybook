import React, {useState} from "react";
import Form from "./components/Form";
import Daybook from "./components/Daybook"

function App(props) {

  const [dayData, setDayData] = useState(props.daybookData)

  const daybookList = dayData.map((dayItem) => (
    <Daybook 
      id={dayItem.id} 
      content={dayItem.content} 
      date={dayItem.date}
      key={dayItem.id} />
  ));

  function addDaybook(content) {
    const date = new Date()
    alert(content);
  }

  return (
    <main>
      <Form addDaybook={addDaybook} />
      <section>
        {daybookList}
      </section>
    </main>
  );
}

export default App;
