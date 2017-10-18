import axios from 'axios'

export const FETCH_CONTACT = 'FETCH_CONTACT';
export const CREATE_CONTACT = 'CREATE_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';
export const UPDATE_CONTACT = 'UPDATE_CONTACT';
export const GET_CONTACT = 'GET_CONTACT';


export function fetchContact(){
  const response = axios.get('http://localhost:8000/client');

  return {
    type: FETCH_CONTACT,
    payload: response
  }
}

export function createContact(contact){
    const response = axios.post('http://localhost:8000/client', {
        url: contact.url,
        site_main_color: contact.colorMain,
        site_second_color: contact.colorSecond,
        site_details_color: contact.colorDetails
    });
    return{
        type: CREATE_CONTACT,
        payload: response
    };
}

export function deleteContact(contact){
    const response = axios.delete(`http://localhost:8000/client/${contact.id}`);

    return{
        type: DELETE_CONTACT,
        payload: {id: contact.id, response}
    };
}

export function updateContact(contact){
    const response = axios.put(`http://localhost:8000/client/${contact.id}`, contact);

    return{
      type: UPDATE_CONTACT,
      payload: response
    };
}

export function getContact(contact){
    const response = contact;

    return{
      type: GET_CONTACT,
      payload: response
    };
}

