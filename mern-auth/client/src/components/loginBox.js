import { Row, Col } from 'react-flexbox-grid';
import React, { Component } from 'react';


class LoginBox extends Component {
    render() {
        return (
            <Col md={12}>
                <div className={"loginbox container"}>
                    <Row>
                        <input type="text" id="username"></input>
                    </Row>
                    <input type="password" id="userpassword"></input>
                    <Row>
                        <input type="email" id="useremail"></input>
                    </Row>
                </div>
            </Col>
        );
    }
}

export default LoginBox;