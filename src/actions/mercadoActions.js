export const requestSucess = (payload) => ({
  type: 'REQUEST_SUCESS',
  payload,
});

export const fetchCategoriesApi = () => (dispatch) => fetch('https://api.mercadolibre.com/sites/MLB/categories')
  .then((result) => result.json())
  .then((resJson) => dispatch(requestSucess(resJson)))

export const requestScssInput = (payload) => ({
  type: 'REQUEST_INPUT',
  payload,
});

export const fetchProductInput = (inpt) => (dispatch) => {
  console.log(inpt)
  return fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${inpt}`)
  .then((result) => result.json())
  .then((resJson) => dispatch(requestScssInput(resJson)))
  
}

export const requestPcategory = (payload) => ({
  type: 'REQUEST_PCATEGORY',
  payload,
});

export const fetchProductsCategory = (id) => (dispatch) => fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${id}`)
  .then((result) => result.json())
  .then((resJson) => dispatch(requestPcategory(resJson)))