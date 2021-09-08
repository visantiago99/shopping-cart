import React from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import {addToCart} from '../actions/mercadoActions';
import { IoArrowBackCircleOutline } from "react-icons/io5";

function ProductDetails({products, addToCart, randomProducts, cartList}) {
  const {id} = useParams();
  const productFiltered = (products && products.results.find((p) => p.id === id)) || (randomProducts && randomProducts.results.find((p) => p.id === id)) || (cartList && cartList.results.find((p) => p.id === id));
  const history = useHistory();
  return (
    <div className="p-detail-container">
      <button type="button" onClick={() => history.goBack()}><IoArrowBackCircleOutline /></button>
      <p>{productFiltered.title}</p>
      <img src={productFiltered.thumbnail} alt="p img"/>
      <p>{`R$ ${productFiltered.price}`}</p>
      <p>{`Avaiabla quantity: ${productFiltered.available_quantity}`}</p>
      <button type="button" onClick={() => addToCart(productFiltered)}>Adicionar ao carrinho</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  products: state.mercadoReducer.products,
  randomProducts: state.mercadoReducer.randomProducts,
  cartList: state.mercadoReducer.cartList,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (state) => dispatch(addToCart(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)
