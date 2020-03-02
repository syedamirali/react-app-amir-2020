import React from 'react';
import {Link} from 'react-router-dom';
import {Nav,Navbar,Form,FormControl,Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {nameFilter} from './action';

const filterName=(name,props)=>{
  return(props.dispatch(nameFilter({name:name})))
}

const Navigation=(props)=>{
    return(
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">React App</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link><Link to="/">Home</Link></Nav.Link>
      <Nav.Link><Link to="/add">Add</Link></Nav.Link>
    </Nav>
    <Form>
      <FormControl type="text" name="search" placeholder="Search By Name" className="mr-sm-2" onChange={(e)=>{
        var name=e.target.value;
        return filterName(name,props)}}  />
    </Form>
  </Navbar>
    )
}

export default connect()(Navigation);