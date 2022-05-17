import "./App.css";
import { Todos } from "./components/Todos";

function App() {
  return (
    <div className="App">
      <div className="background" />
      <Todos />
      <div className="footer" />
    </div>
  );
}

export default App;
