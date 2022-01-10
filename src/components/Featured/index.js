import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Featured = () => {
    return (
        <Container>
            <Row>
                <Col sm={6} md={4} lg={10}>This is the first column, let's just call it a day...</Col>
                <Col sm={6}>This is the second column, let's not call it a day...</Col>
                <Col sm={3}>This is the third column, let's try to call it a day...</Col>
            </Row>
        </Container>
    )
}

export default Featured;