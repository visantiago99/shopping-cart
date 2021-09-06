import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

function ProductsList({productsInput}) {
  return (
    <div>
      {productsInput && productsInput.results.map((p, i) => {
        return <div key={i}>{
          <Link to={`/productDetails/${p.id}`}>
          <div>
            <p>{p.title}</p>
            <p>{p.price}</p>
            <img src={p.thumbnail} alt="p img" width="200px" />
            <button type="button">Adicionar ao carrinho</button>
          </div>
          </Link>
        }</div>
      })}
    </div>
  )
}

const mapStateToProps = (state) => ({
  productsInput: state.mercadoReducer.products
});

export default connect(mapStateToProps)(ProductsList)