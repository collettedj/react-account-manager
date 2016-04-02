import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import Modal from 'react-modal';
import EditClientApp from './edit-client-app';
import ClientList from './client-list';
import {addClient} from '../../actions/account-manager/client';
import {
    toggleOpen,
    setNewClientFields,
    clearNewClientFields,
} from '../../actions/account-manager/add-client-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    boxShadow             : '10px 10px 5px #888888',
    width                : '450px',
  }
};

let UserProfileIndex = ({
    modalIsOpen,
    newClient,
    clients,
    toggleModal,
    addClient,
    setNewClientFields,
    children
}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        addClient(newClient);
    };

    const newClientNameChange = (e) => {
        setNewClientFields({ name: e.target.value });
    };
    
    const newClientDescriptionChange = (e) => {
        setNewClientFields({ description: e.target.value });
    };

    const newClientIdentifierChange = (e) => {
        setNewClientFields({ identifier: e.target.value });
    };

    const newClientSecretChange = (e) => {
        setNewClientFields({ secret: e.target.value });
    };

    return (
        <div>
            <div>
                <div className="pull-right">
                    <button type="button" className="btn btn-xs btn-success pull-right"
                        onClick={toggleModal}>
                        <span className="glyphicon glyphicon-plus"></span> new
                    </button>
                </div>
                <div className="clearfix"></div>
            </div>

            <br/>

            <ClientList clients={clients}/> 

            {children}

            <Modal
                isOpen={modalIsOpen}
                style={customStyles}>
                    <div className="client-modal">
                        <form onSubmit={handleSubmit}>
                            <h3 className="text-info">New Client Application</h3>
                            <hr/>
                            <EditClientApp 
                                client={newClient}
                                isEditing={true}
                                onChangeName={newClientNameChange}
                                onChangeDescription={newClientDescriptionChange}
                                onChangeIdentifier={newClientIdentifierChange}
                                onChangeSecret={newClientSecretChange}
                            />
                            <hr/>
                            <div className="pull-right">
                                <button className="btn btn-default btn-sm right10" type="submit" >Save</button>
                                <button className="btn btn-default btn-sm" type="button"
                                    onClick={toggleModal}>close</button>
                            </div>
                        </form>
                    </div>
                </Modal>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        modalIsOpen: state.accountManager.clientApp.addClientModal.isOpen,
        clients: state.accountManager.clientApp.clients,
        newClient: state.accountManager.clientApp.addClientModal.newClient,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        toggleModal: () => {
            dispatch(toggleOpen()); 
            dispatch(clearNewClientFields());
        },
        addClient: (client) => {
            dispatch(addClient(client)); 
            dispatch(toggleOpen());
            dispatch(clearNewClientFields());
        },
        setNewClientFields: (newClient) => {
            dispatch(setNewClientFields(newClient));
        },
    };
};

UserProfileIndex = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserProfileIndex);

export default UserProfileIndex;
