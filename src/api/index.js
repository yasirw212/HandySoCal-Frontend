import axios from 'axios'

// export const retrieveServices = () => axios.get('https://handysocal-backend-047adc2bc46f.herokuapp.com/services')
export const retrieveServices = () => axios.get('http://localhost:4001/services')

// export const retrieveServicesById = (id) => axios.get('https://handysocal-backend-047adc2bc46f.herokuapp.com/services/:id')
export const retrieveServicesById = (id) => axios.get('http://localhost:4001/services')

// export const retrievePopularServices = () => axios.get('https://handysocal-backend-047adc2bc46f.herokuapp.com/services/popular')
export const retrievePopularServices = () => axios.get('http://localhost:4001/services/popular')