import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
    return (
        <div 
            id={props.id}
            className="card" 
            style={{ backgroundImage: `url("${props.image}")` }}
            onClick={() => props.addCompare(props.id)}
        >
        </div>  
    );
}

Card.propTypes = {
    id: PropTypes.number,
    image: PropTypes.string,
    color: PropTypes.string
};

export default Card;

