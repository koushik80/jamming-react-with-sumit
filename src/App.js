import React from 'react';
import ClickCounter from "./components/ClickCounter";
import Counter from "./components/Counter";
import Section from "./components/Section";

class App extends React.Component {
  render() {
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
}

export default App;



