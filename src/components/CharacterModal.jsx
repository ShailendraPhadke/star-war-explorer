import React from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import { FaUserAstronaut } from 'react-icons/fa';

const CharacterModal = ({ show, handleClose, character, theme }) => {
  if (!character) return null;

  const isDark = theme === 'dark';
  const modalBg = isDark ? 'bg-dark text-light' : 'bg-light text-dark';

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="md"
      dialogClassName="rounded-modal"
    >
      <Modal.Header
        closeButton
        className={`${modalBg} border-0`}
        style={{
          background: isDark
            ? 'linear-gradient(to right, #1a1a1a, #333)'
            : 'linear-gradient(to right, #f8f9fa, #e2e6ea)',
        }}
      >
        <Modal.Title className="d-flex align-items-center gap-3">
          <div
            className="d-flex align-items-center justify-content-center rounded-circle"
            style={{
              width: 50,
              height: 50,
              background: isDark ? '#444' : '#dee2e6',
              boxShadow: isDark
                ? '0 0 8px rgba(255,255,255,0.3)'
                : '0 0 8px rgba(0,0,0,0.1)',
            }}
          >
            <FaUserAstronaut size={24} />
          </div>
          <span style={{ fontWeight: '600', fontSize: '1.3rem' }}>{character.name}</span>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className={`${modalBg} px-4 py-3`}>
        <div className="mb-3 text-muted fst-italic">Character Details</div>
        {[
          { label: 'Height', value: `${character.height} cm` },
          { label: 'Mass', value: `${character.mass} kg` },
          { label: 'Hair Color', value: character.hair_color },
          { label: 'Skin Color', value: character.skin_color },
          { label: 'Eye Color', value: character.eye_color },
          { label: 'Birth Year', value: character.birth_year },
          { label: 'Gender', value: character.gender },
        ].map(({ label, value }, idx) => (
          <Row key={idx} className="mb-2">
            <Col xs={6}>
              <strong>{label}:</strong>
            </Col>
            <Col xs={6}>{value}</Col>
          </Row>
        ))}
      </Modal.Body>

      <Modal.Footer className={`${modalBg} border-0`}>
        <Button
          variant={isDark ? 'outline-light' : 'outline-dark'}
          onClick={handleClose}
          className="px-4"
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CharacterModal;
