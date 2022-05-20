import "./styles.css";
import { Tabs } from "./components/Tabs";

const tabs = [
  {
    name: "tab 1",
    content: "Texto do primeiro tab"
  },
  {
    name: "tab 2",
    content: "Texto do segundo tab"
  },
  {
    name: "tab 3",
    content: "Texto do terceiro tab"
  },
  {
    name: "tab 4",
    content: "Texto do quarto tab"
  }
];

function App() {
  return (
    <div className="App">
      <Tabs tabs={tabs} />
    </div>
  );
}

export default App;
