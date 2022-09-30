import './Login.css';
import Input from '../input/Input';
import Button from '../button/Button';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate, Navigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  
  const submitHandler = e => {
    e.preventDefault();
    
    const email = e.target.email.value;
    const password = e.target.password.value;
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email === "" || password === "") {
      MySwal.fire({
        background: '#000',
        title: <strong style={ {color:'darkturquoise'} }>Oops...</strong>,
        html: <i style={ {color:'darkturquoise'} }>Los campos no pueden estar vacíos</i>,
        icon: 'error',
        buttonsStyling: false,
      })
      return
    }

    if (!regexEmail.test(email)) {
      MySwal.fire({
        background: '#000',
        title: <strong style={ {color:'darkturquoise'} }>Oops...</strong>,
        html: <i style={ {color:'darkturquoise'} }>Debes escribir una dirección de correo electrónico válida</i>,
        icon: 'error',
        buttonsStyling: false,
      })
      return
    }

    if (email !== 'challenge@alkemy.org' || password !== 'react') {
      MySwal.fire({
        background: '#000',
        title: <strong style={ {color:'darkturquoise'} }>Oops...</strong>,
        html: <i style={ {color:'darkturquoise'} }>Los campos son inválidos</i>,
        icon: 'error',
        buttonsStyling: false,
      })
      return
    }

    axios.post('http://challenge-react.alkemy.org', { email, password })
    .then( res => {
        MySwal.fire({
          background: '#000',
          title: <strong style={ {color:'darkturquoise'} }>¡Bien hecho!</strong>,
          html: <i style={ {color:'darkturquoise'} }>Iniciaste sesión correctamente</i>,
          icon: 'success',
          buttonsStyling: false,
        })
        let token = res.data.token;
        localStorage.setItem('token', token);
        navigate("/home");
      })
      .catch( e => console.log(e) )
  }

  return (
    <form className="login" onSubmit={submitHandler}>
      {localStorage.getItem("token") && <Navigate replace to="/home" /> }
      <h3>Iniciar sesión</h3>
      <Input 
        type="text"
        name="email"
        placeholder="Email"
        autoComplete="off"
      />
      <Input 
        type="password"
        name="password" 
        placeholder="Contraseña" 
      />
      <Button type="submit">Ingresar</Button>
    </form>
  )
}

export default Login;