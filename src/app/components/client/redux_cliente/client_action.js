import axios from 'axios'

export const FETCH_CLIENT = 'FETCH_CLIENT';
export const CREATE_CLIENT = 'CREATE_CLIENT';
export const DELETE_CLIENT = 'DELETE_CLIENT';
export const UPDATE_CLIENT = 'UPDATE_CLIENT';


export function fetchClient(){
    const url = '';
    const response = axios.get(url);

    return {
        type: FETCH_CLIENT,
        payload: response
    }
}

export function createContact(client){
    const url = '';
    const response = axios.post(url, {
        /* Dados para envio no cadastro */
    });
    return{
        type: CREATE_CLIENT,
        payload: response
    };
}

export function deleteClient(client){
    const url = '';
    const response = axios.delete(`${url}${client.id}`);

    return{
        type: DELETE_CLIENT,
        payload: {id: client.id, response}
    };
}

export function updateClient(client){
    const url = '';
    const response = axios.put(`${url}${client.id}`, client);

    return{
        type: UPDATE_CLIENT,
        payload: response
    };
}


