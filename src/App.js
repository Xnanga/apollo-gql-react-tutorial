import './App.css';
import CharactersList from './pages/CharactersList';
import Character from './pages/Character';
import Search from './pages/Search';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<CharactersList />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/:id" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
