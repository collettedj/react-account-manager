import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import EditClientApp from './edit-client-app';

let Client = ({
    params,
    clients
}) => {
    const client = clients.find(c => c.id.toString() === params.id);
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
                <EditClientApp client={client}/>
                <div className="clearfix"></div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        clients: state.accountManager.clientApp.clients
    };
};

Client = connect(
    mapStateToProps
)(Client);

export default Client;
