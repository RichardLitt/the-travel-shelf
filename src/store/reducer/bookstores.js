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
    case actionTypes.SELECT_STORE:
      const selectedStoreName = action.name
      const selectedStore = state.stores.filter(el => el.name === selectedStoreName)[0]
      return {
        ...state,
        selectedStore: selectedStore
      }
    default: {
      return state
    }
  }
}

export default reducer
