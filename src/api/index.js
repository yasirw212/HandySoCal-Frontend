import axios from 'axios'
// axios.defaults.withCredentials = true

export const retrieveServices = () => axios.get('https://handysocal-backend-047adc2bc46f.herokuapp.com/services')

export const retrieveServicesById = (id) => axios.get('https://handysocal-backend-047adc2bc46f.herokuapp.com/services/:id')

export const retrievePopularServices = () => axios.get('https://handysocal-backend-047adc2bc46f.herokuapp.com/services/popular')
