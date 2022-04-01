import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

import Book from './Book';

const ListBooks = () => {
    return (
        <Fragment>
        
        <h5 className="my-3">Listado de Libros</h5>
        <div className="row">
            <Book/>
        </div>
        </Fragment>
        
    );
}
 
export default ListBooks;