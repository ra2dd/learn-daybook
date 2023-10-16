import Form from "./components/Form";
import Daybook from "./components/Daybook"

function App(props) {

  const daybookList = props.daybookData?.map((dayItem) => (
    <Daybook 
      id={dayItem.id} 
      content={dayItem.content} 
      date={dayItem.date}
      key={dayItem.id} />
  ));

  return (
    <main>
      <Form />
      <section>
        {daybookList}
      </section>
    </main>
  );
}

export default App;
