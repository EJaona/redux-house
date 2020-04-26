import React from 'react';
import { connect } from 'react-redux';

import { addFeature } from './actions/actions';

const ExtraFeatures = (props) => {
    

    console.log(props)

    return (
        <div className="extras" style={{border: '1px solid black'}}>
            <h1>Extra Features: </h1>
            {
              props.extraFeatures && props.extraFeatures.map(feature => (
                    <div className="extra-features">
                        <p>Name: {feature.name} </p>
                        <p>Price: {feature.price} </p>
                        <button onClick={ _ => props.addFeature(feature) }>Add Me</button>
                    </div>
                ))
            }
        </div>
    )
}

const mapStateToProps = state => ({

    extraFeatures: state.extraFeatures
})

export default connect(
    mapStateToProps,
    { addFeature }
)(ExtraFeatures);