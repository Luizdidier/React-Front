import axios from 'axios'

export const FETCH_USER = 'FETCH_USER';


export function fetchUser(){
    const response = axios.get('URL');
    console.log(response);
    return {
        type: FETCH_USER,
        payload: response
    }
}
