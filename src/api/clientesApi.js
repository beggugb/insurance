import {api} from '../helpers'
import AsyncStorage from '@react-native-async-storage/async-storage';


export const clientesApi = {
    getData,
    getItem,
    getItems,
    getCategorias,    
    getMapas,
    registro,
    login,
    sendPanico,
    getUsuario,
    updateUsuario,
    createUnit,
    deleteUnit,
    getFavoritos
}    

function getFavoritos (page,num,id){
    const requestOptions = {
        method: "GET",            
      };
     return fetch(`${api}/consultas/lista/favoritos/${page}/${num}/${id}`, requestOptions)
      .then(handleResponse);   
 } 

function createUnit(payload, dato) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dato),
  };

  return fetch(`${api}/${payload}/`, requestOptions).then(handleResponse);
}

function deleteUnit(payload, pky) {
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${api}/${payload}/${pky}`, requestOptions).then(handleResponse);
}


function updateUsuario(dato) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dato),
  };
  return fetch(`${api}/usuarios/actualizar`, requestOptions).then(
    handleResponse
  );
}

function sendPanico(usuario){
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usuario),
    };
   return fetch(`${api}/usuarios/panico`, requestOptions)
    .then(handleResponse);   
  }
  
function login(usuario) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usuario),
  };

  return fetch(`${api}/usuarios/login`, requestOptions)
    .then(handleResponse)
    .then((response) => {      
      if(response.result.token){
        const jsonUserId = JSON.stringify(response.result.user.id)            
        const jsonUserToken = JSON.stringify(response.result.token)            
        AsyncStorage.setItem('userId', jsonUserId)
        AsyncStorage.setItem('userToken', jsonUserToken)      
      }      
      return response;
    });
}
function registro(data) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  return fetch(`${api}/usuarios`, requestOptions)
  .then(handleResponse)
  .then((response) => {      
      if(response.usuario.token){
        const jsonUserId = JSON.stringify(response.usuario.user.id)            
        const jsonUserToken = JSON.stringify(response.usuario.token)            
        AsyncStorage.setItem('userId', jsonUserId)
        AsyncStorage.setItem('userToken', jsonUserToken)      
      }      
      return response;
    });

}

function getMapas (tipo){
    const requestOptions = {
        method: "GET",            
      };
     return fetch(`${api}/consultas/lista/${tipo}`, requestOptions)
      .then(handleResponse);   
 }   

function getCategorias (itemId){
  const requestOptions = {
      method: "GET",            
    };
   return fetch(`${api}/categorias/listar/0`, requestOptions)
    .then(handleResponse);   
  }  
  
  

function getItem (itemId){
  const requestOptions = {
      method: "GET",            
    };
   return fetch(`${api}/consultas/${itemId}`, requestOptions)
    .then(handleResponse);   
  }

function getItems (itemId){
  const requestOptions = {
      method: "GET",            
    };
   return fetch(`${api}/usuarios/actualizar/${itemId}`, requestOptions)
    .then(handleResponse);   
  }  

function getUsuario (itemId){
    const requestOptions = {
        method: "GET",            
      };
     return fetch(`${api}/usuarios/${itemId}`, requestOptions)
      .then(handleResponse);   
    }
  
function getData (page,num,categoriaId,estado,nombre){
    const requestOptions = {
        method: "GET",            
      };
     return fetch(`${api}/consultas/lista/${page}/${num}/${categoriaId}/${estado}/${nombre}`, requestOptions)
      .then(handleResponse);   
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