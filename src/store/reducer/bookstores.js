import * as actionTypes from '../actions/actionTypes'

const initialState = {
  stores: null,
  selectedStore: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_STORES:
      return {
        ...state,
        stores: action.stores
      }
    case actionTypes.SET_SELECTED_STORE:
      return {
        ...state,
        selectedStore: action.store
      }
    default: {
      return state
    }
  }
}

export default reducer
