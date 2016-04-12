import {request} from '../../utils/request-promise';

export default class ClientRepo {

    static getClientsForUser(userId){
        const url = `api/v1/clients/${client._id}`;
        return request({
            type:"GET",
            url,
            data:{
                client
            }
        });
    }
    
    static save(client){
        const url = `api/v1/clients/${client._id}`;
        return request({
            type:"PUT",
            url,
            data:{
                client
            }
        });
    }

}
