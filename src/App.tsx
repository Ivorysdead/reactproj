import React from 'react';
import logo from './logo.svg';
import './App.css';


function MyButton() {
    return (
        <button>
            I'm a button
        </button>
    );
}

function MyApp() {
    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton />

        </div>
    );
}
export default function AboutPage() {
    return (
        <>
            <h1>About</h1>
            <p>Hello there.<br />How do you do?</p>
        </>
    );
}
