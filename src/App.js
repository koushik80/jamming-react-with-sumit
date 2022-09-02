import React from 'react';
import MyComponent from './components/MyComponentClass';

export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                <MyComponent />
            </div>
        );
    }
}