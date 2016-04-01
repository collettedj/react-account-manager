import React from 'react';
import {Link} from 'react-router';

const ClientList = ({
    clients
}) => {
    return (
        <ul className="list-group client-list">
            {clients.map(client => {
                return (
                    <li className="list-group-item" key={client.id}>
                        <Link to="/account-manager/user-profile/client/">
                            {client.id}-{client.name}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default ClientList;
