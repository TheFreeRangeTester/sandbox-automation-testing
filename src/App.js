import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Dropdown,
  DropdownButton,
  Modal
} from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [modalShow, setModalShow] = React.useState(false);
  const [dynamicButtonId, setDynamicButtonId] = React.useState(uuidv4());
  const [hiddenElementVisible, setHiddenElementVisible] = React.useState(false);

  const handleDynamicButtonClick = () => {
    setDynamicButtonId(uuidv4());

    setHiddenElementVisible(false);
    setTimeout(() => {
      setHiddenElementVisible(true);
    }, 3000); // El elemento oculto se mostrará después de 3 segundos
  };



  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h1>Free Range Testers Sandbox</h1>
          <p>Visita nuestra página en <a href="https://www.freerangetesters.com" target="_blank" rel="noopener noreferrer">www.freerangetesters.com</a> para obtener más información.</p>
          <p>Utiliza esta página para practicar automation testing con herramientas como Selenium, Cypress, Playwright y Katalon Studio.</p>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <h2>Botón con ID dinámico y elemento oculto</h2>
          <Button id={dynamicButtonId} onClick={handleDynamicButtonClick}>
            Clic para generar ID dinámico y mostrar elemento oculto
          </Button>
          {hiddenElementVisible && (
            <p id="hidden-element" className="mt-3">
              Este es un elemento oculto que se muestra después de 3 segundos.
            </p>
          )}
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <Form>
            <Form.Group controlId="formBasicText">
              <Form.Label>Texto</Form.Label>
              <Form.Control type="text" placeholder="Ingresa texto" />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Checkbox" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Radio buttons</Form.Label>
              <Form.Check
                type="radio"
                label="Opción 1"
                name="formRadioOptions"
                id="formRadio1"
              />
              <Form.Check
                type="radio"
                label="Opción 2"
                name="formRadioOptions"
                id="formRadio2"
              />
            </Form.Group>

            <Form.Group controlId="formBasicSelect">
              <Form.Label>Dropdown</Form.Label>
              <Form.Control as="select">
                <option>Selecciona una opción</option>
                <option>Opción 1</option>
                <option>Opción 2</option>
                <option>Opción 3</option>
              </Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <DropdownButton id="dropdown-basic-button" title="Dropdown">
            <Dropdown.Item href="#/action-1">Acción 1</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Acción 2</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Acción 3</Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Mostrar popup
          </Button>

          <Modal
            show={modalShow}
            onHide={() => setModalShow(false)}
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Popup de ejemplo
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                Este es un popup de ejemplo para practicar automation testing.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setModalShow(false)}>Cerrar</Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <div id="shadow-root-example">
            <h2>Shadow DOM</h2>
            <div id="shadow-host"></div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
