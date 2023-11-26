import React, {useState} from "react";
import { parseISO, format } from "date-fns";
import { nanoid } from "nanoid";
import Form from "./Form";
import FormComplete from "./FormComplete";
import EditForm from "./EditForm";
import Daybook from "./Daybook";

export default function FormWithCards(props) {
  const [dayData, setDayData] = useState(props.daybookData)
  const [isEditing, setEditing] = useState(false)

  const daybookList = dayData.map((dayItem) => (
    <Daybook 
      id={dayItem.id} 
      content={dayItem.content} 
      date = {dayItem.date}
      formattedDate={format(parseISO(dayItem.date), 'LLL d')} 
      key={dayItem.id} 
      deleteDaybook={deleteDaybook} 
      toogleEditing={toogleEditing} />
  ));

  function addDaybook(content, date) {
    const newDaybook = { id: `daybook-${nanoid()}`, content, date };
    setDayData([...dayData, newDaybook]);
  }

  function editDaybook(id, content, date) {
    const withEditDaybooks = dayData;
    for (let daybook of withEditDaybooks) {
      if(daybook.id == id) {
        [daybook.id, daybook.content, daybook.date] = [id, content, date];
      }
    }
    setDayData(withEditDaybooks);
    setEditing(false);
    /*
    try {
      const test = dayData
      const withEditDaybooks = test.map((daybook) => {
        console.log(`daybook.id=${daybook.id} id=${id}`);

        if (id == daybook.id) {
          [daybook.id, daybook.content, daybook.date] = [id, content, date];
        }
      });
      setDayData(withEditDaybooks);
    } catch (error) {
      alert(JSON.stringify(error));
    }
    */
  }

  function deleteDaybook(id) {
    const remainingDaybooks = dayData.filter((daybook) => id != daybook.id);
    setDayData(remainingDaybooks);
  }

  async function toogleEditing(id, content, date) {
    if (setEditing != false) {
      await setEditing(false)
    }
    console.log(date)
    setEditing([id, content, date]);
  }

  function getForm() {
    if (isEditing != false) {
      return (
        <EditForm
        editDaybook={editDaybook}
        isEditing={isEditing} />
      )
    } else {
      return (
        <Form addDaybook={addDaybook} />
      )
    }
    // Add Form and Edit Form in same file
    <FormComplete
    addDaybook={addDaybook}
    editDaybook={editDaybook}
    isEditing={isEditing} />
  }

  return (
    <div>
      {getForm()}
      <section>
        {daybookList}
      </section>
    </div>
  )
} 