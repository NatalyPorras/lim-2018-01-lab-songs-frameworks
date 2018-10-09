import React from 'react';

const LeftArrow = (props) => {
    
    return (
        <div>
            <i className="fas fa-arrow-circle-left" onClick={props.gotToPrevSlide} disabled={props.property.index === props.data.properties.length-1}></i>
        </div>
    )
}

export default LeftArrow