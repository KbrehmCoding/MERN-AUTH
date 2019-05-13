import React from "react";
import { Row, Col } from 'react-flexbox-grid';

function loginbox(props) {
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

export default loginbox;