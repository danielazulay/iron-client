import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import api from "../apis/api";

function DeleteAccount() {
 
  const history = useHistory();
  const { id } = useParams();
  const [show, setShow] = useState(true)

  function handleClose() {
    setShow(false)
    history.push("/"); 

  }
  async function handleDelete() {
    try {
     
      
      const response = await api.delete(`/deleteProduct/${id}`);
      history.push("/"); 
      setShow(false)
     

  

    

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