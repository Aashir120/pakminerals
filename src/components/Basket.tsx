import React,{useState} from 'react'
import { useSelector } from "react-redux"
import { ProductItem } from '../interfaces/global'
import { useDispatch } from "react-redux"
import { increment, remove, decrement } from "../store/index"
import {Container,Row,Col} from 'react-bootstrap';
import EmptyBasket from './EmptyBasket'
import StripeCheckout from 'react-stripe-checkout';
import { useNavigate } from 'react-router-dom';


function Basket() {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const products = useSelector((store: ProductItem[]) => (
        store)
    )
    console.log("products", products)
    const [stripeToken, setStripeToken] = useState(null);
  
    const onToken = (token:any) => {
      setStripeToken(token);
      console.log('hello');
      products.map((product)=>dispatch(remove(product)))
      navigate('/success');
    };

    return (

        <div className="basket_container">
            <div>
                {products.filter((product) => product.added).length > 0 ? (
                   <Container>
                       <Row>
                           <Col className="col-basket">
                               <h4>Product</h4>
                               <hr/>
                           </Col>
                           <Col xs lg="4" className="col-basket">
                               <h4>Subtotal</h4>
                               <hr/>
                           </Col>
                       </Row>
                        <Row>
                            <Col>
                         {products.filter((product)=>product.added)
                        .map((product)=>(
                        <Row>
                            <Col>
                                    <Row>
                                        <Col xs lg="3"><img src={`/images/${product.imageUrl}`} width="150px" height="180px" alt={product.imageUrl}/></Col>
                                        <Col className="product-item" >
                                        <h5 className="h5-title">{product.title}</h5>
                                        <h5 className="h5-desc">{product.description}</h5>
                                        <h5 className="h5-logo">PakMinerals</h5>
                                        <h5 className="h5-price">${product.price}</h5>
                                        <h5 className="h5-quantity">Quantity</h5>
                                        <button className="btn-quantity" onClick={()=>dispatch(increment(product))}>+</button>
                                        {product.quantity}{' '}
                                        <button className="btn-quantity" onClick={()=>dispatch(decrement(product))} >-</button>
                                        <button className="remove-btn" onClick={()=>dispatch(remove(product))} >Remove</button>
                                        </Col>
                                        <Col md="auto"></Col>
                                    </Row>       
                                    <br/>
                                    <br/>
                                    <hr/>                        
                            </Col>
                            
                        </Row>
                        ))}
                        </Col>
                        <Col xs lg="4">
                        <h4 className="total-amount"> ${products.filter((product) => (product.added))
                                        .reduce((totalPrice, product) => (totalPrice + product.price * product.quantity), 0)}</h4>
                                        <hr/>
                                        <br/>
                                        
                                        <h6 className="comments"><span className="note"> NOTE </span>Additional comments</h6>
                                        <textarea className="text-area" name="comment" placeholder="Enter text here..."></textarea>
                                        <StripeCheckout
              name="PakMinerals"
              image="https://avatars.githubusercontent.com/u/1486366?v=4"
              billingAddress
              shippingAddress
             description={`Your total is ${products.filter((product) => (product.added))
                .reduce((totalPrice, product) => (totalPrice + product.price * product.quantity), 0)}`}
              amount={products.filter((product) => (product.added)).reduce((totalPrice, product) => (totalPrice + product.price * product.quantity*100), 0)}
              token={onToken}
              stripeKey="pk_test_51KfqI4DMSlJTK91CKeRE2ofJljYIPVNFdsBxem3VFIWxeoXhBqcPLTC59kZmBCGhqEPk37VHztXHlvgWfvgyRlc300UoSRlegs"
            >
              <button className="btn-Checkout">Proceed to Checkout</button>
            </StripeCheckout>
                                        
                        </Col>
                        </Row>
                   </Container>         
                ) : <EmptyBasket />}
            </div>

        </div>
    )
}

export default Basket


