import React from 'react';


class Counter extends React.Component {
    state = {
            count: 0,
    }
    incrementCount = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }));
    };

    render() {
        const { render } = this.props;
        const {counter} = this.state;
        return render(counter, this.incrementCount);
    }

}


export default Counter;