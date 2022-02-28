import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="c-footer" data-testid="footer">
      <Container fluid>
        <Row>
          <Col xs={12}>
            <span className="c-footer__brand">© {currentYear}</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
