import React from "react";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useParams } from "react-router-dom";
import Hero from "../../components/Hero";
import CharacterService from "../../services/character.service";
import { ICharacter, ICharacterDataWrapper } from "../../types/character.type";
import ComicListItem from "../../components/ComicListItem";
import { IComic } from "../../types/comic.type";

const DetailsPage: React.FC = () => {
  let params = useParams();
  const characterId = params.characterId ? params.characterId : "";
  const [character, setCharacter] = useState<ICharacter>();
  const [comics, setComics] = useState<Array<IComic>>();

  useEffect(() => {
    CharacterService.get(characterId)
      .then((response: any) => {
        return response.data;
      })
      .then((data: ICharacterDataWrapper) => {
        if (data.data?.results) {
          setCharacter(data.data.results[0]);
        }
      })
      .catch((e: Error) => {
        console.log(e);
      });

    CharacterService.getComicsByCharacter(characterId)
      .then((response: any) => {
        return response.data;
      })
      .then((data: ICharacterDataWrapper) => {
        console.log(data);
        if (data.data?.results) {
          setComics(data.data.results);
        }
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }, []);

  return (
    <Container className="d-flex justify-center c-details-page">
      {character && <Hero character={character} />}
      <h2>Comics</h2>
      {comics?.map((comic: IComic) => {
        return <ComicListItem key={comic.id} comic={comic} />;
      })}
      <Row className="align-self-center">
        <Col xs={12}>
          <Link to="/" className="c-details-page__back-link mb-5">
            Return to list
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailsPage;
