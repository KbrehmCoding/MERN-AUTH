import React from "react";
import { Row, Col } from 'react-flexbox-grid';

function loginbox(props) {
    return (
        <Col md={12}>
            <div className={"loginbox container"}>
                <Row>
                    <input type="text"></input>
                </Row>
                    <input type="password"></input>
                <Row>
                    <input type="email"></input>
                </Row>
            </div>
        </Col>
    );
}

export default loginbox;