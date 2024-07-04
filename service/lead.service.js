import axios from 'axios'

const apiUrl = process.env.NEXT_PUBLIC_BASE_URL + "/api/v1/leads"



export function getLead(id) {
  return axios.get(`${apiUrl}/${id}`)
};

export function findCustomerByEmail(email) {
  return axios.get(`${apiUrl}/customer/${email}`)
};

export function saveLead(data) {
  if (data.id) return axios.put(`${apiUrl}/${data.id}`, data);
  return axios.post(apiUrl, data);
};

export function saveApplication(id, data) {
  return axios.patch(`${apiUrl}/application/${id}`, data);
};

export function verifyLead(data) {
  return axios.post(`${apiUrl}/verify`, data);
};

export function sendEmail(data) {
  return axios.post(`${apiUrl}/send-mail`, data);
};
