import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {fetchCategoriesApi, fetchProductInput, fetchProductsCategory} from '../actions/mercadoActions';

function Home({fetchMercado, categoriesMap, fetchProductbCat, fetchPcategory}) {
  const [inputSearch, setInput] = useState({ searchInput: '' })

  useEffect(() => {
    fetchMercado();
  });
  
  return (
    <div>
      Search for a specific item:
      <input type="text" name="search" onChange={(e) => setInput({ searchInput: e.target.value })} />
      <Link to="/productsList">
      <button type="button" onClick={() => {
        fetchProductbCat(inputSearch.searchInput)}}>
        search
      </button>
      </Link>
      <br />
      Or select one categorie below:
      {categoriesMap && categoriesMap.map((cat, i) => {
       return <Link to="/productsList">
       <li key={i} onClick={() => fetchPcategory(cat.id)}>{cat.name}</li>
       </Link>
      })}
    </div>
  )
}

const mapStateToProps = (state) => ({
  categoriesMap: state.mercadoReducer.categories
});

const mapDispatchToProps = (dispatch) => ({
  fetchMercado: (state) => dispatch(fetchCategoriesApi(state)),
  fetchProductbCat: (state) => dispatch(fetchProductInput(state)),
  fetchPcategory: (state) => dispatch(fetchProductsCategory(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home); 