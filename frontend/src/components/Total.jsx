import React from 'react';
import { connect } from 'react-redux';


const Total = (props) => {

    return (
        <div className="total">
            <h1>Your total is: {props.total} </h1>
        </div>
    )
}

const mapStateToProps = state => ({
    
    total: state.total
})



export default connect(
    mapStateToProps,
    {} //fill with action creators
)(Total);