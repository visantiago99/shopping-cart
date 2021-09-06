const INITIAL_STATE = {
  categories: '',
  products: '',
  cartList: [],
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
        products: action.payload,
      }
    case 'REQUEST_PCATEGORY':
      return {
        ...state,
        products: action.payload,
      }
    case 'ADD_CART':
      return {
        ...state,
        cartList: [...state.cartList, action.payload]
      }
    case 'REM_CART':
      return {
        ...state,
        cartList: [...state.cartList.filter((p) => p.id !== action.payload)]
      }
    default:
      return state;
  }
}