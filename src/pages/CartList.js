import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {RemvFromCart} from '../actions/mercadoActions';

function CartList({cartStore, removeFromCart}) {
  const priceMap = cartStore && cartStore.map((p) => p.price)
  const totalValue = priceMap && priceMap.reduce((acc, curr) => acc + curr, 0)
  console.log(totalValue)
  return (
    <div className="cart-list-contianer">
      <Link to="/">Search more products</Link>
      {cartStore && cartStore.map((p, i) => {
        return <div key={i} className="cart-item-card">
          <li>{
            <div>
              <img src={p.thumbnail} alt={p.title} />
              <p>{p.title}</p>
              <p>{`R$ ${p.price}`}</p>
              <button type="button" onClick={() => removeFromCart(p.id)}>X</button>
            </div>
          }</li>
        </div>
      })}
      <br />
      {`Total value: R$ ${totalValue}`}
    </div>
  )
}

const mapStateToProps = (state) => ({
  cartStore: state.mercadoReducer.cartList,
});

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (state) => dispatch(RemvFromCart(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartList)
