import { ProductItem } from '../interfaces/global'
import { useSelector, useDispatch } from "react-redux"
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {useParams} from 'react-router-dom';
import { increment, remove, decrement } from "../store/index"
import { add } from '../store';



function ProductDetails(){

    
    const dispatch = useDispatch()

    const products = useSelector((store: ProductItem[]) => (
      store)
  )
    
    const { slug } = useParams();
    console.log('====================================');
    console.log(slug);
    console.log('====================================');
    var y: number = +slug;


    console.log("products",products[y-1]);

    const { imageUrl, title,description,price,quantity } = products[y-1];

return (
  <div>
  <div className="card">
  <div className='card-img-div'>
  <img src={`${imageUrl}`} alt={imageUrl} />
  </div>
  <div className="card-header">
<h2 style={{marginBottom:'2%'}}>{title}</h2>
<div  className="card-price">
<h4>${price}</h4>
</div>
<div>
{products.filter((product)=>product.id == y).map((product)=>(
                          <div style={{display:'flex',marginTop:'20px'}} >
                          <button style={{width:'40px',height:'30px',borderRadius:'0px'}} className="btn-quantity" onClick={()=>dispatch(increment(product))}>+</button>
                          <p style={{paddingLeft:'5px',paddingRight:'5px'}} >{product.quantity}{' '}</p>
                          <button style={{width:'40px',height:'30px',borderRadius:'0px'}} className="btn-quantity" onClick={()=>dispatch(decrement(product))} >-</button>
                                   

 <div style={{marginTop:'7%',marginLeft:'-16%'}}>                       
<p style={{fontWeight:'bold',fontSize:'20px'}}>Product Details</p>
<p className="para">
{description}
</p>
<button className="card-button"  disabled={product.added} onClick={() => dispatch(add(product))}>Add to Cart</button>
</div>
</div>
))}
                        </div>
</div>
</div>
</div>
)
}
export default ProductDetails;