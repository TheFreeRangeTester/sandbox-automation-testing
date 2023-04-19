import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Dropdown,
  DropdownButton,
  Modal,
  Table
} from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [modalShow, setModalShow] = React.useState(false);
  const [dynamicButtonId, setDynamicButtonId] = React.useState(uuidv4());
  const [hiddenElementVisible, setHiddenElementVisible] = React.useState(false);
  const [tableData, setTableData] = useState([]);
  const [staticTableData] = useState([
    { id: 1, name: 'Messi', age: 35, email: 'messi@example.com' },
    { id: 2, name: 'Ronaldo', age: 38, email: 'ronaldo@example.com' },
    { id: 3, name: 'Mbappe', age: 24, email: 'mbappe@example.com' },
  ]);

  const handleDynamicButtonClick = () => {
    setDynamicButtonId(uuidv4());

    setHiddenElementVisible(false);
    setTimeout(() => {
      setHiddenElementVisible(true);
    }, 3000); // El elemento oculto se mostrará después de 3 segundos
  };

  const generateRandomTableData = () => {
    const data = Array.from({ length: 5 }, () =>
      Array.from({ length: 5 }, () => ({
        letter: String.fromCharCode(65 + Math.floor(Math.random() * 26)),
        number: Math.floor(Math.random() * 10),
      })),
    );
    setTableData(data);
  };

  useEffect(() => {
    generateRandomTableData();
  }, []);

  return (
    <Container>
      <Row className="mb-5">
        <Col>
          <h1>Free Range Testers Sandbox 🤖</h1>
          <p>Visita nuestra página en <a href="https://www.freerangetesters.com" target="_blank" rel="noopener noreferrer">www.freerangetesters.com</a> para obtener más información.</p>
          <p>Utiliza esta página para practicar automation testing con herramientas como Selenium, Cypress, Playwright y Katalon Studio.</p>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h2>Botón con ID dinámico y elemento oculto 😮</h2>
          <Button id={dynamicButtonId} onClick={handleDynamicButtonClick}>
            Hacé click para generar un ID dinámico y mostrar el elemento oculto
          </Button>
          {hiddenElementVisible && (
            <p id="hidden-element" className="mt-3">
              OMG, aparezco después de 3 segundos de haber hecho click en el botón 👻.
            </p>
          )}
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <Form>
            <Form.Group controlId="formBasicText">
              <Form.Label className="h4">Un aburrido texto</Form.Label>
              <Form.Control type="text" placeholder="Ingresá texto" />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox" className="mt-3">
              <Form.Label className="h4">Checkboxes</Form.Label>
              {['Pizza 🍕', 'Hamburguesa 🍔', 'Pasta 🍝', 'Helado 🍧', 'Torta 🍰'].map((label, index) => (
                <Form.Check key={index} type="checkbox" id={`checkbox-${index}`} label={label} />
              ))}
            </Form.Group>

            <Form.Group className="mt-3">
              <Form.Label className="h4">Radio Buttons</Form.Label>
              <Form.Check
                type="radio"
                label="Si"
                name="formRadioOptions"
                id="formRadio1"
              />
              <Form.Check
                type="radio"
                label="No"
                name="formRadioOptions"
                id="formRadio2"
              />
            </Form.Group>

            <Form.Group controlId="formBasicSelect" className="mt-3">
              <Form.Label>
                <h3>Dropdown</h3>
              </Form.Label>
              <Form.Control as="select">
                <option>Seleccioná un deporte</option>
                <option>Fútbol</option>
                <option>Tennis</option>
                <option>Basketball</option>
              </Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <DropdownButton id="dropdown-basic-button" title="Día de la semana">
            <Dropdown.Item href="#/action-1">Lunes</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Martes</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Miércoles</Dropdown.Item>
            <Dropdown.Item href="#/action-1">Jueves</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Viernes</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Sábado</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Domingo</Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h3>Popup</h3>
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
                ¿Viste? ¡Apareció un Pop-up!
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setModalShow(false)}>Cerrar</Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <div id="shadow-root-example">
            <h2>Shadow DOM</h2>
            <div id="shadow-host"></div>
          </div>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h2>Tabla dinámica</h2>
          <Table striped bordered hover>
            <tbody>
              {tableData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>
                      {cell.letter}
                      {cell.number}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <h2>Tabla estática</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Edad</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {staticTableData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.email}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
