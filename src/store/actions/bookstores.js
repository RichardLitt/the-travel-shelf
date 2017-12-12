import * as actionTypes from './actionTypes'

export const setStores = (stores) => {
  return {
    type: actionTypes.SET_STORES,
    stores: stores
  }
}

export const selectStore = (name) => {
  return {
    type: actionTypes.SELECT_STORE,
    name: name
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


