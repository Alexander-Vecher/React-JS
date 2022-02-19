import React from 'react';
import './App.css';
import Header from "./Header";
import Navbar from "./Navbar";
import Profile from "./Profile";

let App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <Profile/>

        </div>

    )
}

export default App;
