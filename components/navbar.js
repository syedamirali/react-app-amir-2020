import React from 'react';
import {Link} from 'react-router-dom';
import './styles/style.scss';
import { Badge } from 'react-bootstrap';


const navbar=()=>{
return(
    <div className="nav" >
    <h3 style={{padding:'20px'}}>Brand Name</h3>
    <Link to="/">Home</Link>
    <Link to="/products">Products</Link>
    <Link to="/cart">Cart&nbsp;
    <Badge variant="secondary">{JSON.parse(sessionStorage.getItem('cart'))?JSON.parse(sessionStorage.getItem('cart')).length:0}</Badge>
    </Link>
    </div>
)
}

export default navbar;