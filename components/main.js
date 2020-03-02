import React from 'react';
import {Container,Row,Col} from "react-bootstrap";
import {Component} from 'react';
import Navbar from './navbar';
import FormMain from './form';
import Products from './products';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Cart from './cart';

class Template extends Component{
    constructor(props){
        super(props);
        this.add=this.add.bind(this);
        this.addToCart=this.addToCart.bind(this);
        this.remove=this.remove.bind(this);
        this.subQty=this.subQty.bind(this);
        this.addQty=this.addQty.bind(this);
        this.state={
            'items':JSON.parse(localStorage.getItem('products'))?JSON.parse(localStorage.getItem('products')):[],
            'cart':JSON.parse(sessionStorage.getItem('cart'))?JSON.parse(sessionStorage.getItem('cart')):[]           
        }
    }

    add(e){
        e.preventDefault();
        var value=e.target.elements.enter.value;
        var price=e.target.elements.price.value;
        this.setState((prevState)=>{
            prevState.items.push({'title':value,'price':price});
            localStorage.setItem('products',JSON.stringify(prevState.items));
            return{
                'items':prevState.items
            }
        })
        e.target.elements.enter.value="";
        e.target.elements.price.value="";
    }

    addToCart(item){
        this.setState((prevState)=>{
            var foundIndex=prevState.cart.indexOf(item);
            if(foundIndex==-1){
            item.qty=1;
            prevState.cart.push(item);
            }
            else{
                prevState.cart[foundIndex].qty+=1;
            }
            sessionStorage.setItem('cart',JSON.stringify(prevState.cart));
            
            return{
                'cart':prevState.cart
            }
        });
    }

    subQty(item){
        this.setState((prevState)=>{
            var foundIndex=prevState.cart.indexOf(item);
            prevState.cart[foundIndex].qty>0?prevState.cart[foundIndex].qty-=1:0;
            sessionStorage.setItem('cart',JSON.stringify(prevState.cart));
            return{
                'cart':prevState.cart
            }
        })
    }

    addQty(item){
        this.setState((prevState)=>{
            var foundIndex=prevState.cart.indexOf(item);
            prevState.cart[foundIndex].qty+=1;
            sessionStorage.setItem('cart',JSON.stringify(prevState.cart));
            return{
                'cart':prevState.cart
            }
        })
    }

    remove(receive){
        this.setState((prevState)=>{
            
        sessionStorage.setItem('cart',JSON.stringify(prevState.cart.filter((item)=>{
            return item.title!==receive.title;
        })));
            return{
                'cart':prevState.cart.filter((item)=>{
                    return item.title!==receive.title;
                })
            }
        });
    }

    render(){
        return(
            <Container fluid={true}>
                <Row>
                    <BrowserRouter>
                        <Col lg={2} style={{padding:'0px'}} >
                            
                            <Navbar/>
                        </Col>
                        <Col lg={10} style={{padding:'0px'}} >
                
                        <Switch>
                            <Route path="/" component={
                                ()=>(<FormMain items={this.state.items} add={this.add} />)
                            } exact={true}/>
                            <Route path="/products" component={()=>(
                                <Products items={this.state.items} addToCart={this.addToCart} />
                            )} />
                            <Route path="/cart" component={()=>(
                                <Cart cartItems={this.state.cart} 
                                add={this.addQty}
                                sub={this.subQty} remove={this.remove}/>
                                )} />
                        </Switch>
                        </Col>
                    </BrowserRouter>

                </Row>

            </Container>
        )
    }

}

export default Template;