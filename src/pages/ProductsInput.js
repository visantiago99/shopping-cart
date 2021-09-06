import React from 'react';
import {connect} from 'react-redux';

function ProductsInput({productsInput}) {
  return (
    <div>
      {productsInput && productsInput.results.map((p, i) => {
        return <div key={i}>{
          <div>
            <p>{p.title}</p>
            <p>{p.price}</p>
            <img src={p.thumbnail} alt="p img" width="200px" />
          </div>
        }</div>
      })}
    </div>
  )
}

const mapStateToProps = (state) => ({
  productsInput: state.mercadoReducer.productsInput
});

export default connect(mapStateToProps)(ProductsInput)