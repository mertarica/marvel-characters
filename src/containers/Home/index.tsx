import React from "react";
import Container from "react-bootstrap/Container";
import List from "../../components/List";

const HomePage: React.FC = () => {
  return (
    <Container className="d-flex justify-center c-home">
      <List />
    </Container>
  );
};

export default HomePage;
