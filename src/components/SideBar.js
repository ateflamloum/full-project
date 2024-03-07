import React from 'react';
import '../App.css'; // Make sure you have your CSS file imported correctly


function Sidebar() {
    return (
        <div className="sidebar">
            <h4>template categories</h4>
            <ul>
                <li><a href="#navbar">navbar</a></li>
                <li><a href="#sidebar">sidebar</a></li>
                <li><a href="#card">card</a></li>
                <li><a href="#table">table</a></li>
                <li><a href="#portfolio">portfolio</a></li>
                <li><a href="#comercial webpage">comercial webpage</a></li>
                <li><a href="#mixed content page">mixed content page</a></li>
            </ul>
            
        </div>
    );
}

export default Sidebar;
