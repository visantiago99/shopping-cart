import React from 'react';
import {connect} from 'react-redux';
import {useHistory, Link} from 'react-router-dom';
import {addToCart} from '../actions/mercadoActions';
import { IoArrowBackCircleOutline } from "react-icons/io5";

function ProductsList({productsInput, addToCart}) {
  const history = useHistory();
  return (
    <div className="p-list-container">
      <button type="button" onClick={() => history.goBack()}><IoArrowBackCircleOutline /></button>
      {productsInput && productsInput.results.map((p, i) => (
        <div key={i} className="p-card">
          <Link to={`/productDetails/${p.id}`}>
            <p>{p.title}</p>
            <p>{`R$ ${p.price}`}</p>
            <img src={p.thumbnail} alt="p img" width="200px" />
            <br />
          </Link>
            <button type="button" onClick={() => addToCart(p)}>Adicionar ao carrinho</button>
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = (state) => ({
  productsInput: state.mercadoReducer.products
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (state) => dispatch(addToCart(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList)