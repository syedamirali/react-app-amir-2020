import React from 'react';
import {connect} from 'react-redux';
import MovieItem from './movieItem';
import { Row, Col } from 'react-bootstrap';
import {sortedList} from './action';
const movies=(props)=>{
    var list=sortedList(props.movies,props.filters).map((movie)=>{
        return <MovieItem movie={movie} key={movie.id} />
    });
    return(
        <Row>
        {list.length!=0?list:<Col style={{padding:'10px'}} className="bg-dark"><h3 className="text-light">No Item Found</h3></Col>}
        </Row>
    )
};



const mapStateToProps=(state)=>(state);
export default connect(mapStateToProps)(movies);