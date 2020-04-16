import qs from 'qs';
import {getRequestToken} from "../jwt/token";

const API_LOGIN_PATH = 'login';

const doLogin = ({username = '', password = ''} = {}) => {
    return axios({
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            ...getRequestToken()
        },
        data: qs.stringify({
            username,
            password,
        }),
        url: API_LOGIN_PATH,
    });
};

export default doLogin;