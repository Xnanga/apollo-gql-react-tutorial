import './CharacterList.css';
import useCharacters from '../hooks/useCharacters';
import { Link } from 'react-router-dom';

const CharactersList = () => {
  const { error, data, loading } = useCharacters();

  if (loading) return <div>"Loading..."</div>;
  if (error) return <div>"Something went wrong"</div>;

  return (
    <div className="CharacterList">
      {data?.characters.results.map((character) => {
        return (
          <Link key={character.id} to={`/${character.id}`}>
            <img alt="" src={character.image} />
            <h2>{character.name}</h2>
          </Link>
        );
      })}
    </div>
  );
};

export default CharactersList;
