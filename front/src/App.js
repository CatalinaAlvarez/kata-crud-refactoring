import { StoreProvider } from "./components/common/Store";
import Form from "./Components/Form";
import List from "./Components/List";

function App() {
  return <StoreProvider>
    <h3>To-Do List</h3>
    <Form />
    <List />
  </StoreProvider>
}

export default App;
