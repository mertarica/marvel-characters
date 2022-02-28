import React from "react";
import Container from "react-bootstrap/esm/Container";

const Loader: React.FC = () => {
  return (
    <Container className="c-load-spinner">
      <div className="c-load-spinner__ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Container>
  );
};

export default Loader;
