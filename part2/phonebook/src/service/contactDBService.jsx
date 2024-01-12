import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons'

const read = () => {
    const request = axios.get(baseUrl);
    return request.then(response => response.data);
}

const create = contactObject => {
    const request = axios.post(baseUrl, contactObject);
    return request.then(response => response.data)
}

const remove = id => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

export default { read, create, remove };