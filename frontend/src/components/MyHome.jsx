import React from 'react';
import { connect } from 'react-redux';

const Header = (props) => {

    return (

        <div className="header">
            <img src={props.image} alt="my home" />
            <p><strong>Number of rooms:</strong> {props.bedrooms} </p>
            <p><strong>Price:</strong> ${props.price} </p>
        </div>
    )
}

const mapStateToProps = state => ({

    image: state.house.image,
    bedrooms: state.house.bedrooms,
    price: state.house.price

})

export default connect(
    mapStateToProps,
    {}
)(Header);