import axios from 'axios'

export const retrieveServices = () => axios.get('https://handy-socal-4b8bea3a3003.herokuapp.com/services')

export const retrieveServicesById = (id) => axios.get('http://localhost:4001/services/:id')

export const retrievePopularServices = () => axios.get('https://handy-socal-4b8bea3a3003.herokuapp.com/services/popular')