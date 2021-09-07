import {clientesApi} from '../api'

export const clientesActions = {            
    login,
    getUsuario,    
    changeValue    
  };

  function login(user) {    
    return (dispatch) => {      
      dispatch({ type: 'SET_LOADING', loading: true });   
      clientesApi
        .login(user)
        .then((response) => {                    
          dispatch(LOGIN(response.result));                                
          dispatch({ type: 'SET_LOADING', loading: false });                  
        })
        .catch((err) => {          
          dispatch({ type: 'SET_LOADING', loading: false }); 
        });
    };
  }

  export function LOGIN(result) {
    return {
      type: "LOGIN_SUCCESS",
      result: result
    };
  }

  function getUsuario(itemId) {
    return (dispatch) => {     
      dispatch({ type: 'SET_LOADING', loading: true });        
        clientesApi
        .getUsuario(itemId)
        .then((response)=>{                    
          dispatch(pUsuario(response.result))          
          dispatch({ type: 'SET_LOADING', loading: false }); 
        })
      .catch((err)=>{
        console.log(err)
      })
    };
  }


  export function pUsuario(response) {    
    return {
      type: 'GET_USUARIO',
      payload: response
    };
  } 

  function changeValue(props, values) {  
    return (dispatch) => {
      dispatch(change(props, values));
    };
  }
  
  export function change(props, values) {  
    return {  
      type: 'USUARIO_CHANGE',
      props: props,
      value: values
    };
  }



  
