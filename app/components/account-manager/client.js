import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import EditClientApp from './edit-client-app';
import ToggleButton from './toggle-button';
import {toggleClientEditing, setCurrentClient} from '../../actions/account-manager/client';

const EditExistingClientApp = reduxForm({
    form: 'Contact',
    fields: ['name', 'description', 'identifier', 'secret'],
}, state => {
    const clientApp = state.accountManager.clientApp;
    const clients = clientApp.clients;
    const currentClientId = clientApp.currentClientId;

    return {
        initialValues: clients.find(c => c.id.toString() === currentClientId) || {}
    };
})(EditClientApp);

class ClientClass extends Component{
	constructor(props, context){
		super(props,context);
	}

	componentWillMount() {
        const {
            params,
            setCurrentClient
        } = this.props;

        setCurrentClient(this.props.params.id);
		// loadData(this.props);
	}

	// componentWillReceiveProps(nextProps) {
	// 	if (nextProps.fullName !== this.props.fullName) {
	// 	  loadData(nextProps);
	// 	}
	// }

    render(){
        const {
            params,
            currentClientId,
            isEditing,
            toggleEditing,
            setCurrentClient,
        } = this.props;

        if(typeof(currentClientId) === "undefined" ||  params.id !== currentClientId.toString()){
            return <div></div>;
        }

        return (
            <div>
                <div>
                    <Link to="account-manager/user-profile"><span className="glyphicon glyphicon-chevron-left"></span> back to applications</Link>
                    <div className="pull-right">
                        <ToggleButton 
                            classNames="btn-xs" 
                            on={isEditing} 
                            onToggle={() => toggleEditing(currentClientId)}>
                            Edit
                        </ToggleButton>
                        {' '}
                        <button type="button" className="btn btn-xs btn-danger left5 pull-right delete-client-btn">
                            &times; Delete
                        </button>
                        {' '}
                        
                    </div>
                    <EditExistingClientApp 
                        isEditing={isEditing}
                        onSubmit={() => console.log("submitted the form")} >
                        <hr/>
                        <button type="submit" className="btn btn-xs btn-success left5 pull-right save-client-btn" >
                            save
                        </button>
                    </EditExistingClientApp>
                    <div className="clearfix"></div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const clientApp = state.accountManager.clientApp;
    const clients = clientApp.clients;
    const currentClientId = clientApp.currentClientId;
    const client = clients.find(c => c.id.toString() === currentClientId) || { isEditing: false };

    return {
        currentClientId: client.id,
        isEditing: client.isEditing,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        toggleEditing: (id) =>{
            dispatch(toggleClientEditing(id));
        },

        setCurrentClient: id => {
            dispatch(setCurrentClient(id));
        },
    };
};

const Client = connect(
    mapStateToProps,
    mapDispatchToProps
)(ClientClass);

export default Client;
