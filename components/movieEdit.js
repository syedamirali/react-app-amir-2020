import React from 'react';
import {connect} from 'react-redux';
import { Row, Col, Card,FormControl,FormGroup,Button, Alert} from 'react-bootstrap';
import {Component} from 'react';
import {edit_movies} from './action';
import "react-datepicker/dist/react-datepicker.css";


class MovieEdit extends Component{
    constructor(props){
        super(props);
        this.update=this.update.bind(this);
        
        this.state={
            movie:{
                name:this.props.movie.name,
                lang:this.props.movie.language,
                writer:this.props.movie.writer,
                director:this.props.movie.director,
                imdb_rating:this.props.movie.imdb_rating,
                genre:this.props.movie.genre
            }
        };
           
    }

    update(e){
        e.preventDefault();
        var name=e.target.elements.name.value;
        var lang=e.target.elements.lang.value;
        var writer=e.target.elements.writer.value;
        var director=e.target.elements.director.value;
        var rating=e.target.elements.imdb_rating.value;
        var genre=e.target.elements.genre.value;
        this.props.updateMovies(this.props.match.params.id,{
            name:name,
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
            this.props.history.push('/');
            
     
    }

    render(){
        return(
            <Row>
            <Col lg={{span:4, offset:4}}>
                <Card>
                    <Card.Body>
                        <Card.Title>
                            Edit Movie
                        </Card.Title>
                       
                        <form onSubmit={this.update}>
                            <FormGroup>
                            <FormControl placeholder="Name" name="name" value={this.state.movie.name} onChange={(e)=>{
                                var name=e.target.value;
                                this.setState((prevState)=>(
                                {movie:{...prevState.movie,name}}    
                                ))
                            }} />
                            </FormGroup>
                            <FormGroup>
                            <FormControl placeholder="Language" name="lang" value={this.state.movie.lang} onChange={(e)=>{
                                 var lang=e.target.value;
                                 this.setState((prevState)=>(
                                 {movie:{...prevState.movie,lang}}    
                                 ))
                            }} />
                            </FormGroup>
                            <FormGroup>
                            <FormControl placeholder="Writer" name="writer" value={this.state.movie.writer} onChange={(e)=>{
                                 var writer=e.target.value;
                                 this.setState((prevState)=>(
                                 {movie:{...prevState.movie,writer}}    
                                 ))
                            }}/>
                            </FormGroup>
                            <FormGroup>
                            <FormControl placeholder="Director" name="director" value={this.state.movie.director} onChange={(e)=>{
                                 var director=e.target.value;
                                 this.setState((prevState)=>(
                                 {movie:{...prevState.movie,director}}    
                                 ))
                            }} />
                            </FormGroup>
                            <FormGroup>
                            <FormControl placeholder="IMDB Rating" name="imdb_rating" value={this.state.movie.imdb_rating} onChange={(e)=>{
                                 var imdb_rating=e.target.value;
                                 this.setState((prevState)=>(
                                 {movie:{...prevState.movie,imdb_rating}}    
                                 ))
                            }} />
                            </FormGroup>
                            <FormGroup>
                            <FormControl placeholder="Genre" name="genre" value={this.state.movie.genre} onChange={(e)=>{
                                 var genre=e.target.value;
                                 this.setState((prevState)=>(
                                 {movie:{...prevState.movie,genre}}    
                                 ))
                            }} />
                            </FormGroup>
                            <FormGroup>
                                <Button type="submit" size="lg" variant="primary"  block>Update</Button>
                                
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
        updateMovies:(id,movie)=>{
            return dispatch(edit_movies({id:id,movie:movie}))
        }
    }
}

const mapStateToProps=(state,props)=>({
    movie:state.movies.filter((movie)=>{
        return movie.id===props.match.params.id
    })[0]
});

export default connect(mapStateToProps,mapDispatchToProps)(MovieEdit);