import { Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';

var inputStyle = {
    margin: '50px, 0px, 50px, 0px',
    padding: '0',
    display: '',
};

var loginBoxStyle = {
    border: 'solid',
    padding: '20px',
};

class LoginBox extends Component {
    state = {
        userpassword: '',
        username: '',
        useremail: '',
    };

    onChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value });
    };
    render() {
        return (
            <Col md={12}>
                <div className={"loginbox container"} stye={loginBoxStyle}>
                    <Row>
                        <label style={inputStyle}>Username</label>
                    </Row>
                    <Row>
                        <input style={inputStyle} type="text" id="username"></input>
                    </Row>
                    <Row>
                        <label style={inputStyle}>Password</label>
                    </Row>
                    <Row>
                        <input style={inputStyle} type="password" id="userpassword"></input>
                    </Row>
                    <Row>
                        <label style={inputStyle}>Email Address</label>
                    </Row>
                    <Row>
                        <input style={inputStyle} type="email" id="useremail"></input>
                    </Row>
                    <Row>
                        <button type="submit">Submit</button>
                    </Row>
                </div>
            </Col>
        );
    }
}

export default LoginBox;
