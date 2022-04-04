import React from 'react';
import { Link } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';

export default class PdfBooks extends React.Component{
    state = {
        books:[]
    }

    componentDidMount(){
        fetch('http://127.0.0.1:8000/api/books/'+this.props.location.state.id)
            .then(response => response.json())
            .then(booksJson => this.setState({ books: booksJson }))
    }

    render(){
        const {books} = this.state
        return(
            <div className="container">
            <br></br><br></br>
                <center><h3>
                    {books.name}
                </h3></center>
                <br></br>
                <Card>
                    <object data={books.pdf} type="application/pdf" width="100%" height="800">
                        <p>Alternative text - include a link <a href={books.pdf}>to the PDF!</a></p>
                    </object>
                </Card>
            </div>
        )
    }
}