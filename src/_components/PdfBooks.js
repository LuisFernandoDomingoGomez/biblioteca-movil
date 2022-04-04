import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

import Pdf from './Pdf';

const ListBooks = () => {
    return (
        <Fragment>
        
        <h5 className="my-3">Lectura</h5>
        <div className="row">
            <br></br>
            <Pdf/>
        </div>
        </Fragment>
        
    );
}
 
export default ListBooks;