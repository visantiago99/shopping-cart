import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {fetchProductInput, fetchProductsCategory, fetchRngInput, addToCart} from '../actions/mercadoActions';

function Home({categoriesMap, fetchProductbCat, fetchPcategory, toggleSearchBar, toggleCategories, fetchRngProducts, rngProducts, addToCart}) {
  const [inputSearch, setInput] = useState({ searchInput: '' })
  const rngNumb = Number((Math.round(Math.random() * 100)));
  useEffect(() => {
    fetchRngProducts(rngNumb);
  }, [fetchRngProducts])

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
      <div className="home-rng-card">
        {rngProducts && rngProducts.results.map((p, i) => (
          <div key={i} className="p-card p-home">
            <Link to={`/productDetails/${p.id}`}>
            <p>{p.title}</p>
            <img src={p.thumbnail} alt={p.title} />
            <p>{`R$ ${p.price}`}</p>
            </Link>
            <button type="button" onClick={() => addToCart(p)}>Adicionar ao carrinho</button>
          </div>
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  categoriesMap: state.mercadoReducer.categories,
  toggleSearchBar: state.mercadoReducer.toggle,
  toggleCategories: state.mercadoReducer.tggCategories,
  rngProducts: state.mercadoReducer.randomProducts,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProductbCat: (state) => dispatch(fetchProductInput(state)),
  fetchPcategory: (state) => dispatch(fetchProductsCategory(state)),
  fetchRngProducts: (state) => dispatch(fetchRngInput(state)),
  addToCart: (state) => dispatch(addToCart(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home); 