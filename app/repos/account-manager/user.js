import {request} from '../../utils/request-promise';

export default class UserRepo {

    static getUser(userId){
        const url = `api/v1/users/${userId}`;
        return request({
            type:"GET",
            url,
        });
    }

    static save(user){
        const url = `api/v1/users/${user._id}`;
        return request({
            type:"PUT",
            url,
            data:{
                user
            }
        });
    }
}
