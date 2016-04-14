import React from 'react';

let EditClientApp = ({
    isEditing,
    fields: {name, description, clientIdentifier, secret},
    handleSubmit,
    children,
}) => {

    const nameControl = isEditing ?
        <input className="form-control" {...name} />:
        <div className="form-control-static">{name.value}</div>;

    const descriptionControl = isEditing ?
        <input className="form-control" {...description}/>:
        <div className="form-control-static">{description.value}</div>;

    const identifierControl = isEditing ?
        <input className="form-control" {...clientIdentifier}/>:
        <div className="form-control-static">{clientIdentifier.value}</div>;

    const secretControl = isEditing ?
        <input className="form-control" {...secret}/>:
        <div className="form-control-static">{secret.value}</div>;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div className="form-group client-name ">
                    <label className="control-label">Name
                        <span className="err-msg"></span>
                    </label>
                    {nameControl}
                </div>
                <div className="form-group client-description ">
                    <label className="control-label">Description
                        <span className="err-msg"></span>
                    </label>
                    {descriptionControl}
                </div>
                <div className="form-group client-identifier ">
                    <label className="control-label">Identifier
                        <span className="err-msg"></span>
                    </label>
                    {identifierControl}
                </div>
                <div className="form-group client-secret ">
                    <label className="control-label">Secret
                        <span className="err-msg"></span>
                    </label>
                    {secretControl}
                </div>
            </div>
            {children}
        </form>
    );
};

export default EditClientApp;
