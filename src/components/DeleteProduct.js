import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import api from "../apis/api";

function DeleteAccount() {
  const [show] = useState(true);
  const history = useHistory();
  const { id } = useParams();

  function handleClose() {
    
    history.goBack();
  }

  async function handleDelete() {
    try {
     await api.delete(`/deleteProduct/${id}`);

      history.push("/");
    } catch (err) {
      console.error(err.response.data);
    }
  }
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Excluir produto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Tem certeza que deseja excluir esse produto?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Excluir
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteAccount;