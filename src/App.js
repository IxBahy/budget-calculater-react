import React, { useContext } from "react";
import { Alert } from "./components/Alert";
import { Form } from "./components/Form";
import { List } from "./components/List";
import { FormContext } from "./FormContext";
import "./css/App.css"


function App() {
  const context = useContext(FormContext);

  return (
    <>
      {context.alert.show && <Alert type={context.alert.type} text={context.alert.text} />}
      <Alert />
      <h1>budget calculator</h1>
      <main className="App">
        <Form />
        <List />
      </main>
      <h1>
        total sepnding : <span className="total"> ${
          context.expenses.reduce((acc, curr) => {
            return acc += parseInt(curr.amount)
          }, 0)
        } </span>
      </h1>
      {/* end of app main */}

    </>
  );
}

export default App;
