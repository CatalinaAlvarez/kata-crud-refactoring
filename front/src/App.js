import React from "react";
import { StoreProvider } from "./Components/Store";
import Form from "./Components/Todo/Form";
import List from "./Components/List";

function App() {
  return <StoreProvider>
    <h3>To-Do List</h3>
    <Form />
    <List />
  </StoreProvider>
}

export default App;
