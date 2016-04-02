import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import EditClientApp from './edit-client-app';
import ToggleButton from './toggle-button';
import {toggleClientEditing} from '../../actions/account-manager/client';

let Client = ({
    params,
    clients,
    toggleEditing,
}) => {
    const client = clients.find(c => c.id.toString() === params.id) || {};
    return (
        <div>
            <div>
                <Link to="account-manager/user-profile"><span className="glyphicon glyphicon-chevron-left"></span> back to applications</Link>
                <div className="pull-right">
                    <ToggleButton 
                        classNames="btn-xs" 
                        on={client.isEditing} 
                        onToggle={() => toggleEditing(client.id)}>
                        Edit
                    </ToggleButton>
                    {' '}
                    <button type="button" className="btn btn-xs btn-danger left5 pull-right delete-client-btn">
                        &times; Delete
                    </button>
                    {' '}
                    <button type="button" className="btn btn-xs btn-success left5 pull-right save-client-btn" >
                        save
                    </button>

                </div>
                <EditClientApp 
                    client={client}
                    isEditing={client.isEditing}
                    onChangeName={()=>null}
                    onChangeDescription={()=>null}
                    onChangeIdentifier={()=>null}
                    onChangeSecret={()=>null}
                />
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

const mapDispatchToProps = dispatch => {
    return {
        toggleEditing: (id) =>{
            dispatch(toggleClientEditing(id));
        } 
    };
};

Client = connect(
    mapStateToProps,
    mapDispatchToProps
)(Client);

export default Client;
