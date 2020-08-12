import config from '../config'
import axios from 'axios';

const API = {
  login: async (email, password) => {
    return axios.post(`${config.serverAddress}/Accounts/Login`, { identifier: email, password: password}).then((res) => {
      if(res.status == 200) {
        window.localStorage.setItem("accessToken", res.data.result.token.accessToken)
        axios.defaults.headers.common['Authorization'] = `Bearer ${window.localStorage.getItem("accessToken")}`;
        return {status: res.status, data: res.data.result}
      }
    }).catch((error) => {
      return {status: 400, data: error.response.data.responseException}
    })
  },

  register: async (fullName, userName, password, email, phoneNumber) => {
    console.log("register = ", axios.defaults.headers.common['Authorization'])
    return axios.post(`${config.serverAddress}/Accounts/Register`, { fullName: fullName, userName: userName, password: password, email: email, phoneNumber: phoneNumber}).then((res) => {
      if(res.status == 200) return {status: res.status, data: res.data.result}
    }).catch((error) => {
      return {status: 400, data: error.response.data.responseException}
    })
  },

  forgetPassword: async (email) => {
    console.log("forget password = ", axios.defaults.headers.common['Authorization'])
    return axios.post(`${config.serverAddress}/Accounts/ForgotPassword`, { email: email}).then((res) => {
      if(res.status == 200) return {status: res.status, data: res.data.result}
    }).catch((error) => {
      return {status: 400, data: error.response.data.responseException}
    })
  },

  getContacts: async () => {
    console.log("get contacts = ", axios.defaults.headers.common['Authorization'])
    return axios.get(`${config.serverAddress}/Contacts`).then((res) => {
      if(res.status == 200) return {status: res.status, data: res.data.result}
    }).catch((error) => {
      return {status: error.response.status, data: error.response.data.responseException}
    })
  },

  getContactsDetail: async (id) => {
    console.log("get contacts details", axios.defaults.headers.common['Authorization'])
    return axios.get(`${config.serverAddress}/Contacts/${id}`).then((res) => {
      if(res.status == 200) return {status: res.status, data: res.data.result}
    }).catch((error) => {
      return {status: error.response.status, data: error.response.data.responseException}
    })
  },

  deleteContact: async (id) => {
    console.log("delete contact", axios.defaults.headers.common['Authorization'])

    return axios.delete(`${config.serverAddress}/Contacts/${id}`).then((res) => {
      console.log(res)
      if(res.status == 200) return {status: res.status, data: res.data.result}
    }).catch((error) => {
      console.log(error)
      return {status: error.response.status, data: error.response.data.responseException}
    })
  },

  addContact: async (data) => {
    console.log("add contact", axios.defaults.headers.common['Authorization'])
    return axios.post(`${config.serverAddress}/Contacts`, data).then((res) => {
      if(res.status == 200) return {status: res.status, data: res.data.result}
    }).catch((error) => {
      return {status: error.response.status, data: error.response.data.responseException}
    })
  },

  getUserRelationshipStatus: async () => {
    console.log("get user relationship status", axios.defaults.headers.common['Authorization'])

    return axios.get(`${config.serverAddress}/ContactRelationshipTypes`).then((res) => {
      if(res.status == 200) return {status: res.status, data: res.data.result}
    }).catch((error) => {
      return {status: error.response.status, data: error.response.data.responseException}
    })
  },

  setLanguage: (language) => {
    axios.defaults.headers.common['Accept-Language'] = `${language}`;
  },
}

export default API