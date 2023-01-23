import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

import {Card, Form, Alert} from 'react-bootstrap'

import Button from './Components/Boton';

function App() {

  /* Variables de estado */
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [alertStatus, setAlertStatus] =useState(0); 

  const dataSubmit = (e) =>{
    e.preventDefault();
    if(name === 'ADL' && pass === '252525'){      
      setAlertStatus(1)     
    } else{      
      setAlertStatus(2)  
    }
  };
  return (
    <div className="App"> 
      <div className="login"> 
        <Card style={{ padding: '15px',
                          margin: '5px',              
                          width: '60%',
                          height: '100%',
                          }}>
          <h2 class="text-center">Desafío Estado de los Componentes y Eventos</h2>           
          <Form onSubmit={dataSubmit}>
            {alertStatus === 1  &&
            <Alert variant='success'>
            Sesión iniciada correctamente
            </Alert>} 
            {alertStatus === 2  &&
            <Alert variant='danger'>
            Contraseña Incorrecta
            </Alert>}          
            <Form.Group className="mb-3" >
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setName(e.target.value)}              
                  placeholder="Nombre"
                  defaultValue={name}
                  id="name"
                  />              
            </Form.Group>  
            <Form.Group className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  onChange={(e) => setPass(e.target.value)}
                  placeholder="Contraseña"
                  defaultValue={pass}
                  id="pass"
                  />                
            </Form.Group>
            {name != '' && pass != '' && <Button text="Iniciar Sesión"/>}    
          </Form>
        </Card>
      </div>      
    </div>
  );
}

export default App;