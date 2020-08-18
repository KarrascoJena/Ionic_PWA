import config from '../config'
import axios from 'axios';

const API = {
  login: async (email, password) => {
    return axios.post(`${config.serverAddress}/Accounts/Login`, { identifier: email, password: password}).then(res => {
      if(res.status === 200) {
        window.localStorage.setItem("accessToken", res.data.result.token.accessToken)
        axios.defaults.headers.common['Authorization'] = `Bearer ${window.localStorage.getItem("accessToken")}`;
        axios.get(`${config.serverAddress}/users/${res.data.result.id}`).then(res => {
          console.log(res)
        })
        return {status: res.status, data: res.data.result}
      }
    }).catch((error) => {
      return {status: 400, data: error.response.data.responseException}
    })
  },

  register: async (fullName, userName, password, email, phoneNumber) => {
    console.log("register = ", axios.defaults.headers.common['Authorization'])
    return axios.post(`${config.serverAddress}/Accounts/Register`, { fullName: fullName, userName: userName, password: password, email: email, phoneNumber: phoneNumber}).then((res) => {
      if(res.status === 200) return {status: res.status, data: res.data.result}
    }).catch((error) => {
      return {status: 400, data: error.response.data.responseException}
    })
  },

  forgetPassword: async (email) => {
    console.log("forget password = ", axios.defaults.headers.common['Authorization'])
    return axios.post(`${config.serverAddress}/Accounts/ForgotPassword`, { email: email}).then(res => {
      if(res.status === 200) return {status: res.status, data: res.data.result}
    }).catch((error) => {
      return {status: 400, data: error.response.data.responseException}
    })
  },

  getUsers: async (id) => {
    return axios.get(`${config.serverAddress}/Users/${id}`).then(res => {
      if(res.status === 200) return {status: res.status, data: res.data.result}
    }).catch((error) => {
      return {status: error.response.status, data: error.response.data.responseException}
    })
  },

  deleteUsers: async (id) => {
    return axios.delete(`${config.serverAddress}/Users/${id}`).then(res => {
      if(res.status === 200) return {status: res.status, data: res.data.result}
    }).catch((error) => {
      return {status: error.response.status, data: error.response.data.responseException}
    })
  },

  getContacts: async () => {
    console.log("get contacts = ", axios.defaults.headers.common['Authorization'])
    return axios.get(`${config.serverAddress}/Contacts`).then(res => {
      if(res.status === 200) return {status: res.status, data: res.data.result}
    }).catch((error) => {
      return {status: error.response.status, data: error.response.data.responseException}
    })
  },

  getContactsDetail: async (id) => {
    console.log("get contacts details", axios.defaults.headers.common['Authorization'])
    return axios.get(`${config.serverAddress}/Contacts/${id}`).then(res => {
      if(res.status === 200) return {status: res.status, data: res.data.result}
    }).catch((error) => {
      return {status: error.response.status, data: error.response.data.responseException}
    })
  },

  deleteContact: async (id) => {
    console.log("delete contact", axios.defaults.headers.common['Authorization'])

    return axios.delete(`${config.serverAddress}/Contacts/${id}`).then(res => {
      console.log(res)
      if(res.status === 200) return {status: res.status, data: res.data.result}
    }).catch((error) => {
      console.log(error)
      return {status: error.response.status, data: error.response.data.responseException}
    })
  },

  addContact: async (data) => {
    console.log("add contact", axios.defaults.headers.common['Authorization'])
    return axios.post(`${config.serverAddress}/Contacts`, data).then((res) => {
      if(res.status === 200) return {status: res.status, data: res.data.result}
    }).catch(error => {
      return {status: error.response.status, data: error.response.data.responseException}
    })
  },

  getUserRelationshipStatus: async () => {
    console.log("get user relationship status", axios.defaults.headers.common['Authorization'])

    return axios.get(`${config.serverAddress}/ContactRelationshipTypes`).then(res => {
      if(res.status === 200) return {status: res.status, data: res.data.result}
    }).catch(error => {
      return {status: error.response.status, data: error.response.data.responseException}
    })
  },

  getCountries: async () => {
    return axios.get(`${config.serverAddress}/Countries`).then(res => {
      if(res.status === 200) return {status: res.status, data: res.data.result}
    }).catch(error => {
      return {status: error.response.status, data: error.response.data.responseException}
    })
  },

  getCountry: async (countryId) => {
    return axios.get(`${config.serverAddress}/Countries/${countryId}`).then(res => {
      if(res.status === 200) return {status: res.status, data: res.data.result}
    }).catch(error => {
      return {status: error.response.status, data: error.response.data.responseException}
    })
  },

  getDiscoveries: async () => {
    return axios.get(`${config.serverAddress}/Discoveries`).then(res => {
      if(res.status === 200) return {status: res.status, data: res.data.result}
    }).catch(error => {
      return {status: error.response.status, data: error.response.data.responseException}
    })
  },

  getExperiences: async (id) => {
    return axios.get(`${config.serverAddress}/Experiences/${id}`).then(res => {
      if(res.status === 200) return {status: res.status, data: res.data.result}
    }).catch(error => {
      return {status: error.response.status, data: error.response.data.responseException}
    })
  },

  getMatches: async () => {
    return axios.get(`${config.serverAddress}/Matches`).then(res => {
      if(res.status === 200) return {status: res.status, data: res.data.result}
    }).catch(error => {
      return {status: error.response.status, data: error.response.data.responseException}
    })
  },

  deleteMatch: async (matchId) => {
    return axios.delete(`${config.serverAddress}/Matches/${matchId}`).then(res => {
      if(res.status === 200) return {status: res.status}
    }).catch(error => {
      return {status: error.response.status, data: error.response.data.responseException}
    })
  },

  sendMatchNotification: async (matchId) => {
    return axios.post(`${config.serverAddress}/Matches/SendMatchNotification`, {id: matchId}).then(res => {
      if(res.status === 200) return {status: res.status, data: res.data.result}
    }).catch(error => {
      return {status: error.response.status, data: error.response.data.responseException}
    })
  },

  setMatchViewed: async (id) => {
    return axios.post(`${config.serverAddress}/Matches/SetViewed`, {id: id}).then( res => {
      if(res.status === 200) return {status: res.status, data: res.data.result}
    }).catch(error => {
      return {status: error.response.status, data: error.response.data.responseException}
    })
  },

  setMatchQuality: async (id, value) => {
    return axios.post(`${config.serverAddress}/Matches/SetQuality`, {id: id, value: value}).then( res => {
      if(res.status === 200) return {status: res.status, data: res.data.result}
    }).catch(error => {
      return {status: error.response.status, data: error.response.data.responseException}
    })
  },

  getProducts: async (id) => {
    return axios.get(`${config.serverAddress}/Products/${id}`).then(res => {
      if(res.status === 200) return {status: res.status, data: res.data.result}
    }).catch(error => {
      return {status: error.response.status, data: error.response.data.responseException}
    })
  },

  getRatings: async (experienceId, contactId, rate) => {
    return axios.post(`${config.serverAddress}/Ratings`, {experienceId: experienceId, contactId: contactId, rate: rate}).then(res => {
      if(res.status === 200) return {status: res.status, data: res.data.result}
    }).catch(error => {
      return {status: error.response.status, data: error.response.data.responseException}
    })
  },

  isPersonalRatingRequired: async (experienceId) => {
    return axios.post(`${config.serverAddress}/Ratings`, {experienceId: experienceId}).then(res => {
      if(res.status === 200) return {status: res.status, data: res.data.result}
    }).catch(error => {
      return {status: error.response.status, data: error.response.data.responseException}
    })
  },

  setLanguage: (language) => {
    axios.defaults.headers.common['Accept-Language'] = `${language}`;
  },
}

export default API