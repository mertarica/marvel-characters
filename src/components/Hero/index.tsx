import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ICharacter } from "../../types/character.type";

type Props = {
  character: ICharacter;
};

const Hero = ({ character }: Props) => {
  return (
    <Row>
      <Col lg={9} className="order-lg-1 order-2">
        <h1>{character.name}</h1>
        <p>{character.description}</p>
      </Col>
      <Col lg={3} className="order-lg-2 order-1">
        <img
          src={`${character.thumbnail?.path}.${character.thumbnail?.extension}`}
          alt="nothing to list"
          className="w-100"
        />
      </Col>
    </Row>
  );
};

export default Hero;
