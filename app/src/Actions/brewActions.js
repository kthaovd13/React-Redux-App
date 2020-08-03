import axios from 'axios'

export const FETCH_CITIES_DATA = "FETCH_CITY_STATE"
export const FETCH_CITIES_SUCCESS = "FETCH_CITY_SUCCESS"
export const FETCH_CITIES_ERROR = "SET_POSTING_DATA"
export const FETCH_CITY_DATA = "FETCH_CITY_DATA"
export const FETCH_CITY_SUCCESS = "FETCH_CITY_SUCCESS"
export const FETCH_CITY_ERROR = "FETCH_CITY_ERROR"

export const getData = () => dispatch => {
    dispatch({ type: FETCH_CITIES_DATA })
    axios
    .get('https://api.openbrewerydb.org/breweries')
    .then(res => {
        console.log('api', res.data)
        dispatch({ type: FETCH_CITIES_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log("failed to get cities", err.message)
        dispatch({ type: FETCH_CITIES_ERROR, payload: err.message })
    })
}

export const getCity = id => dispatch => {
    dispatch({ type: FETCH_CITY_DATA })
    axios
    .get(id)
    .then(res => console.log(res))
    .catch(err => console.error(err.message))
}