import React from 'react';
import { Link } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';

export default class Book extends React.Component{
    state = {
        books:[]
    }

    componentDidMount(){
        fetch('http://127.0.0.1:8000/api/books')
            .then(response => response.json())
            .then(booksJson => this.setState({ books: booksJson }))
    }

    render(){
        const{books} = this.state
        return(
            <div className="container">
            <br/>
            <h2> Libros</h2>
            <br/>
            <br/>
                {books.map((book, i) =>
                    <Card key={i}>
                            <center><Card className="card mb-3" style={{maxWidth: '170px'}}>
                                <Card.Img variant="top" src={book.image} width="150px"/>
                                {/* style={{ width: '5rem' }} Se podria agregar este style al Img pero lo cols ya esta definiendo su ancho*/}
                                <Card.Body>
                                   <Card.Title>{book.name}</Card.Title>
                                    <Card.Text>
                                        {book.author_id}
                                    </Card.Text>
                                    <div className="row justify-content-around">
                                        <Button href={book.pdf} class="btn btn-primary active" role="button" data-bs-toggle="button" aria-pressed="true">Leer</Button>
                                    </div>
                                </Card.Body>
                            </Card></center>
                    </Card>
                )}
            </div>
        
        )
    }
}