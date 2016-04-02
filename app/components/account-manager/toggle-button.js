import React from 'react';

const ToggleButton = ({
    on=false,
    classNames="",
    onToggle= () => null,
    children
}) => {
    const buttonClass= on ? "btn-success":"btn-danger";
    return (
        <button 
            type="button" 
            className={`btn ${buttonClass} ${classNames}`}
            onClick={onToggle}
        >
            {children}
        </button>
    );
};

export default ToggleButton;
