import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineSearch, AiOutlineUnorderedList } from "react-icons/ai";
import { GrHome } from "react-icons/gr";
import { connect } from 'react-redux';
import {toogleSearch, toogleCategories, toogleOff, fetchCategoriesApi,} from '../actions/mercadoActions';

function Header({cartList, toggleSearchBar, toogleCategories, tggleOff, fetchMercado}) {
  
  useEffect(() => {
    fetchMercado();
  });

  return (
    <div className="header">
      <div onClick={() => {
        window.scrollTo(0, 0)
        tggleOff()
      }}>
      <Link to="/"><GrHome /></Link>
      </div>
      <div onClick={() => {
        window.scrollTo(0, 0)
        toogleCategories()
      }}>
        <Link to="/">
        <AiOutlineUnorderedList />
        </Link>
      </div>
      <div onClick={() => {
        window.scrollTo(0, 0)
        toggleSearchBar()
      }}>
      <Link to="/">
        <AiOutlineSearch />
      </Link>
      </div>
      <div onClick={window.scrollTo(0, 0)}>
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
  tggleOff: () => dispatch(toogleOff()),
  fetchMercado: (state) => dispatch(fetchCategoriesApi(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)