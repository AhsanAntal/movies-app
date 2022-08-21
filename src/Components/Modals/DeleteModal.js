import React from "react";
import { Button, Modal, Form } from "react-bootstrap";

export default function DeleteModal({
  displayModal,
  handleCloseBtn,
  handleConfirmBtn,
  handleRememberBtn,
}) {
  return (
    <Modal
      show={displayModal.isVisible}
      onHide={handleCloseBtn}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Press "Confirm" to delete</p>

        <Form.Check
          id="remember-checkbox"
          label="Don't ask again"
          onChange={handleRememberBtn}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseBtn}>
          Cancel
        </Button>
        <Button variant="primary btn-danger" onClick={handleConfirmBtn}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
