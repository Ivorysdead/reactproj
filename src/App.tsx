import React from 'react';
import logo from './logo.svg';
import './App.css';


import { useState } from 'react';

export default function MyApp() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Counters that update together</h1>
            <MyButton count={count} onClick={handleClick} />
            <MyButton count={count} onClick={handleClick} />
        </div>
    );
}

class MyButton extends React.Component<{ count: any, onClick: any }> {
    render() {
        let {count, onClick} = this.props;
        return (
            <button onClick={onClick}>
                Clicked {count} times
            </button>
        );
    }
}

