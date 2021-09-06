import React from 'react'
import { connect } from 'react-redux'

function ProductsCategory({productsCat}) {
  return (
    <div>
      {productsCat && productsCat.results.map((p, i) => {
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
  productsCat: state.mercadoReducer.productsCat
});

export default connect(mapStateToProps)(ProductsCategory)
