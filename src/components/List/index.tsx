import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListItem from "../ListItem";
import NothingImage from "../../assets/images/nothing.jpeg";
import CharacterService from "../../services/character.service";
import { ICharacter, ICharacterDataWrapper } from "../../types/character.type";
import LoadSpinner from "../LoadSpinner";

const List = () => {
  const [characterList, setCharacterList] = useState<Array<ICharacter>>([]);
  const [scrollBottom, setScrollBottom] = useState(false);
  const [loaderVisible, setLoaderVisible] = useState(false);

  const getCharacters = () => {
    setLoaderVisible(true);
    CharacterService.getAll(characterList.length)
      .then((response: any) => {
        return response.data;
      })
      .then((data: ICharacterDataWrapper) => {
        if (data.data?.results) {
          setScrollBottom(false);
          setCharacterList(characterList.concat(data.data?.results));
        }
      })
      .catch((e: Error) => {
        console.log(e);
      })
      .finally(() => {
        setLoaderVisible(false);
      });
  };

  useEffect(() => {
    getCharacters();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight &&
        !loaderVisible
      ) {
        setScrollBottom(true);
        getCharacters();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      setScrollBottom(false);
    };
  }, [scrollBottom, loaderVisible]);

  return (
    <Container className="c-list" data-testid="link-list">
      {loaderVisible && <LoadSpinner />}
      <Row>
        {characterList?.length > 0 ? (
          characterList?.map((character: ICharacter) => (
            <Col lg={3} key={character.id}>
              <ListItem character={character} />
            </Col>
          ))
        ) : (
          <div className="d-flex justify-content-center">
            <img
              src={NothingImage}
              alt="nothing to list"
              className="w-10 mt-5 justify-center"
            />
          </div>
        )}
      </Row>
    </Container>
  );
};

export default List;
