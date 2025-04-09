import React from 'react';
import './css/MainMenu.css';
import { NavLink } from 'react-router';

const MainMenu: React.FC = () => {
    return (
        <div className="main-menu">
            <h1>BLUFF</h1>
            <div>
                <NavLink to='/modes'>
                    <button disabled className="main-menu-button">Login</button>
                </NavLink>
            </div>
            <div>
                <NavLink to='/modes' className="main-menu-button" >
                    <button className="main-menu-button">Play as guest</button>
                </NavLink>
            </div>

        </div>
    );
};

export default MainMenu;