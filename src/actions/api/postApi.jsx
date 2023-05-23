import api from './api';

export async function get(){
    const response = await api.get('')
    return response.data;
}

export async function create(body){
    const response = await api.post('', body)

    return response.data;
}

export async function update(id, body){
    const response = await api.patch(`/${id}/`, body)

    return response.data;
}

export async function erase(id){
    await api.delete(`/${id}/`)
}