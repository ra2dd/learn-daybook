import React, {useState} from "react";
import { parseISO, format } from "date-fns";
import { nanoid } from "nanoid";
import Form from "./components/Form";
import Daybook from "./components/Daybook"

function App(props) {

  const [dayData, setDayData] = useState(props.daybookData)

  const daybookList = dayData.map((dayItem) => (
    <Daybook 
      id={dayItem.id} 
      content={dayItem.content} 
      date={format(parseISO(dayItem.date), 'LLL d')}
      key={dayItem.id} />
  ));

  function addDaybook(content) {
    const newDaybook = { id: `daybook-${nanoid()}`, content, date: format(new Date(), 'yyyy-MM-dd') };
    setDayData([...dayData, newDaybook]);
    console.log(dayData)
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
