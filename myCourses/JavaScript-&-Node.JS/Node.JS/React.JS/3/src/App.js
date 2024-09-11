import "./App.css";
import "./components/TemperatureConverter.css";
import "./components/ToDoList.css";
import TemperatureConverter from "./components/TemperatureConverter";
import TemperatureConverterMono from "./components/TemperatureConverterMono";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="Tasks">
      <div className="FirstTask">
        <TemperatureConverter />
        <TemperatureConverterMono />
      </div>
      <div className="SecondTask">
        <ToDoList />
      </div>
    </div>
  );
}

export default App;
