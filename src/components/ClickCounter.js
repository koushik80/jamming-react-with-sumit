import React from 'react';

class ClickCounter extends React.Component {
    render() {
        return (
          <div>
            <button
              type="button"
              onClick={this.incrementCount}>
              Clicked {count} times
            </button>
          </div>
        );
    }
}


export default ClickCounter;
