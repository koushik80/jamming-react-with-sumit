import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import User from "./components/User";

const App = () => {
  return (
      <div className="app">
      <ClickCounter />
      <HoverCounter />
      <User name={(isLoggedIn) =>(isLoggedIn ?  'Rajon' : 'Guest')} />
        </div>
    );
}

export default App;



