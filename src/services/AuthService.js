
import {AuthHttpHeader} from '../shared/helper/AuthHttpHeader';

const API_URL = "http://localhost:3000";
export const AuthService = {
     login,
    logout,
    register,
    getAllUser,
    getUserById,
    updateUser,
    deleteUser
};

function login(username, password) {
// const userDetail = localStorage.getItem(username);
//     if ( userDetail !== null) {
//         return userDetail
//     } else {
//         return null;
//     }

// For this code to work I need API's Hosting so currently storing on localstorage

const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
};

return fetch(`${API_URL}/users/authenticate`, requestOptions)
    .then(handleResponse)
    .then(user => {
        localStorage.setItem('user', JSON.stringify(user));
        return user;
    });
}

function logout() {
    localStorage.removeItem('user');
}

function register(user) {
    // const userDetails = localStorage.getItem(user.username);
    // if ( userDetails == null) {
    //     localStorage.setItem(user.username,JSON.stringify(user));
    //     return user
    // } else {
    //     return null; 
    // }

// For this code to work I need API's Hosting so currently storing on localstorage

const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
};
return fetch(`${API_URL}/users/register`, requestOptions).then(handleResponse);
}

function getAllUser() {
    const requestOptions = {
        method: 'GET',
        headers: AuthHttpHeader()
    };
    return fetch(`${API_URL}/users`, requestOptions).then(handleResponse);
}


function getUserById(id) {
    const requestOptions = {
        method: 'GET',
        headers: AuthHttpHeader()
    };
    return fetch(`${API_URL}/users/${id}`, requestOptions).then(handleResponse);
}


function updateUser(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...AuthHttpHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    return fetch(`${API_URL}/users/${user.id}`, requestOptions).then(handleResponse);;
}
function deleteUser(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: AuthHttpHeader()
    };
    return fetch(`${API_URL}/users/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                window.location.reload(true);
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}