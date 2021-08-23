const initialState = {
  input: null,
  icons: null,
  price: null,
  style: null,
}

const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_INPUT":
      return { ...state, input: action.payload }
    case "SET_ICONS":
      return { ...state, icons: action.payload }
    case "SET_PRICE":
      return { ...state, price: action.payload }
    case "SET_STYLE":
      return { ...state, style: action.payload }
    default:
      return state
  }
}

export default inputReducer
