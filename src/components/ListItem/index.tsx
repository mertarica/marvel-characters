import { ICharacter } from "../../types/character.type";
import { Link } from "react-router-dom";

type Props = {
  character: ICharacter;
};

const ListItem = ({ character }: Props) => {
  return (
    <div className="c-list-item" data-testid="list-item">
      <Link to={`/details/${character.id}`}>
        <div className="c-list-item__image">
          <img
            src={`${character.thumbnail?.path}.${character.thumbnail?.extension}`}
            alt={character.name}
            className="w-100"
          />
        </div>
        <div className="c-list-item__info">
          <h5 className="c-list-item__info-header">{character.name}</h5>
        </div>
      </Link>
    </div>
  );
};

export default ListItem;
