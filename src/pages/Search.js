import { gql, useLazyQuery } from '@apollo/client';
import { useState } from 'react';

const GET_CHARACTER_LOCATIONS = gql`
  query GetCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

const Search = () => {
  const [name, setName] = useState('');

  const [getLocations, { loading, error, data, called }] = useLazyQuery(
    GET_CHARACTER_LOCATIONS,
    {
      variables: {
        name,
      },
    }
  );

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => getLocations(name)}>Search</button>
      {loading && <div>Loading...</div>}
      {error && <div>Something went wrong</div>}
      {data && (
        <ul>
          {data.characters.results.map((char) => {
            return <li key={char.location.name}>{char.location.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Search;
