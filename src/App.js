import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import User from "./components/User";

const App = () => {
  return (
      <div className="app">
      <ClickCounter />
      <HoverCounter />
      <User name="Rajon" />
        </div>
    );
}

export default App;



