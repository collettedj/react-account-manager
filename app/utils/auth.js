import $ from 'jquery';

export default class Auth {    
    
    static request(options) {
        var request = new Promise(function (resolve, reject) {
            options.success = function (response) {
                resolve(response);
            };

            options.error = function (reason) {
                reject(reason);
            };

            return $.ajax(options);
        });

        return request;
    }

    static login(username, password){
        return Auth.request({
            type:"POST",
            url:"api/v1/authenticate/login",
            data:{username:username, password:password}
        });
    }

    static logout(){
        return Auth.request({
            type:"GET",
            url:"api/v1/authenticate/signout",
            data:{}
        });
    }



}
