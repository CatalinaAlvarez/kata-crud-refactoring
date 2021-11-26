import React from "react";
import { StoreProvider } from "./Components/Store";
import TaskForm from "./Components/Task/TaskForm";
import TaskList from "./Components/Task/TaskList";

function App() {
  return <StoreProvider>
    <h3>To-Do List</h3>
    <TaskForm />
		<TaskList />
  </StoreProvider>
}

export default App;
