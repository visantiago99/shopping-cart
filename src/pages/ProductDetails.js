import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

function ProductDetails({products}) {
  const {id} = useParams();
  const productFiltered = products && products.results.find((p) => p.id === id)
  
  return (
    <div>
      <p>{productFiltered.title}</p>
      <img src={productFiltered.thumbnail} alt="p img" width="300px" />
      <p>{`R$ ${productFiltered.price}`}</p>
      <p>{`Avaiabla quantity: ${productFiltered.available_quantity}`}</p>
      <button type="button">Adicionar ao carrinho</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  products: state.mercadoReducer.products
});

export default connect(mapStateToProps)(ProductDetails)
