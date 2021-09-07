import {crudApi} from '../api'


export const crudActions = {        
    getListsDetalle,
    getListDetalle,
    getItem,
    getCotizacion,
    createList,
    changeValue,
    getLis,
    getData,
    sendCotizacion,
    searchList,
    getCliente,
    putList,
    createClientes,
    getCotizaciones,
    getListaItems
  };

  function getListaItems(xredux, payload) {        
    return (dispatch) => {    
      dispatch({ type: 'SET_LOADING', state: true });        
      crudApi
        .getListaItems(payload)
        .then((response) => {                                        
          dispatch(ListaDetalle(xredux,response.result));
        
          dispatch({ type: 'SET_LOADING', state: false });
        })
        .catch((err) => {    
          dispatch({ type: 'SET_LOADING', state: false });         
        });
    };
  }

  function putList(xredux, payload, dato) {  
  return (dispatch) => {
    crudApi
      .putList(payload, dato)
      .then((response) => {    
        dispatch(dpostList(xredux, response.result));                       
      })
      .catch((err) => {
        
      });
  };
}

  function getCliente(xredux,payload, pky) {  
  return (dispatch) => {
    crudApi
      .getItem(payload, pky)
      .then((response) => {                         
        dispatch(dpostList(xredux,response.result)); 
               
      })
      .catch((err) => {
                
      });
  };
}

  function searchList(xredux, payload, dato) {  
  return (dispatch) => {
    crudApi
      .searchList(payload, dato)
      .then((response) => {                        
        dispatch(dpostList(xredux, response.result));        
      })
      .catch((err) => {        
        
      });
  };
}

  function sendCotizacion(payload, dato) {  
  return (dispatch) => {
    crudApi
      .sendCotizacion(payload,dato)
      .then((response) => {        
        
      })
      .catch((err) => {
        
        
      });
  };
}

  function getCotizacion(payload, pky) {  
  return (dispatch) => {
    dispatch({ type: 'SET_LOADING', state: true });
    crudApi
      .getItem(payload, pky)
      .then((response) => {       
        console.log(response)                                   
        dispatch(dpostList('TASAS_LISTA', response.result.tasas));
        dispatch(gitem('COTIZACION_SET_ITEM', response.result.cotizacion));
        dispatch(gitem('COTIZACION_SET_AUTO', response.result.auto));
        dispatch({ type: 'SET_LOADING', state: false });
      })
      .catch((err) => {
                
      });
  };
}

export function gitem(xredux, result) {  
  return {
    type: xredux,
    response: result
  };
}

function getCotizaciones(xredux, payload, page,num, cliente) {  
  return (dispatch) => {
    dispatch({ type: 'SET_LOADING', state: true });
    crudApi
      .getCotizaciones(payload, page,num, cliente)
      .then((response) => {                             
        dispatch(dgetList(xredux, response.result));
        dispatch({ type: 'SET_LOADING', state: false });
      })
      .catch((err) => {
        
        
      });
  };
}

  function getData(xredux, payload, page,num,prop,orden) {  
  return (dispatch) => {
    dispatch({ type: 'SET_LOADING', state: true });
    crudApi
      .getData(payload, page,num,prop,orden)
      .then((response) => {                  
        dispatch(dgetList(xredux, response.result));
        dispatch({ type: 'SET_LOADING', state: false });
      })
      .catch((err) => {
        
        
      });
  };
}

  function getListDetalle(xredux, payload, dato) {        
    return (dispatch) => {    
      dispatch({ type: 'SET_LOADING', state: true });        
      crudApi
        .getListDetalle(payload,dato)
        .then((response) => {                                        
          dispatch(ListaDetalle(xredux,response.result));
          dispatch({ type: 'SET_LOADING', state: false });
        })
        .catch((err) => {    
          dispatch({ type: 'SET_LOADING', state: false });         
        });
    };
  }

  function getListsDetalle(xredux, payload, dato, tipo) {        
    return (dispatch) => {     
      dispatch({ type: 'SET_LOADING', state: true });       
      crudApi
        .getListsDetalle(payload,dato, tipo)
        .then((response) => {                                        
          dispatch(ListaDetalle(xredux,response.result));
          dispatch({ type: 'SET_LOADING', state: false });
        })
        .catch((err) => {    
        console.log(err)           
        dispatch({ type: 'SET_LOADING', state: false });     
        });
    };
  }
  function getLis(xredux, payload) {          
  return (dispatch) => {
    dispatch({ type: 'SET_LOADING', state: true });
    crudApi
      .getLis(payload)
      .then((response) => {                
        dispatch(dgetList(xredux, response.result));
        dispatch({ type: 'SET_LOADING', state: false });
        
      })
      .catch((err) => {
        dispatch({ type: 'SET_LOADING', state: false });
      });
  };
}
export function dgetList(xredux, resul) {    
  return {
    type: xredux,
    result: resul
  };
}

function getItem(payload, pky) {  
  return (dispatch) => {
    dispatch({ type: 'SET_LOADING', state: true });
    crudApi
      .getItem(payload, pky)
      .then((response) => {                      
        dispatch(dpostList('PRODUCTOS_ITEM', response.result.item)); 
        dispatch({ type: 'SET_LOADING', state: false });               
      })
      .catch((err) => {
        dispatch({ type: 'SET_LOADING', state: false });
      });
  };
}

function createClientes(xredux, payload, dato) {  
  return (dispatch) => {    
    dispatch({ type: 'SET_LOADING', state: true });
    crudApi
      .createList(payload, dato)
      .then((response) => {              
        dispatch(dpostList(xredux, response.data));   
        dispatch({ type: 'SET_LOADING', state: false });                 
      })
      .catch((err) => {        
        dispatch({ type: 'SET_LOADING', state: false });
      });
  };
}

function createList(xredux, payload, dato) {  
  return (dispatch) => {
    dispatch({ type: 'SET_LOADING', state: true });  
    crudApi
      .createList(payload, dato)
      .then((response) => {              
        if(response !== undefined){
          dispatch(dpostList(xredux, response.result));             
        }
        dispatch({ type: 'SET_LOADING', state: false });          
      })
      .catch((err) => {
        dispatch({ type: 'SET_LOADING', state: false });  
        
      });
  };
}


  export function ListaDetalle(xredux,res) {        
    return {
      type: xredux,
      result: res
    };
  }

  export function dpostList(xredux, result) { 
  return {  
    type: xredux,
    response: result
  };
}

function changeValue(xredux, props, values) {  
  return (dispatch) => {
    dispatch(change(xredux, props, values));
  };
}

export function change(xredux, props, values) {  
  return {  
    type: xredux,
    props: props,
    value: values
  };
}