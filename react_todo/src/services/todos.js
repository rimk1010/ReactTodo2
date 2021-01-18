import axios from 'axios';

const baseUrl = 'http://localhost:3001/todos';

//Get todo
const getAll = async() => {
    const response = await axios.get(baseUrl);
    return response.data;
};

//Update todo
const update = async(id, newTodo) => {
    const response = await axios.put(`${baseUrl}/${id}`, newTodo);
    return response.data;
};

//Delete todo
const _delete = async id => {
    await axios.delete(`${baseUrl}/${id}`);
    return id;
};

//Add todo
const add = async newTodo => {
    const response = await axios.post(baseUrl, newTodo);
    return response.data;
}

export default {getAll, update, delete:_delete, add};