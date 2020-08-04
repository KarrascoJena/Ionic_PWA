import config from '../config'
import axios from 'axios';

const API = {
  login: async (email, password) => {
    return axios.post(`${config.serverAddress}/Accounts/Login`, { identifier: email, password: password}).then((res) => {
      if(res.status == 200) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.result.token.accessToken}`;
        return {status: res.status, data: res.data.result}
      }
    }).catch((error) => {
      return {status: 400, data: error.response.data.responseException}
    })
  },

  register: async (fullName, userName, password, email, phoneNumber) => {
    return axios.post(`${config.serverAddress}/Accounts/Register`, { fullName: fullName, userName: userName, password: password, email: email, phoneNumber: phoneNumber}).then((res) => {
      if(res.status == 200) return {status: res.status, data: res.data.result}
    }).catch((error) => {
      return {status: 400, data: error.response.data.responseException}
    })
  },

  forgetPassword: async (email) => {
    return axios.post(`${config.serverAddress}/Accounts/ForgotPassword`, { email: email}).then((res) => {
      if(res.status == 200) return {status: res.status, data: res.data.result}
    }).catch((error) => {
      return {status: 400, data: error.response.data.responseException}
    })
  },

  getContacts: async () => {
    return axios.get(`${config.serverAddress}/Contacts`).then((res) => {
      if(res.status == 200) return {status: res.status, data: res.data.result}
    }).catch((error) => {
      return {status: 400, data: error.response.data.responseException}
    })
  }
}

export default API