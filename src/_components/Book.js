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
                <div className="row justify-content-center">
                    {books.map((book, i) =>
                        <Card key={i}>
                            <Card className="col card mb-2" style={{width: '11rem'}}>
                                <Card.Img src={book.image} width= "100%" height= "65%"/>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">{book.name}</li>
                                </ul>
                                <div className="row justify-content-around">
                                    <Button>
                                        <Link to={'/pdf-books'} style={{color: '#FFFFFF'}}>Leer</Link>
                                    </Button>
                                </div>
                            </Card>
                        </Card>
                    )}
                </div>
            </div>
        
        )
    }
}