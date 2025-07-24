import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const CharacterModal = ({ show, handleClose, character, theme }) => {
  if (!character) return null;

  const modalBg = theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark';

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton className={modalBg}>
        <Modal.Title>{character.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body className={modalBg}>
        <p><strong>Height:</strong> {character.height} cm</p>
        <p><strong>Mass:</strong> {character.mass} kg</p>
        <p><strong>Hair Color:</strong> {character.hair_color}</p>
        <p><strong>Skin Color:</strong> {character.skin_color}</p>
        <p><strong>Eye Color:</strong> {character.eye_color}</p>
        <p><strong>Birth Year:</strong> {character.birth_year}</p>
        <p><strong>Gender:</strong> {character.gender}</p>
      </Modal.Body>
      <Modal.Footer className={modalBg}>
        <Button
          variant={theme === 'dark' ? 'outline-light' : 'secondary'}
          onClick={handleClose}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CharacterModal;
