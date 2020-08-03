import {
FETCH_CITIES_DATA,
FETCH_CITIES_SUCCESS,
FETCH_CITIES_ERROR,
FETCH_CITY_DATA,
FETCH_CITY_SUCCESS,
FETCH_CITY_ERROR
} from '../Actions/brewActions'

const initialState = {
    cities: [],
    isFetching: false,
    error: '',
    chosenCity: {}
}

export const brewReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_CITIES_DATA:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_CITIES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                cities: action.payload,
                error: ""
            }
        case FETCH_CITIES_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state
    }
};