import React from 'react';
import ClickCounter from './components/ClickCounter';
import Counter from './components/Counter';
import Section from './components/Section';

class App extends React.Component {
  state = {
    theme: 'dark'
  };
  render() {
    const { theme } = this.state;
    return (
          <div className="app">
              <Counter>
                  {(counter, incrementCount) => (
                      <ClickCounter count={counter} incrementCount={incrementCount} />
                  )}
             </Counter>
        <Provider value={}><Section theme={theme } /></Provider>
          </div>
       );
    }
}

export default App;



