import "./App.css";
import { TodosView } from "./components/TodosView";

function App() {
  return (
    <div className="App">
      <div className="background" />
      <TodosView />
      <div className="footer" />
    </div>
  );
}

export default App;
