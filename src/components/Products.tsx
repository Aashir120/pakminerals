import React,{useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux"
import { ProductItem } from '../interfaces/global'
import { add } from '../store';
import {Carousel} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {Paper , Grid , Container , Typography} from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import aos from 'aos';
import 'aos/dist/aos.css';

const useStyles = makeStyles((theme) => ({
 
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Products() {
  useEffect(() => {
    aos.init({ duration: 2000 });
}, []);
  const classes = useStyles();


  const dispatch = useDispatch();

  const products = useSelector((state: ProductItem[]) => state)


  return (
    <div className="Products_container">
      <Carousel className="Products_mainImage">
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100 img-slider"
      src={require('./images/1.jpg').default}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img 
      className="d-block w-100 img-slider"
      src={require('./images/2.jpg').default}
      alt="second slide"
    />
  </Carousel.Item>
</Carousel>
      <div className="Products_itemContainer">

        <Container maxWidth = "xl" >

        <div className={classes.root}>
          <Grid style={{marginLeft:'2.5%'}}  container spacing={3}>
            {products.map((product) => {
              const slug = product.id
              return (
                <Link style={{marginLeft:'4%'}} to={`/product/${slug}`}>
                <Grid data-aos="fade-up" key={product.id} item xs={12} sm={12} md={6} lg={4} xl={4}>
                  <div className = "Products_paper">

                  <Paper   className={classes.paper}>
                    <div className="Producs_box"  style={{ marginTop: "3rem" }} >

                      <div className="Products_image">
                        <img className="image" height = "300" src={`${product.imageUrl}`} alt={product.imageUrl} />
                      </div>

                      <div className="Products_details">

                        <div className="Products_title">
                          <Typography variant = "subtitle1">
                                {product.title}
                          </Typography>
                        </div>

                        <div className="Products_price">
                          <Typography variant = "subtitle1">
                            {product.price}$
                          </Typography>
                        </div>

                      </div>

                      <div className="Products_button">
                        <button disabled={product.added} onClick={() => dispatch(add(product))} > <AddShoppingCartIcon/></button>
                      </div>
                    </div>
                  </Paper>
                  </div>

                </Grid>
                </Link>
              )
            })}
          </Grid>
        </div>
        </Container>

      </div>
    </div>
  )
}

export default Products



