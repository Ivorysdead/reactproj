import React from 'react';
import logo from './logo.svg';
import './App.css';


const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
};

function AdminPanel() {
    return null;
}

function LoginForm() {
    return null;
}

export default function Profile() {
    let content;
    return (
        <>
            if (isLoggedIn) {
            content = <AdminPanel/>
        } else {
            content = <LoginForm/>
        }
            return (
            <div>
                {content}
            </div>
            )
        </>
    );
}

