const INITIAL_STATE = {
  randomProducts: '',
  categories: '',
  products: '',
  cartList: [],
  toggle: false,
  tggCategories: false,
}

export default function mercadoReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'REQUEST_RNG':
      return {
        ...state,
        randomProducts: action.payload,
      }
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
    case 'TGG_SEARCH':
      return {
        ...state,
        toggle: !state.toggle,
        tggCategories: false,
      }
    case 'TGG_CATEGORY':
      return {
        ...state,
        tggCategories: !state.tggCategories,
        toggle: false,
      }
    case 'TGG_OFF':
      return {
        ...state,
        toggle: false,
        tggCategories: false,
      }
    default:
      return state;
  }
}