import React from 'react';
import {Link} from 'react-router';

const Client = ({

}) => {
    return (
        <div>
            <div>
                <Link to="account-manager/user-profile"><span className="glyphicon glyphicon-chevron-left"></span> back to applications</Link>
                <div className="pull-right">
                    toggle
                    <button type="button" className="btn btn-xs btn-danger left5 pull-right delete-client-btn">
                        &times; Delete
                    </button>
                    <button type="button" className="btn btn-xs btn-success left5 pull-right save-client-btn" >
                        save
                    </button>

                </div>
                <div className="clearfix"></div>
            </div>
        </div>
    );
};

export default Client;
