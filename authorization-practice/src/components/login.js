import { Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';

var inputStyle = {
    margin: '50px, 0px, 50px, 0px',
    padding: '0',
    display: '',
};

var loginBoxStyle = {
    border: '3px solid',
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
                <div className={"loginbox container"} style={loginBoxStyle}>
                    <Row>
                        <label style={inputStyle}>Username</label>
                    </Row>
                    <Row>
                        <input style={inputStyle} type="text" id="username" required></input>
                    </Row>
                    <Row>
                        <label style={inputStyle}>Password</label>
                    </Row>
                    <Row>
                        <input style={inputStyle} type="password" id="userpassword" required></input>
                    </Row>
                    <Row>
                        <label style={inputStyle}>Email Address</label>
                    </Row>
                    <Row>
                        <input style={inputStyle} type="email" id="useremail" required></input>
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


/* now that the front end is running and looking ok I can start on the authentication part
store the user info in a database
compare user info given to user info in database
*/