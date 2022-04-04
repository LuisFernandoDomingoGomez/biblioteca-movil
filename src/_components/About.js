import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import img from "../img/wel.png";
import img1 from "../img/mis.png";
import img2 from "../img/vis.png";
import img3 from "../img/misi.png";
import img4 from "../img/visi.png";




const About = () => {
    return (
        <Fragment>
        
        <h5 className="my-3">Misión</h5>
        <div className="content container-fluid">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={img} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={img1} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={img3} className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    
                </div>
            </div>
            <br></br>
            <br></br>
            <h5 className="my-3">Visión</h5>
            <div className="content container-fluid">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={img} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={img2} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={img4} className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <h5 className="my-3">Ubicación</h5>
            <div className="content container-fluid">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.2912954739614!2d-99.47756979265979!3d19.340523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d20a14878a64eb%3A0x65bdb503fdce37bc!2sUniversidad%20Tecnol%C3%B3gica%20del%20Valle%20de%20Toluca!5e0!3m2!1ses-419!2smx!4v1649046187098!5m2!1ses-419!2smx" width="100%" height="500" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
        </Fragment>
        
    );
}
 
export default About;