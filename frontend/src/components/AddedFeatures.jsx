import React from 'react'
import { connect } from 'react-redux';

import { removeFeature } from './actions/actions';


const AddedFeatures = (props) => {

    
    return (

        <div className="added" style={{border: '1px solid black'}}>
            <h1>Added Features: </h1>
            {
                props.addedFeatures.map(feature => (
                    <div className="added-features">
                        <p>Name: {feature.name} </p>
                        <p>Price: {feature.price} </p>
                        <button onClick={ _ => props.removeFeature(feature)}>Remove me</button>
                    </div>
                ))
            }
        </div>
    )
}

const mapStateToProps = state => ({

    addedFeatures: state.house.additions

})

export default connect(
    mapStateToProps,
    { removeFeature }
)(AddedFeatures);