import React from 'react';
import { Link } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';

export default class Pdf extends React.Component{
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
                    {books.map((book, i) =>
                        <Card key={i}>
                            <Card>
                                <object data={book.pdf} type="application/pdf" width="100%" height="800">
                                    <p>Alternative text - include a link <a href={book.pdf}>to the PDF!</a></p>
                                </object>
                            </Card>
                        </Card>
                    )}
            </div>       
        )
    }
}