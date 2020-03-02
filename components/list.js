import React from 'react';
import {ListGroup, Badge} from 'react-bootstrap';
const List=(props)=>{
    return(
        <ListGroup>
                           
                            {props.items.map((item)=>(
                                
                                    <ListGroup.Item key={item.title}>
                                        {item.title}
                            <Badge pill={true} variant="danger" style={{float:'right'}}>Rs. {item.price}</Badge>
                                    </ListGroup.Item>
                                
                            ))}
                        </ListGroup>
    )
}

export default List;