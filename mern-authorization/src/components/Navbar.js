import React, { Component } from 'react';

var navStyle= {
        listStyleType: 'none',
        margin: '0',
        padding: '0',
};

class NavBar extends Component {
    render() {
        return (
            <nav>
                <ul style={navStyle}>
                    <li><a href="default.asp">Home</a></li>
                    <li><a href="about.asp">About</a></li>
                </ul>
            </nav>
        );
    }
}

export default NavBar;