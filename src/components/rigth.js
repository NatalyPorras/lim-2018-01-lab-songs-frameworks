import React from 'react';

const RigthArrow = (props) => {
    return (
        <div>
            <i className="fas fa-arrow-circle-right" onClick={props.gotToNextSlide} disabled={props.property.index === 0}></i>
        </div>
    )
}

export default RigthArrow