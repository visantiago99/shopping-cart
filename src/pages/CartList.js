import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {RemvFromCart} from '../actions/mercadoActions';
import { IoTrash, IoSearchSharp, IoWalletOutline } from "react-icons/io5";

function CartList({cartStore, removeFromCart}) {
  const priceMap = cartStore && cartStore.map((p) => p.price)
  const totalValue = priceMap && priceMap.reduce((acc, curr) => acc + curr, 0)
  console.log(totalValue)
  return (
    <div className="cart-list-contianer">
      {cartStore && cartStore.map((p, i) => {
        return <div key={i} className="cart-item-card">
          <li>{
            <div>
              <Link to={`/productDetails/${p.id}`}>
              <img src={p.thumbnail} alt={p.title} />
              <p>{p.title}</p>
              <p>{`R$ ${p.price}`}</p>
              </Link>
              <button type="button" onClick={() => removeFromCart(p.id)}><IoTrash /></button>
            </div>
          }</li>
        </div>
      })}
      <br />
      {`Total value: R$ ${Math.round(totalValue, 2)}`}
      <Link to="/"><button type="button">Keep searching <IoSearchSharp /></button></Link>
      <button type="button">Proceed to payment <IoWalletOutline /></button>
    </div>
  )
}

window.onload = () => {
  window.scrollTo(0, 0)
}

const mapStateToProps = (state) => ({
  cartStore: state.mercadoReducer.cartList,
});

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (state) => dispatch(RemvFromCart(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartList)
