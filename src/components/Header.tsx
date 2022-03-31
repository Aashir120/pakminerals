import React from 'react'
import {useSelector} from "react-redux"
import { Link } from 'react-router-dom'
import { Button, } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { ProductItem } from '../interfaces/global';
import {Navbar,Nav} from 'react-bootstrap';
import capture from './images/capture.png'


function Header() {
    const products = useSelector((state:ProductItem[]) => state)
    const product = products.filter((item) => (item.added)).length
    console.log("pppproduct" , product)

    return (
        <Navbar className="nav-head" collapseOnSelect expand="lg">
  <Navbar.Brand className="logo-brand"><img style={{width:'80%',height:'40%'}} src={capture} alt=""/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="side-nav">
      <Nav.Link><Link to="/" className="home-link" >Home</Link></Nav.Link>
      <Nav.Link><Link to="/" className="home-link" >Products</Link></Nav.Link>
      <Nav.Link eventKey={2}>
      <Link to="cart">
        <Button color="inherit"> <ShoppingCartIcon  className="icon-shop"/> <span className="counter">{product}</span>  </Button>
      </Link>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        
    )
}

export default Header
