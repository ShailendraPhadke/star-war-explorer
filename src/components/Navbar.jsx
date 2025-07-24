import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import { useTheme } from '../context/myTheme';

const AppNavbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Navbar bg={theme === 'dark' ? 'dark' : 'light'} variant={theme === 'dark' ? 'dark' : 'light'} className="mb-4">
      <Container>
        <Navbar.Brand>Star Wars Explorer</Navbar.Brand>
        <Button variant={theme === 'dark' ? 'outline-light' : 'outline-dark'} onClick={toggleTheme}>
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </Button>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
