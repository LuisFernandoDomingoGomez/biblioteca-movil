import React from "react";
import { Link } from "react-router-dom";

export default class Register extends React.Component{
    state={
        name: '',
        email: '',
        password: ''
    }

    dataField = (e) => { this.setState({ [e.target.name]: e.target.value }) }

    subForm = (e) => {
        e.preventDefault();
        let data = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
        };
        fetch("http://127.0.0.1:8000/api/register",
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                mode: "cors",
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(this.setState({ alta: "Usuario registrado con exito" }))
    }

    render(){
        const {alta} = this.state
        return(
            <div className="my-3">
                <div className="row justify-content-center">
                    <div className="card col-11 col-sm-8 col-md-7">
                        <div className="card-body">
                            <div className="d-flex justify-content-center mt-3">
                                <h5 className="card-title">Registro de Usuario</h5>
                            </div>
                            <br />
                            {alta ? <div className="alert alert-success" role="alert">{alta}</div> : <div></div>}
                            <form onSubmit={this.subForm}>
                                <div className="my-3">
                                    <label>Nombre(s): </label>
                                    <input type="text" name="name" className="form-control" placeholder="Ingresa tu Nombre" onChange={this.dataField}/>
                                </div>

                                <div className="my-3">
                                    <label>Email: </label>
                                    <input type="email" name="email" className="form-control" placeholder="Ingresa tu email" onChange={this.dataField}/>
                                </div>

                                <div className="my-3">
                                    <label>Contraseña: </label>
                                    <input type="password" name="password" className="form-control" placeholder="*******" onChange={this.dataField}/>
                                </div>
                                <br />
                                <div className="d-flex justify-content-center my-3">
                                    <button type="submit" className="btn btn-primary">Registrar</button>
                                    {" "}
                                    <Link to="/login">
                                        <button type="button" className="btn btn-danger">Cancelar</button>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}