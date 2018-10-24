import { request } from "../../config";
const { apiUrl, headers } = request;

/**
 * Create a new issue.
 * @param {Object} data
 * @param {string} data.title
 * @param {string} data.description
 * @param {string} data.sprintId
 * @returns {Object} res
 * @returns {boolean} res.success
 * @returns {Object} res.issue
*/
export const create = (data) => {

    console.log("sdk", "create", "params sent", data);

    return fetch(apiUrl + '/issue', {
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
            console.log('An error occurred while creating an issue.', err);
            return {
                success: false
            };
		});
};

/**
 * Update an existing issue.
 * @param {Object} data
 * @param {string} data._id
 * @param {string} data.title
 * @param {string} data.description
 * @param {string} data.sprintId
 * @returns {Object} res
 * @returns {boolean} res.success
 * @returns {Object} res.issue
*/
export const update = (data) => {

    console.log("sdk", "update", "params sent", data);

    return fetch(apiUrl + '/issue', {
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
            console.log('An error occurred while updating an issue.', err);
            return {
                success: false
            };
		});
};

/**
 * Remove an existing issue.
 * @param {Object} data
 * @param {string} data._id
 * @returns {Object} res
 * @returns {boolean} res.success
*/
export const remove = (data) => {

    console.log("sdk", "remove", "params sent", data);

    return fetch(apiUrl + '/issue', {
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
            console.log('An error occurred while removing an issue.', err);
            return {
                success: false
            };
		});
};

