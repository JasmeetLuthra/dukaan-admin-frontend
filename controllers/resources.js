/**
 * Resources api controller
 */
import "../config";
import {axios} from "../DukaanAPI"
import ErrorHandler from '../helpers/ErrorHandler';

/**
 * Get the list of states
 * @return {Promise<Array>} response - Promise with states
 */
const getStates = () => {
    return axios.get(`/api/v2/admin/resources/states`)
}

/**
 * Get the list of colleges
 * @return {Promise<Array>} response - Promise with countries
 */
const getDemographics = () => {
    return axios.get(`/api/v2/admin/resources/demographics`)
};

/**
 * Get the list of countries
 * @return {Promise<Array>} response - Promise with countries
 */
const getCountries = () => {
    return axios.get(`/api/v2/admin/resources/countries`)
};

/**
 * Get the list of centers
 * @return {Promise<Array>} response - Promise with centers
 */
const getAllCenters = () => {
    return axios.get(`/api/v2/admin/resources/centers`)
}

const getCentersByParams = (organizationId, isOffline) => {
    return axios.get(`/api/v2/admin/resources/centers?is_offline=${isOffline}&organization_id=${organizationId}`)
}

const getDemographicsCountriesGradYears = () => {
    const gradYears = [];
    for (let i = 2025; i >= 2000; i--) {
        gradYears.push(i.toString());
    }
    return Promise.all([
        getDemographics(),
        getCountries(),
        getStates(),
        gradYears
    ])
}

module.exports = {
    getStates,
    getCountries,
    getAllCenters,
    getDemographicsCountriesGradYears,
    getCentersByParams
};
