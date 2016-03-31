import React from 'react';

const EditClientApp = ({
    
}) => {
    return (
        <div>
            <div className="form-group client-name ">
                <label className="control-label">Name
                    <span className="err-msg"></span>
                </label>
                    <input className="form-control"/>
                    <div className="form-control-static"></div>
            </div>
            <div className="form-group client-description ">
                <label className="control-label">Description
                    <span className="err-msg"></span>
                </label>
                    <input className="form-control"/>
                    <div className="form-control-static"></div>
            </div>
            <div className="form-group client-identifier ">
                <label className="control-label">Identifier
                    <span className="err-msg"></span>
                </label>
                    <input className="form-control"/>
                    <div className="form-control-static"></div>
            </div>
            <div className="form-group client-secret ">
                <label className="control-label">Secret
                    <span className="err-msg"></span>
                </label>
                    <input className="form-control"/>
                    <div className="form-control-static"></div>
            </div>
        </div>
    );
};

export default EditClientApp;
