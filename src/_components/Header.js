import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment } from 'react';
import { Link, useHistory } from 'react-router-dom';
import img from "../img/logo.png";

const Header = () => {

    const history = useHistory();
    const sideNavRef = React.useRef();

    const openSideNav = () => sideNavRef.current.style.width = "250px";
    const closeSideNav = () => sideNavRef.current.style.width = "0px";

    const goToMainPage = () => history.push('/');

    return (
        <Fragment>
            <div className="header-bar py-3">
                <div className="container">

                    <div className="row justify-content-between">


                        <div className="col-2 hide-in-desktop">
                            <h2 onClick={openSideNav} className="header-title"><FontAwesomeIcon icon={['fas', 'bars']}/></h2>                     
                        </div>

                        <div className="col-7 col-lg-3">
                            <h5 onClick={goToMainPage} className="header-title"><img src={img} style={{height: '28px'}}/><i>Biblioteca de Alejandria</i></h5>
                        </div>

                        <div className="col-8 hide-in-mobile">
                            <Link className="header-title mr-4" to={'/login'}>Iniciar Sesión</Link>
                            <Link className="header-title mr-4" to={'/offers'}>Acerca</Link>
                            <Link className="header-title mr-4" to={'/list-books'}>Todos los libros</Link>
                            <Link className="header-title" to={'/subscribe'}><button className="btn btn-secondary">Descargar</button></Link>
                        </div>

                        <hr></hr>

                    </div>

                </div>
            </div>

            <div id="mySidenav" className="sidenav hide-in-desktop" ref={sideNavRef}>
                <a onClick={closeSideNav} className="closebtn my-3" >&times;</a>
                <center><h5 onClick={goToMainPage} className="header-title"><img src={img} style={{height: '100px'}}/></h5></center>
                <hr></hr>
                <Link className="header-title my-2" to={'/login'} onClick={closeSideNav}>Iniciar Sesión</Link>
                <Link className="header-title my-2" to={'/offers'} onClick={closeSideNav}>Acerca</Link>
                <Link className="header-title my-2" to={'/list-books'} onClick={closeSideNav}>Todos los libros</Link>
                <Link className="header-title my-2" to={'/subscribe'} onClick={closeSideNav}><button className="btn btn-secondary">Descargar</button></Link>
            </div>
                
        </Fragment>
        
    );
}

export default Header;