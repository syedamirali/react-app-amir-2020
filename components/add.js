import React from 'react';
import {InputGroup,FormControl,Button} from 'react-bootstrap';
const add=(props)=>{
    return(
        
        <form onSubmit={props.func}>
                            <InputGroup >
                            
                            <FormControl placeholder="Product Name" name="enter" />
                            <FormControl placeholder="Product Price" name="price" />
                            
                            <InputGroup.Append>
                            <Button variant="danger" type="submit">PRESS ME</Button>
                            </InputGroup.Append>
                            
                            </InputGroup>
                            
                        </form>
    )
}
export default add;