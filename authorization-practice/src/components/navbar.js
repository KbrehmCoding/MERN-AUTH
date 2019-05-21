import React, { Component } from 'react';

var ulStyle = {
    backgroundColor: 'lightpurple',
    listStyleType: 'none',
    margin: '0px, 100px, 0px, 20px',
    padding: '0',
};

var aStyle = {
    display: 'inline',
    float: 'right',
    width: '60px',
};

var navStyle = {
    backgroundColor: 'lightpurple',
    padding: '50px',
};
class NavBar extends Component {
    render() {
        return (
            <nav style={navStyle}>
                <ul style={ulStyle}>
                    <li><a style={aStyle}>Home</a></li>
                    <li><a style={aStyle}>About</a></li>
                </ul>
            </nav>
        );
    }
}

export default NavBar;
