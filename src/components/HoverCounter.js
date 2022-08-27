import React from 'react';

class HoverCounter extends React.Component {
  render() {
      const {count, incrementCount} = this.props;
        return (
          <div>
            <h1
              onMouseOver={incrementCount}>
              Hovered {count} times
            </h1>
          </div>
        );
    }
}


export default HoverCounter;
