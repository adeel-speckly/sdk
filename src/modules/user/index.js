import { request } from "../../config";
const { apiUrl, headers } = request;

/**
 * Sign in a user.
 * @param {string} email
 * @param {string} password
 * @returns {Object} res
 * @returns {boolean} res.success
 * @returns {Object} res.user
*/
export const signIn = (data) => {

    console.log("sdk", "signIn", "params sent", data);

    return fetch(apiUrl + '/user/signin', {
            method: 'POST',
            body: JSON.stringify(data),
            headers
        })
		.then((res) => res.json())
		.then((res) => {
            console.log("sdk", "signIn", "response", res);
            return res;
		})
		.catch((err) => {
            console.log('An error occurred while signing in a user.', err);
            return {
                success: false
            };
		});
};

/**
 * Create a new user.
 * @param {Object} data
 * @param {string} data.name
 * @param {string} data.email
 * @param {string} data.password
 * @param {string} data.companyId
 * @returns {Object} res
 * @returns {boolean} res.success
 * @returns {Object} res.user
*/
export const create = (data) => {

    console.log("sdk", "create", "params sent", data);

    return fetch(apiUrl + '/user', {
            method: 'PUT',
            body: JSON.stringify(data),
            headers
        })
		.then((res) => res.json())
		.then((res) => {
            console.log("sdk", "create", "response", res);
            return res;
		})
		.catch((err) => {
            console.log('An error occurred while creating a user.', err);
            return {
                success: false
            };
		});
};

/**
 * Update an existing user.
 * @param {Object} data
 * @param {string} data._id
 * @param {string} data.name
 * @param {string} data.email
 * @param {string} data.password
 * @param {string} data.companyId
 * @returns {Object} res
 * @returns {boolean} res.success
 * @returns {Object} res.user
*/
export const update = (data) => {

    console.log("sdk", "update", "params sent", data);

    return fetch(apiUrl + '/user', {
            method: 'POST',
            body: JSON.stringify(data),
            headers
        })
		.then((res) => res.json())
		.then((res) => {
            console.log("sdk", "update", "response", res);
            return res;
		})
		.catch((err) => {
            console.log('An error occurred while updating a user.', err);
            return {
                success: false
            };
		});
};

/**
 * Remove an existing user.
 * @param {Object} data
 * @param {string} data._id
 * @returns {Object} res
 * @returns {boolean} res.success
*/
export const remove = (data) => {

    console.log("sdk", "remove", "params sent", data);

    return fetch(apiUrl + '/user', {
            method: 'DELETE',
            body: JSON.stringify(data),
            headers
        })
		.then((res) => res.json())
		.then((res) => {
            console.log("sdk", "remove", "response", res);
            return res;
		})
		.catch((err) => {
            console.log('An error occurred while removing a user.', err);
            return {
                success: false
            };
		});
};