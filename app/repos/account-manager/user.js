import {request} from '../../utils/request-promise';

export default class UserRepo {
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
