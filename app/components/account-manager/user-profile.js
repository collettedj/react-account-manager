import React from 'react';

const UserProfile = (props) => {
    return (
        <div>
            <h3 className="text-info">User</h3>
            <div>
                <div className="pull-right">
                    toggle
                    <button type="button" className="btn btn-xs btn-success pull-right user-save-btn">save</button>
                </div>
                <div className="clearfix"></div>
            </div>

            <div className="form-group user-first-name">
                <label className="control-label">First Name
                    <span className="err-msg"></span>
                </label>
                <input className="form-control"/>
                <div className="form-control-static"></div>
            </div>
            <div className="form-group user-last-name">
                <label className="control-label">Last Name
                    <span className="err-msg"></span>
                </label>
                <input className="form-control"/>
                <div className="form-control-static"></div>
            </div>

            <hr/>
            <h3 className="text-info">Applications</h3>
            {props.children}
        </div>
    );
};

export default UserProfile;
