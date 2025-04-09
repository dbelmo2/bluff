import React from 'react';
import './css/GameModeMenu.css';
import { NavLink } from 'react-router';

const GameModeMenu: React.FC = () => {
    return (
        <div className="container">
            <h1 className="title">Choose a Mode</h1>
            <div className="button-container">
                <NavLink to='/practice'>
                    <button  className="mode-button">Practice</button>
                </NavLink>
                <NavLink to='/practice'>
                    <button disabled className="mode-button">Play vs Friend </button>
                </NavLink>
                <NavLink to='/practice'>
                    <button disabled className="mode-button">Online</button>
                </NavLink>

            </div>
        </div>
    );
};

export default GameModeMenu;