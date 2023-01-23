# Desafío Estado de los Componentes y Eventos

El proyecto puede ser visualizado en [https://dtellogaete.github.io/react-states/](https://dtellogaete.github.io/react-states/).

## Variable de estado

```
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [alertStatus, setAlertStatus] =useState(0); 
```
`name`: Almacena el nombre del usuario, el estado inicial es ''.
`pass`: Almacena la password del usuario, el estado inicial es ''.
`alertStatus`: Variable de estado de las alertas, el estado inicial es 0. Si se ingresa la password correctamente es 1, en caso contrario es 2.

Es necesario que la variable `name` y `pass` no estén vacías para visualizar el botón.

## Función dataSubmit()

```
const dataSubmit = (e) =>{
    e.preventDefault();
    if(name === 'ADL' && pass === '252525'){      
      setAlertStatus(1)     
    } else{      
      setAlertStatus(2)  
    }
  };
```
La función `dataSubmit` valida al usuario de nombre *ADL* y password *252525*.