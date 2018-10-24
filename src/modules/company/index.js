import { request } from "../../config";
const { apiUrl, headers } = request;

/**
 * Register a new company.
 * @param {string} title
 * @param {Object} owner
 * @param {string} owner.email
 * @param {string} owner.password
 * @param {string} owner.name
 * @returns {Object} res
 * @returns {boolean} res.success
 * @returns {Object} res.company
 * @returns {Object} res.user
 * @returns {Object} res.project
 * @returns {Object} res.sprint
 */
export const register = (data) => {

    console.log("sdk", "register", "params sent", data);

    return fetch(apiUrl + '/company/register', {
            method: 'POST',
            body: JSON.stringify(data),
            headers
        })
		.then((res) => res.json())
		.then((res) => {
            console.log("sdk", "register", "response", res);
            return res;
		})
		.catch((err) => {
            console.log('An error occurred while registering a company.', err);
            return {
                success: false
            };            
		});
};
