import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { GrHome } from "react-icons/gr";
import { connect } from 'react-redux';
import {toogleSearch, toogleCategories} from '../actions/mercadoActions';

function Header({cartList, toggleSearchBar, toogleCategories}) {
  return (
    <div className="header">
      <div>
      <Link to="/"><GrHome /></Link>
      </div>
      <div onClick={toggleSearchBar}>
      <Link to="/">
        <AiOutlineSearch />
      </Link>
      </div>
      <div onClick={toogleCategories}>
        <Link to="/">
        categories
        </Link>
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

const mapDispatchToProps = (dispatch) => ({
  toggleSearchBar: () => dispatch(toogleSearch()),
  toogleCategories: () => dispatch(toogleCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)