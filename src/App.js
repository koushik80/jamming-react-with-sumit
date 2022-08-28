import ClickCounter from "./components/ClickCounter";
import Counter from "./components/Counter";
import Section from "./components/Section";

const App = () => {
  return (
    <div className="app">
      <Counter>
        {(counter, incrementCount) => (
           <ClickCounter count={counter} incrementCount={incrementCount} />
        )}
      </Counter>
      <Section />
    </div>
    );
}

export default App;



