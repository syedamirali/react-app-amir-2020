import React from 'react';
import { Jumbotron, Col, Card,Row,Button, Badge } from 'react-bootstrap';
const products=(props)=>{
    return(
        <Jumbotron>
            <Row>
                {props.items.map((item)=>(
                    <Col lg={4} style={{padding:'5px'}} key={item.title}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    {item.title}
                                </Card.Title>
                                <Card.Subtitle>
                            <Badge variant="danger">Rs. {item.price}</Badge>
                                </Card.Subtitle>
                                <Card.Text>
                                Morbi in sem quis dui placerat ornare. 
                                Pellentesque odio nisi, euismod in, pharetra a, 
                                ultricies in, diam. Sed arcu. Cras consequat
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <Button variant="danger" onClick={()=>{
                                    return props.addToCart(item)
                                    }} block >Add To Cart</Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Jumbotron>
    )
}
export default products;