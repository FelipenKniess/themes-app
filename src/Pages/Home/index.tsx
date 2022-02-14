import React, { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import Miniature from '../../Components/Miniature';

type ThemeData = {
      id: string,
      name: string,
      backgroundColor: string,
      primaryTextColor: string,
      secondaryTextColor: string,
      accentColor: string
}

const Home:React.FC = () => {
  const [searchName, setSearchName] = useState('');
  const [themes, setThemes] = useState<ThemeData[]>([]);

  useEffect(() => {
    allThemes();
  }, []);

  const handleSearchTheme = () => {
    if (!searchName) {
      allThemes();
      return;
    }

    const themeFilter = themes.filter(({ name }) => name === searchName);
    setThemes(themeFilter);
  };

  const allThemes = () => {
    const themesLocal = localStorage.getItem('@themes-app/themes');
    if (themesLocal) {
      const allThemesLocal = JSON.parse(themesLocal);
      setThemes(allThemesLocal);
    }
  };

  return (
    <Container>
      <div className="demonstration">
        <span>Demonstration:</span>
        <h1>Hello my name is Felipe Niehues Kniess</h1>
        <p>
          I am graduated in information systems.
          I really like javascript and work specifically with vuejs and reactjs frameworks
        </p>
        <a href="https://github.com/FelipenKniess" rel="noreferrer" target="_blank">See my Github</a>
      </div>
      <div className="actions">
        <Link to="/create">Create theme</Link>
        <div>
          <label htmlFor="Name">
            Name:
            <input type="text" onChange={(data) => setSearchName(data.target.value)} />
          </label>
          <button type="button" onClick={handleSearchTheme}>
            <AiOutlineSearch size={20} />
          </button>
        </div>
      </div>
      <div className="content">
        <div className="themes">
          {themes.map((theme) => (
            <Miniature palette={theme} />
          ))}
        </div>
      </div>
    </Container>
  );
};
export default Home;
