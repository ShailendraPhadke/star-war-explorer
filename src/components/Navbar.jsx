import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import { useTheme } from '../context/myTheme';

const AppNavbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Navbar
      bg={theme === 'dark' ? 'dark' : 'light'}
      variant={theme === 'dark' ? 'dark' : 'light'}
      className="mb-4"
    >
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand className="d-flex align-items-center gap-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" 
            alt="Star Wars Logo"
            height="40"
          />
          <span>Star Wars Explorer</span>
        </Navbar.Brand>

        <Button
          variant={theme === 'dark' ? 'outline-light' : 'outline-dark'}
          onClick={toggleTheme}
        >
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </Button>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
