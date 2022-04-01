import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { userLoginAction } from '../actions/auth-action';

const Login = () => {

    const dispatch = useDispatch();

    const login = user => dispatch(userLoginAction(user));

    const history = useHistory();

    const [userLogin, setUserLogin] = useState({
        email: '',
        password: ''
    });

    const [errorInputs, setErrorInputs] = useState([]);

    const handleChange = e => {
        const isValid = e.target.validity.valid;
        const message = e.target.validationMessage;

        validateInputs(isValid, message, e.target.name);

        setUserLogin({
            ...userLogin,
            [e.target.name] : e.target.value
        });
    }

    const validateInputs = (isValid, message, inputName) => {
        if (!isValid) {
            setErrorInputs([
                ...errorInputs,
                {
                    inputName,
                    message
                }
            ]);
        } else {
            setErrorInputs(errorInputs.filter(errorInput => errorInput.inputName !== inputName));
        }
        
    }

    const showErrorsInForm = (inputName, ariaLabel) => {
        const error = errorInputs.find(x => x.inputName === inputName);
        return error? <small id={ariaLabel} className="form-text text-muted">{error.message}</small> : null;
    }

    const handleSubmit = e => {
        e.preventDefault();

        login(userLogin);

        history.push('/');
    }

    return (
        <div className="my-3">
            <div className="row justify-content-center">
                <div className="card col-11 col-sm-8 col-md-7">
                    <div className="card-body">
                        <div className="d-flex justify-content-center mt-3">
                            <h5 className="card-title">Iniciar Sesión</h5>
                        </div>

                        <form>
                            <div className="my-3">
                                <label htmlFor="inputEmail">Email</label>
                                <input name="email" value={userLogin.email} onChange={handleChange} type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp"  placeholder="Ingresa tu email" required/>
                                {showErrorsInForm('email', 'emailHelp')}
                            </div>

                            <div className="my-3">
                                <label htmlFor="InputPassword">Contraseña</label>
                                <input name="password" value={userLogin.password} minLength={6} onChange={handleChange} type="password" className="form-control" id="InputPassword" aria-describedby="passwordHelp" placeholder="*******" required/>
                                {showErrorsInForm('password', 'passwordHelp')}
                            </div>

                            <div className="d-flex justify-content-center my-3">
                                <button onClick={handleSubmit} className="btn btn-primary" type="submit">Iniciar Sesion</button>
                            </div>

                            <div className="d-flex justify-content-center">
                                <small className="pt-3"><Link to={"/register"}>¿No tienes cuenta? Registrate</Link></small>
                            </div>

                        </form>
                    </div>
                </div>
            </div> 
        </div>
    );
}
 
export default Login;