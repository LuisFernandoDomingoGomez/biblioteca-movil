import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import img from "../img/logo.png";

const Header = () => {

    const history = useHistory();
    const sideNavRef = React.useRef();

    const openSideNav = () => sideNavRef.current.style.width = "250px";
    const closeSideNav = () => sideNavRef.current.style.width = "0px";

    const goToMainPage = () => history.push('/');
    const [isReadyForInstall, setIsReadyForInstall] = React.useState(false);

    useEffect(() => {
        window.addEventListener("beforeinstallprompt", (event) => {
          // Prevent the mini-infobar from appearing on mobile.
          event.preventDefault();
          console.log("👍", "beforeinstallprompt", event);
          // Stash the event so it can be triggered later.
          window.deferredPrompt = event;
          // Remove the 'hidden' class from the install button container.
          setIsReadyForInstall(true);
        });
      }, []);
    
      async function downloadApp() {
        console.log("👍", "butInstall-clicked");
        const promptEvent = window.deferredPrompt;
        if (!promptEvent) {
          // The deferred prompt isn't available.
          console.log("oops, no prompt event guardado en window");
          return;
        }
        // Show the install prompt.
        promptEvent.prompt();
        // Log the result
        const result = await promptEvent.userChoice;
        console.log("👍", "userChoice", result);
        // Reset the deferred prompt variable, since
        // prompt() can only be called once.
        window.deferredPrompt = null;
        // Hide the install button.
        setIsReadyForInstall(false);
      }

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
                            <Link className="header-title mr-4" to={'/about'}>Acerca</Link>
                            <Link className="header-title mr-4" to={'/list-books'}>Todos los libros</Link>
                            <Link onClick={downloadApp}> Descarga </Link>
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
                <Link className="header-title my-2" to={'/about'} onClick={closeSideNav}>Acerca</Link>
                <Link className="header-title my-2" to={'/list-books'} onClick={closeSideNav}>Todos los libros</Link>
                <Link onClick={downloadApp}> Descarga </Link>
            </div>
                
        </Fragment>
    );
}

export default Header;