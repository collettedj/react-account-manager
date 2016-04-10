import {request} from './request-promise';

export default class Auth {    
    
    static login(username, password){
        return request({
            type:"POST",
            url:"api/v1/authenticate/login",
            data:{username:username, password:password}
        });
    }

    static logout(){
        return request({
            type:"GET",
            url:"api/v1/authenticate/signout",
            data:{}
        });
    }
    
    static restore(){
        return request({
            type:"GET",
            url:"api/v1/authenticate/user",
            data:{}
        });
    }

}
