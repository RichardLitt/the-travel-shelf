import * as actionTypes from './actionTypes'

export const setStores = (stores) => {
  return {
    type: actionTypes.SET_STORES,
    stores: stores
  }
}

export const setSelectedStore = (store) => {
  return {
    type: actionTypes.SET_SELECTED_STORE,
    store: store
  }
}

export const selectStore = (name) => {
  return dispatch => {
    fetch('/api/bookstores/' + name)
      .then(res => {
        if (!res.ok) {
          throw Error(res.status)
        } else {
          return res.json()
        }
      })
      .then(store => dispatch(setSelectedStore(store)))
      .catch(error => console.log('Error Fetching Stores', error))
  }
}

export const fetchStores = () => {
  return dispatch => {
    fetch('/api/bookstores')
      .then(res => {
        if (!res.ok) {
          throw Error(res.status)
        } else {
          return res.json()
        }
      })
      .then(stores => dispatch(setStores(stores)))
      .catch(error => console.log('Error Fetching Stores', error))
  }
}
