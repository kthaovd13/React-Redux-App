import React from 'react'
import { connect } from 'react-redux'

import { getData, getCity } from '../Actions/brewActions'
import CityData from './CityData'

const BrewSearch = props => {
    if (props.isFetching) {
        return <div>Fetching Cities.....</div>;
    }

    const handleCityChange = e => {
        console.log(e.target.value)
        //props.getCity(e.target.value)
    }

    return (
        <>
            <button onClick={ () => props.getData()}>Select Your City</button>
            <div style={{ color: "red" }}>{props.error}</div>
            <select onChange={handleCityChange}>
                <option disabled selected>Select City</option>
            {props.cities.map(brewery => {
                return <option key={brewery.id} value={brewery.street}>{brewery.city}</option>
            })}
            </select>
            <CityData />
        </>
    )
};

const mapStateToProps = state => {
    return {
        cities: state.cities,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(
    mapStateToProps, 
    { getData, getCity }
    )(BrewSearch)