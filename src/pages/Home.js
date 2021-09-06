import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {fetchCategoriesApi, fetchProductInput, fetchProductsCategory} from '../actions/mercadoActions';

function Home({fetchMercado, categoriesMap, fetchProductbCat, fetchPcategory, toggleSearchBar, toggleCategories}) {
  const [inputSearch, setInput] = useState({ searchInput: '' })

  useEffect(() => {
    fetchMercado();
  });
  
  return (
    <div className="home-container">
      <div className={toggleSearchBar ? 'searchbar-active' : 'searchbar'}>
      Search for a specific item:
      <input type="text" name="search" onChange={(e) => setInput({ searchInput: e.target.value })} />
      <Link to="/productsList">
      <button type="button" onClick={() => {
        fetchProductbCat(inputSearch.searchInput)}}>
        search
      </button>
      </Link>
      </div>
      <br />
      <div className={toggleCategories ? 'categories-active' : 'categories'}>
      Select one categorie below:
      {categoriesMap && categoriesMap.map((cat, i) => {
       return <Link to="/productsList">
       <li key={i} onClick={() => fetchPcategory(cat.id)}>{cat.name}</li>
       </Link>
      })}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  categoriesMap: state.mercadoReducer.categories,
  toggleSearchBar: state.mercadoReducer.toggle,
  toggleCategories: state.mercadoReducer.tggCategories,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMercado: (state) => dispatch(fetchCategoriesApi(state)),
  fetchProductbCat: (state) => dispatch(fetchProductInput(state)),
  fetchPcategory: (state) => dispatch(fetchProductsCategory(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home); 