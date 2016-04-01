import React from 'react';

const EditClientApp = ({
    client ,
    onChangeName,
    onChangeDescription,
    onChangeIdentifier,
    onChangeSecret,
}) => {
    return (
        <div>
            <div className="form-group client-name ">
                <label className="control-label">Name
                    <span className="err-msg"></span>
                </label>
                <input className="form-control" value={client.name} onChange={onChangeName}/>
                <div className="form-control-static">{client.name}</div>
            </div>
            <div className="form-group client-description ">
                <label className="control-label">Description
                    <span className="err-msg"></span>
                </label>
                <input className="form-control" value={client.description} onChange={onChangeDescription}/>
                <div className="form-control-static">{client.description}</div>
            </div>
            <div className="form-group client-identifier ">
                <label className="control-label">Identifier
                    <span className="err-msg"></span>
                </label>
                <input className="form-control" value={client.identifier} onChange={onChangeIdentifier}/>
                <div className="form-control-static">{client.identifier}</div>
            </div>
            <div className="form-group client-secret ">
                <label className="control-label">Secret
                    <span className="err-msg"></span>
                </label>
                <input className="form-control" value={client.secret} onChange={onChangeSecret}/>
                <div className="form-control-static">{client.secret}</div>
            </div>
        </div>
    );
};

export default EditClientApp;
