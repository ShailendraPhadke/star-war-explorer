import React from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import { FaUserAstronaut } from 'react-icons/fa';

const CharacterModal = ({ show, handleClose, character, theme }) => {
  if (!character) return null;

  const isDark = theme === 'dark';
  const modalBg = isDark ? 'bg-dark text-light' : 'bg-light text-dark';
  const footerBg = isDark ? 'bg-secondary-subtle' : 'bg-light';

  return (
    <Modal show={show} onHide={handleClose} centered size="md" dialogClassName="rounded-modal">
      <Modal.Header closeButton className={`${modalBg} border-0`}>
        <Modal.Title className="d-flex align-items-center gap-2">
          <FaUserAstronaut size={24} />
          {character.name}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className={`${modalBg}`}>
        <Row className="mb-2">
          <Col xs={6}><strong>Height:</strong></Col>
          <Col xs={6}>{character.height} cm</Col>
        </Row>
        <Row className="mb-2">
          <Col xs={6}><strong>Mass:</strong></Col>
          <Col xs={6}>{character.mass} kg</Col>
        </Row>
        <Row className="mb-2">
          <Col xs={6}><strong>Hair Color:</strong></Col>
          <Col xs={6}>{character.hair_color}</Col>
        </Row>
        <Row className="mb-2">
          <Col xs={6}><strong>Skin Color:</strong></Col>
          <Col xs={6}>{character.skin_color}</Col>
        </Row>
        <Row className="mb-2">
          <Col xs={6}><strong>Eye Color:</strong></Col>
          <Col xs={6}>{character.eye_color}</Col>
        </Row>
        <Row className="mb-2">
          <Col xs={6}><strong>Birth Year:</strong></Col>
          <Col xs={6}>{character.birth_year}</Col>
        </Row>
        <Row>
          <Col xs={6}><strong>Gender:</strong></Col>
          <Col xs={6}>{character.gender}</Col>
        </Row>
      </Modal.Body>

      <Modal.Footer className={`${modalBg} border-top ${footerBg}`}>
        <Button
          variant={isDark ? 'outline-light' : 'secondary'}
          onClick={handleClose}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CharacterModal;
