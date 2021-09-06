import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GrHome } from "react-icons/gr";
import { connect } from 'react-redux';

function Header({cartList}) {
  return (
    <div className="header">
      <div>
      <Link to="/"><GrHome /></Link>
      </div>
      <div>
      <Link to="/cart"><AiOutlineShoppingCart /></Link>
      <p>{cartList.length}</p>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cartList: state.mercadoReducer.cartList,
});

export default connect(mapStateToProps)(Header)