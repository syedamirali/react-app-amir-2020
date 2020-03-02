import React from 'react';
import {Card,Col,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {remove_movies} from './action';
import {connect} from 'react-redux';
const item=(props)=>{
    return (
        <Col lg={3} style={{marginTop:'10px'}}>
                <Card>
                    <Card.Header>
                        <h3>{props.movie.name}</h3>
                    </Card.Header>
                    <Card.Body>
                        <h5><strong>Writer&nbsp;&nbsp;</strong>{props.movie.writer}</h5>
                        
                        <h5><strong>Director&nbsp;&nbsp;</strong>{props.movie.director}</h5>
                        
                        <h5><strong>Rating&nbsp;&nbsp;</strong>{props.movie.imdb_rating}</h5>

                        <h5><strong>Genre&nbsp;&nbsp;</strong>{props.movie.genre}</h5>

                    </Card.Body>
                    <Card.Footer>
                        <Link className="btn btn-success" to={`/edit/${props.movie.id}`}>Edit</Link>
                        <Button variant="danger" onClick={()=>{
                            return props.dispatch(remove_movies({id:props.movie.id}));
                        }}>Remove</Button>
                    </Card.Footer>
                </Card>
        </Col>
    )
}


export default connect()(item);