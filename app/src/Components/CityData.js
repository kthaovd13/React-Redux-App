import React from "react"
import { connect } from "react-redux"

const CityData = props => {
    return (
        <>
            {props.chosenCity ? (
            <div>
            name: {props.chosenCity.name}
            <br/>
            street: {props.chosenCity.street}
            <br/>
            phone: {props.chosenCity.phone}
            <br/>
            url: {props.chosenCity.website_url}
            </div>
            ) : (
                <></>
            )}
        </>
    )};

const mapStateToProps= state => {
    return {
        chosenCity: state.chosenCity
    }
}

export default connect(
    mapStateToProps,
    {}
)(CityData)