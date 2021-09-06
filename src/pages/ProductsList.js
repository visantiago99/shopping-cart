import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {addToCart} from '../actions/mercadoActions';

function ProductsList({productsInput, addToCart}) {
  return (
    <div>
      <Link to="/">Back</Link>
      {productsInput && productsInput.results.map((p, i) => {
        return <div key={i}>{
          <Link to={`/productDetails/${p.id}`}>
            <p>{p.title}</p>
            <p>{p.price}</p>
            <img src={p.thumbnail} alt="p img" width="200px" />
            <br />
            <button type="button" onClick={() => addToCart(p)}>Adicionar ao carrinho</button>
          </Link>
        }</div>
      })}
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