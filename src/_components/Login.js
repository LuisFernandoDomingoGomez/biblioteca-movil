import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';

export default class Login extends React.Component{
    state={
        email:'',
        password:'',
        user:[]
    }

    componentDidMount() {
        fetch("http://127.0.0.1:8000/api/users")
          .then((res) => res.json())
          .then((usersJson) => this.setState({ users: usersJson }));
      }

    dataField = (e) => { this.setState({ [e.target.name]: e.target.value }) }

    subForm = (e) => {
        e.preventDefault();
        let data = {
            email: this.state.email,
            password: this.state.password,
            };
        fetch("http://127.0.0.1:8000/api/login",
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                mode: "cors",
                body: JSON.stringify(data)
            })
            .then((response) => response.json())
            .then(this.setState({ alta: "Inicio de sesión exitoso" }))
    }

    render(){
        const {alta, token}=this.state
        //console.log('Inicia sesion', users) 
        //Recuperar el token y borrarlo despues de 5 minutos
        localStorage.setItem('token', token);
        //Borrar el token despues de 5 minutos
        setTimeout(() => {
            localStorage.removeItem('token');
            localStorage.clear();
        }, 100000);
        //console.log('Token', token)
        //Redireccionar a la página principal
        //window.location.href = '/' 

        return(
            <div className="my-3">
            <div className="row justify-content-center">
                <div className="card col-11 col-sm-8 col-md-7">
                    <div className="card-body">
                        <div className="d-flex justify-content-center mt-3">
                            <h5 className="card-title">Iniciar Sesión</h5>
                        </div>
                        <br />
                        <form onSubmit={this.subForm}>
                            <div className="my-3">
                                <label htmlFor="inputEmail">Email</label>
                                <input name="email" onChange={this.dataField} type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp"  placeholder="Ingresa tu email" required/>
                            </div>

                            <div className="my-3">
                                <label htmlFor="InputPassword">Contraseña</label>
                                <input name="password" onChange={this.dataField} minLength={8} type="password" className="form-control" id="InputPassword" aria-describedby="passwordHelp" placeholder="*******" required/>
                            </div>

                            <div className="d-flex justify-content-center my-3">
                                <Link to="/">
                                    <Button type="button" className="btn btn-primary">Iniciar Sesion</Button>
                                </Link>
                            </div>

                            <div className="d-flex justify-content-center">
                                <small className="pt-3"><Link to={"/register"}>¿No tienes cuenta? Registrate</Link></small>
                            </div>

                        </form>
                    </div>
                </div>
            </div> 
            </div>
        )
    }
}