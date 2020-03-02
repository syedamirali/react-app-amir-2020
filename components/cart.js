import React from 'react';
import { Jumbotron, Card, Col, Button,Row, InputGroup } from 'react-bootstrap';
const cart=(props)=>{
    var amount=0;
    return(
        <Jumbotron>
            
            {props.cartItems.map((item)=>{
                amount+=(item.qty*item.price);
                return(
                <Col lg={{span:8, offset:2}}>
                <Card key={item.title}>
                    <Card.Body>
                    <Row>
                    <Col lg={12}>
                    <Card.Title>{item.title}</Card.Title>
                    </Col>
                    <Col lg={6}>
                    <Card.Text>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat
                    
                    </Card.Text>
                    </Col>
                    <Col lg={2}>
                        <InputGroup>
                        <InputGroup.Append>
                        <Button block onClick={()=>{
                           return props.sub(item) 
                        }}>-</Button>
                        </InputGroup.Append>
                        <h1 ><span className="badge">{item.qty}</span></h1>
                        <InputGroup.Prepend>
                        <Button block onClick={()=>(
                           props.add(item) 
                        )}>+</Button>
                        </InputGroup.Prepend>
                        
                        </InputGroup>
                        </Col>
                        
                        <Col lg={2}>
                        <h4 className="text-center text-danger">Rs. {item.price*item.qty}</h4>
                        </Col>

                        <Col lg={2}>
                        <Button variant="outline-danger"  block onClick={()=>(props.remove(item))}>Remove</Button>
                        </Col>

                    </Row>
                    </Card.Body>
                </Card>
                </Col>)
            })}
            <Col lg={{span:8, offset:2}}>
            <Card className="bg-danger p-3">
               {props.cartItems.length?<Card.Title className="text-light">
                    Total Amount
            <span style={{float:'right'}}>Rs. {amount}</span>
                </Card.Title>:<h3>No Items in Cart</h3>}
                
            </Card>
            </Col>
           
        </Jumbotron>
    )
}
export default cart;