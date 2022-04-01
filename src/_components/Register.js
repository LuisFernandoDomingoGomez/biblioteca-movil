import React, { useState } from 'react';

const Register = () => {
    const handleSubmit = e => {
        e.preventDefault();
    }

    const [userRegister, setUserRegister] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleRegister = e => {
        switch (e.target.name) {
            case 'name':
            case 'email':
            case 'password':
            case 'address':

                applyChangeInUserRegister(e.target.name, e.target.value);
                break;
            default:
                break;
        }
    }

    const applyChangeInUserRegister = (attributeName, value) => {
        setUserRegister({
            ...userRegister,
            [attributeName]: value
        });
    }

    return (
        <div className="my-3">
            <div className="row justify-content-center">
                <div className="card col-11 col-sm-8 col-md-7">
                    <div className="card-body">
                        <div className="d-flex justify-content-center mt-3">
                            <h5 className="card-title">Registro de Usuario</h5>
                        </div>

                        <form>
                            <div className="my-3">
                                <label htmlFor="inputname">Nombre</label>
                                <input name="name" onChange={handleRegister} value={userRegister.name} type="text" className="form-control" id="inputname" placeholder="Ingresa tu Nombre"/>
                            </div>

                            <div className="my-3">
                                <label htmlFor="inputEmail">Email</label>
                                <input onChange={handleRegister} value={userRegister.email} name="email" type="email" className="form-control" id="inputEmail" placeholder="Ingresa tu email"/>
                            </div>

                            <div className="my-3">
                                <label htmlFor="InputPassword">Contraseña</label>
                                <input onChange={handleRegister} value={userRegister.password} name="password" type="password" className="form-control" id="InputPassword" placeholder="*******"/>
                            </div>

                            <div className="d-flex justify-content-center mt-3">
                                <button onClick={handleSubmit} className="btn btn-primary" type="submit">Iniciar Sesion</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div> 
        </div>
    );
}
 
export default Register;