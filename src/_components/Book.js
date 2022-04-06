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
                    {books.map((books, i) =>
                        <Card key={i}>
                            <Card className="col card mb-2" style={{width: '11rem'}}>
                                <Card.Img src={books.image} width= "100%" height= "65%"/>
                                <center><ul class="list-group list-group-flush">
                                    <li class="list-group-item">{books.name}</li>
                                </ul></center>
                                <div className="row justify-content-around">
                                    <Link to={{pathname: '/pdf-books', state: { id: books.id } }}>
                                        <button type="button" className="btn btn-primary">Leer</button>
                                    </Link>
                                </div>
                            </Card>
                        </Card>
                    )}
                </div>
            </div>
        
        )
    }
}