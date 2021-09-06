const INITIAL_STATE = {
  categories: '',
  productsInput: '',
  productsCat: '',
}

export default function mercadoReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'REQUEST_SUCESS':
      return {
        ...state,
        categories: action.payload,
      }
    case 'REQUEST_INPUT':
      return {
        ...state,
        productsInput: action.payload,
      }
    case 'REQUEST_PCATEGORY':
      return {
        ...state,
        productsCat: action.payload,
      }
    default:
      return state;
  }
}