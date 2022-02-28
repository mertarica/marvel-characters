import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IComic } from "../../types/comic.type";

type Props = {
  comic: IComic;
};

const ComicListItem = ({ comic }: Props) => {
  return (
    <Row className="c-comic-list-item">
      <Col lg={3}>
        <img
          src={`${comic.thumbnail?.path}.${comic.thumbnail?.extension}`}
          alt={`${comic.title} cover`}
          className="w-100"
        />
      </Col>
      <Col lg={9}>
        <h3 className="c-comic-list-item__header">{comic.title}</h3>
        <p className="c-comic-list-item__description">{comic.description}</p>
      </Col>
    </Row>
  );
};

export default ComicListItem;
