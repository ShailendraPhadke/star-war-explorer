import React from 'react';
import CharacterList from './components/CharacterList';
import { Button, Container } from 'react-bootstrap';
import { useTheme } from './context/myTheme';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={theme === 'dark' ? 'bg-dark text-light min-vh-100' : 'bg-light text-dark min-vh-100'}>
      <Container className="py-3">
        <div className="d-flex justify-content-end mb-3">
          <Button variant={theme === 'dark' ? 'light' : 'dark'} onClick={toggleTheme}>
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </Button>
        </div>

        <CharacterList />
      </Container>
    </div>
  );
};

export default App;
