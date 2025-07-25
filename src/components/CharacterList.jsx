<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Card, Button, Spinner, Alert, Form, Row, Col, Container } from 'react-bootstrap';
import CharacterModal from './CharacterModal';
import { getPeople } from '../services/api';
import { useTheme } from '../context/myTheme';

const CharacterList = () => {
  const itemsPerPage = 10;
  const { theme } = useTheme();

  const [allCharacters, setAllCharacters] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchAll = async () => {
      setLoading(true);
      setError('');
      try {
        const data = await getPeople();
        setAllCharacters(data.data);
        setFilteredCharacters(data.data);
      } catch (err) {
        setError('Failed to load characters. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchTerm.trim() === '') {
        setFilteredCharacters(allCharacters);
        setPage(1);
      } else {
        const filtered = allCharacters.filter(char =>
          char.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCharacters(filtered);
        setPage(1);
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [searchTerm, allCharacters]);

  useEffect(() => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setCharacters(filteredCharacters.slice(startIndex, endIndex));
  }, [page, filteredCharacters]);

  const maxPage = Math.ceil(filteredCharacters.length / itemsPerPage);

  const handleCloseModal = () => setShowModal(false);
  const handleCardClick = (character) => {
    setSelectedCharacter(character);
    setShowModal(true);
  };

  return (
    <Container className={`my-4 ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
      <Form>
        <Form.Control
          type="search"
          placeholder="Search characters by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={theme === 'dark' ? 'bg-secondary text-light border-0' : ''}
        />
      </Form>

      {loading && (
        <div className="d-flex justify-content-center align-items-center my-4" style={{ height: '100px' }}>
          <Spinner animation="border" variant={theme === 'dark' ? 'light' : 'primary'} />
        </div>
      )}

      {error && (
        <Alert variant="danger" className="d-flex justify-content-between align-items-center my-4">
          <span>{error}</span>
          <Button
            variant="outline-danger"
            onClick={() => {
              setError('');
              setLoading(true);
              getPeople()
                .then(data => {
                  setAllCharacters(data.data);
                  setFilteredCharacters(data.data);
                })
                .catch(() => setError('Failed to load characters. Please try again.'))
                .finally(() => setLoading(false));
            }}
          >
            Retry
          </Button>
        </Alert>
      )}

      {!loading && !error && characters.length === 0 && (
        <Alert variant="info" className="my-4">No characters found.</Alert>
      )}

      <Row className="mt-4 g-4">
        {characters.map(character => (
          <Col key={character.url} xs={12} sm={6} md={4} lg={3}>
            <Card
              className={`h-100 shadow-sm border-0 rounded-4 bg-${theme === 'dark' ? 'secondary' : 'white'} text-${theme === 'dark' ? 'light' : 'dark'}`}
              style={{
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onClick={() => handleCardClick(character)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              }}
            >
              {/* Card Header */}
              <Card.Header className="text-center fw-bold fs-5 bg-transparent border-0">
                {character.name}
              </Card.Header>

              {/* Card Body */}
              <Card.Body className="d-flex flex-column text-center">
                <Card.Text>
                  <strong>Gender:</strong> {character.gender}<br />
                  <strong>Birth Year:</strong> {character.birth_year}
                </Card.Text>
              </Card.Body>

              {/* Card Footer */}
              <Card.Footer className="text-center bg-transparent border-0">
                <span className={`badge rounded-pill bg-${theme === 'dark' ? 'light' : 'dark'} text-${theme === 'dark' ? 'dark' : 'light'}`}>
                  View Details
                </span>
              </Card.Footer>
            </Card>
          </Col>

        ))}
      </Row>

      <div className="d-flex justify-content-center gap-3 mt-3">
        <Button
          variant="secondary"
          disabled={page === 1 || loading}
          onClick={() => setPage(page - 1)}
        >
          Previous
        </Button>

        <div className="align-self-center">
          Page {page} of {maxPage || 1}
        </div>

        <Button
          variant="primary"
          disabled={page === maxPage || loading}
          onClick={() => setPage(page + 1)}
        >
          Next
        </Button>
      </div>

      <CharacterModal
        show={showModal}
        handleClose={handleCloseModal}
        character={selectedCharacter}
        theme={theme}
      />
    </Container>
  );
};

export default CharacterList;
=======
import React, { useState, useEffect } from 'react';
import { Card, Button, Spinner, Alert, Form, Row, Col, Container } from 'react-bootstrap';
import CharacterModal from './CharacterModal';
import { getPeople } from '../services/api';
import { useTheme } from '../context/myTheme';

const CharacterList = () => {
  const itemsPerPage = 10;
  const { theme } = useTheme();

  const [allCharacters, setAllCharacters] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchAll = async () => {
      setLoading(true);
      setError('');
      try {
        const data = await getPeople();
        setAllCharacters(data.data);
        setFilteredCharacters(data.data);
      } catch (err) {
        setError('Failed to load characters. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchTerm.trim() === '') {
        setFilteredCharacters(allCharacters);
        setPage(1);
      } else {
        const filtered = allCharacters.filter(char =>
          char.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCharacters(filtered);
        setPage(1);
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [searchTerm, allCharacters]);

  useEffect(() => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setCharacters(filteredCharacters.slice(startIndex, endIndex));
  }, [page, filteredCharacters]);

  const maxPage = Math.ceil(filteredCharacters.length / itemsPerPage);

  const handleCloseModal = () => setShowModal(false);
  const handleCardClick = (character) => {
    setSelectedCharacter(character);
    setShowModal(true);
  };

  return (
    <Container className={`my-4 ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
      <Form>
        <Form.Control
          type="search"
          placeholder="Search characters by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={theme === 'dark' ? 'bg-secondary text-light border-0' : ''}
        />
      </Form>

      {loading && (
        <div className="d-flex justify-content-center align-items-center my-4" style={{ height: '100px' }}>
          <Spinner animation="border" variant={theme === 'dark' ? 'light' : 'primary'} />
        </div>
      )}

      {error && (
        <Alert variant="danger" className="d-flex justify-content-between align-items-center my-4">
          <span>{error}</span>
          <Button
            variant="outline-danger"
            onClick={() => {
              setError('');
              setLoading(true);
              getPeople()
                .then(data => {
                  setAllCharacters(data.data);
                  setFilteredCharacters(data.data);
                })
                .catch(() => setError('Failed to load characters. Please try again.'))
                .finally(() => setLoading(false));
            }}
          >
            Retry
          </Button>
        </Alert>
      )}

      {!loading && !error && characters.length === 0 && (
        <Alert variant="info" className="my-4">No characters found.</Alert>
      )}

      <Row className="mt-4 g-4">
        {characters.map(character => (
          <Col key={character.url} xs={12} sm={6} md={4} lg={3}>
            <Card
              className={`h-100 shadow-sm border-0 rounded-4 bg-${theme === 'dark' ? 'secondary' : 'white'} text-${theme === 'dark' ? 'light' : 'dark'}`}
              style={{
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onClick={() => handleCardClick(character)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              }}
            >
              {/* Card Header */}
              <Card.Header className="text-center fw-bold fs-5 bg-transparent border-0">
                {character.name}
              </Card.Header>

              {/* Card Body */}
              <Card.Body className="d-flex flex-column text-center">
                <Card.Text>
                  <strong>Gender:</strong> {character.gender}<br />
                  <strong>Birth Year:</strong> {character.birth_year}
                </Card.Text>
              </Card.Body>

              {/* Card Footer */}
              <Card.Footer className="text-center bg-transparent border-0">
                <span className={`badge rounded-pill bg-${theme === 'dark' ? 'light' : 'dark'} text-${theme === 'dark' ? 'dark' : 'light'}`}>
                  View Details
                </span>
              </Card.Footer>
            </Card>
          </Col>

        ))}
      </Row>

      <div className="d-flex justify-content-center gap-3 mt-3">
        <Button
          variant="secondary"
          disabled={page === 1 || loading}
          onClick={() => setPage(page - 1)}
        >
          Previous
        </Button>

        <div className="align-self-center">
          Page {page} of {maxPage || 1}
        </div>

        <Button
          variant="primary"
          disabled={page === maxPage || loading}
          onClick={() => setPage(page + 1)}
        >
          Next
        </Button>
      </div>

      <CharacterModal
        show={showModal}
        handleClose={handleCloseModal}
        character={selectedCharacter}
        theme={theme}
      />
    </Container>
  );
};

export default CharacterList;
>>>>>>> 25b25d232077d43fea1b67b4e65d70ea3a5087a1
