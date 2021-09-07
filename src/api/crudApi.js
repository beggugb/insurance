import {api} from '../helpers'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const crudApi = {    
  getListDetalle,
  getListsDetalle,
  getListaItems,
  getItem,
  createList,
  getLis,
  getData,
  sendCotizacion,
  searchList,
  putList,
  getCotizaciones 
}   

function getListaItems(payload) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${api}/${payload}/lista/items`, requestOptions).then(handleResponse);
}

function getCotizaciones(payload,page,num,cliente) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${api}/${payload}/mobil/cotizaciones/${page}/${num}/${cliente}`, requestOptions).then(handleResponse);
}

function putList(payload, dato) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dato),
  };
  return fetch(`${api}/${payload}/${dato.id}`, requestOptions).then(
    handleResponse
  );
} 

function searchList(payload, dato) {  
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dato),
  };

  return fetch(`${api}/${payload}/search`, requestOptions).then(handleResponse);
}

function sendCotizacion(payload, dato) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${api}/${payload}/enviar/cotizacion/${dato}`, requestOptions).then(handleResponse);
}

function getListDetalle(payload, dato) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${api}/${payload}/listadetalle/${dato}`, requestOptions).then(handleResponse);
}

function getListsDetalle(payload, marca, tipo) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${api}/${payload}/listasdetalle/${marca}/${tipo}`, requestOptions).then(handleResponse);
}
function getData(payload, page,num,prop,orden) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${api}/${payload}/listas/${page}/${num}/${prop}/${orden}`, requestOptions).then(handleResponse);
}
function getLis(payload) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${api}/${payload}/lista`, requestOptions).then(handleResponse);
}

function getItem(payload, pky) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${api}/${payload}/${pky}`, requestOptions).then(handleResponse);
}

function createList(payload, dato) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dato),
  };

  return fetch(`${api}/${payload}`, requestOptions).then(handleResponse);
}



function handleResponse(response) {
      return response.text().then((text) => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
          if (response.status === 401) {
            
          }    
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }
    
        return data;
      });
    }