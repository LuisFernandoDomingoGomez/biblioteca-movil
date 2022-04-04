import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './_components/Header';
import MainPage from './_components/MainPage';

//REDUX
import { Provider } from 'react-redux';
import store from './store';
import Login from './_components/Login';
import ListBooks from './_components/ListBooks';
import PdfBooks from './_components/PdfBooks';
import Register from './_components/Register';
import About from "./_components/About";
import Error from "./_components/Error";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header/>        
        <div className="container">
          <Switch>
            <Route exact path="/" component={MainPage}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/register" component={Register}></Route>
            <Route exact path="/list-books" component={ListBooks}></Route>
            <Route exact path="/pdf-books" component={PdfBooks}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route path="*" component={Error} />
          </Switch>
        </div>

      </Provider>
      
    </BrowserRouter>
  );
}

export default App;
