import React from 'react';
import {connect} from 'react-redux';
import { Row, Col, Card,FormControl,FormGroup,Button, Alert} from 'react-bootstrap';
import {Component} from 'react';
import uuid from 'react-uuid';
import {add_movies} from './action';
import "react-datepicker/dist/react-datepicker.css";

class MovieAdd extends Component{
    constructor(props){
        super(props);
        this.add=this.add.bind(this);
        this.state={
            msg:undefined
        };       
    }

    add(e){
        e.preventDefault();
        var name=e.target.elements.name.value;
        var lang=e.target.elements.lang.value;
        var writer=e.target.elements.writer.value;
        var director=e.target.elements.director.value;
        var rating=e.target.elements.imdb_rating.value;
        var genre=e.target.elements.genre.value;
        this.props.addMovies({
            id:uuid(),
            name:name,
            release_date:100100,
            language:lang,
            writer:writer,
            director:director,
            imdb_rating:rating,
            genre:genre});
            e.target.elements.name.value='';
            e.target.elements.lang.value='';
            e.target.elements.writer.value='';
            e.target.elements.director.value='';
            e.target.elements.imdb_rating.value='';
            e.target.elements.genre.value='';
            
        this.setState((prevState)=>{
            return {msg:'Added Succesfull'}});
        setTimeout(()=>{
        this.setState((prevState)=>{return {msg:undefined}})
        },3000);
    }

    render(){
        return(
            <Row>
            <Col lg={{span:4, offset:4}}>
                <Card>
                    <Card.Body>
                        <Card.Title>
                            Add Movie
                        </Card.Title>
                        {this.state.msg===undefined?<i/>:
                            <Alert variant="success">
                                <Alert.Heading>Sucess</Alert.Heading>
                                <p>{this.state.msg}</p>
                            </Alert>
                        }
                        <form onSubmit={this.add}>
                            <FormGroup>
                            <FormControl placeholder="Name" name="name" />
                            </FormGroup>
                            <FormGroup>
                            <FormControl placeholder="Language" name="lang" />
                            </FormGroup>
                            <FormGroup>
                            <FormControl placeholder="Writer" name="writer" />
                            </FormGroup>
                            <FormGroup>
                            <FormControl placeholder="Director" name="director" />
                            </FormGroup>
                            <FormGroup>
                            <FormControl placeholder="IMDB Rating" name="imdb_rating" />
                            </FormGroup>
                            <FormGroup>
                            <FormControl placeholder="Genre" name="genre" />
                            </FormGroup>
                            <FormGroup>
                                <Button type="submit" size="lg" variant="danger"  block>Submit</Button>
                                
                            </FormGroup>
                        </form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        )
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        addMovies:(movie)=>{
            return dispatch(add_movies(movie))
        }
    }
}

const mapStateToProps=(state)=>(state);

export default connect(mapStateToProps,mapDispatchToProps)(MovieAdd);
