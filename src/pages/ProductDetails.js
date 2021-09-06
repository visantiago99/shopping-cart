import React from 'react';
import { connect } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import {addToCart} from '../actions/mercadoActions';
import { IoArrowBackCircleOutline } from "react-icons/io5";

function ProductDetails({products, addToCart}) {
  const {id} = useParams();
  const productFiltered = products && products.results.find((p) => p.id === id)
  
  return (
    <div className="p-detail-container">
      <Link to="/productsList"><IoArrowBackCircleOutline /></Link>
      <p>{productFiltered.title}</p>
      <img src={productFiltered.thumbnail} alt="p img" width="300px" />
      <p>{`R$ ${productFiltered.price}`}</p>
      <p>{`Avaiabla quantity: ${productFiltered.available_quantity}`}</p>
      <button type="button" onClick={() => addToCart(productFiltered)}>Adicionar ao carrinho</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  products: state.mercadoReducer.products
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (state) => dispatch(addToCart(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)
