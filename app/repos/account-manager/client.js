import {request} from '../../utils/request-promise';

export default class ClientRepo {

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

    static create(client){
        const url = `api/v1/clients`;
        return request({
            type:"POST",
            url,
            data:{
                client
            }
        });
    }

}
