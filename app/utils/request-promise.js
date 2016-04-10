import $ from 'jquery';

export const request = (options)  => {
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
};


