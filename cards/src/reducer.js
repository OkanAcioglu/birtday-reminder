//! setup function export it and grab it into the context

const reducer = (state, action) => {
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] }
  }
  return state
}
export default reducer

//! Some people prefer to use switch statement...
