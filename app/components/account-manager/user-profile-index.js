import React, {Component} from 'react';
import {Link} from 'react-router';
import Modal from 'react-modal';
import EditClientApp from './edit-client-app';

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

class UserProfileIndex extends Component{

    constructor(props, context){
        super(props, context);
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
        this.state={
            modalIsOpen:false
        };
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render(){
        return (
            <div>
                <div>
                    <div className="pull-right">
                        <button type="button" className="btn btn-xs btn-success pull-right"
                            onClick={this.openModal}>
                            <span className="glyphicon glyphicon-plus"></span> new
                        </button>
                    </div>
                    <div className="clearfix"></div>
                </div>

                <br/>

                <ul className="list-group client-list">
                    <li className="list-group-item"><Link to="/account-manager/user-profile/client/">Client Name</Link></li>
                </ul>

                {this.props.children}

                <Modal
                    isOpen={this.state.modalIsOpen}
                    style={customStyles}>
                        <div className="client-modal">
                            <form >
                                <h3 className="text-info">New Client Application</h3>
                                <hr/>
                                    <EditClientApp/>
                                <hr/>
                                <div className="pull-right">
                                    <button className="btn btn-default btn-sm right10" type="submit">Save</button>
                                    <button className="btn btn-default btn-sm" type="button"
                                        onClick={this.closeModal}>close</button>
                                </div>
                            </form>
                        </div>
                    </Modal>
            </div>
        );
    }
};

export default UserProfileIndex;
