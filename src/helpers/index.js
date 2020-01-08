export const getQueryString = (params)=> {
    let str = '';

    Object.keys(params).forEach((key, idx) => {
        str += key + '=' + params[key];
        if (idx < Object.keys(params).length - 1) str += '&';
    });

    return str;
};


export const mapObject = (object, callback) => {
    return Object.keys(object).map(function (key) {
        return callback(key, object[key]);
    });
};
