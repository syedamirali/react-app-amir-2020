import React from 'react';
import MovieList from './movieList';
import {connect} from 'react-redux';
import {Component} from 'react';
import {Container,Jumbotron, Row} from 'react-bootstrap';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Navbar from './movieNavbar';
import AddMovie from './movieAdd';
import EditMovie from './movieEdit';

class App extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <Container fluid={true} >
                <BrowserRouter>
                    <Jumbotron>
                        <Navbar />
                    </Jumbotron>
                    <Switch>
                        <Route path="/" component={MovieList} exact={true} />
                        <Route path="/add" component={AddMovie} />
                        <Route path="/edit/:id" component={EditMovie} />
                    </Switch>
                </BrowserRouter>
            </Container>
        )
    }
}

export default connect()(App)