import React from 'react';
import Add from './add';
import List from './list';
import {Jumbotron,Row,Col} from "react-bootstrap";
const Parent=(props)=>{
    
    return(
        <Jumbotron>
                    <h1 className="text-center">React App</h1>
                    <Row>
                        <Col lg={{span:6,offset:3}}>

                            <List items={props.items} />
                        </Col>
                        </Row>
                        <Row>
                        
                        <Col lg={{span:6, offset:3}} style={{marginTop:'10px'}}>
                                <Add func={props.add} />
                        </Col>
                        </Row>
                </Jumbotron>
    )
};
export default Parent;