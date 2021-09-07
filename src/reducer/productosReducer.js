const initialState = {
    data: [],    
    pagina: 0,
    paginas: 0,
    panel:1,
    total: 0,
    item:{
        id:'',
        nombre:'',
        vigencia:'',
        ramoId:'',
        Ramo:{
          id:'',
          nombre:'',
          icono:''
        }
    }    
  };
  
export function productos(state = initialState, action) {
    switch (action.type) {
      case "PRODUCTOS_CHANGE":
        return {          
          ...state,
          item:
          {...state.item,
            [action.props]: action.value
          }
        };
      case "PRODUCTOS_ADD":
        return {
          ...state,
          item: action.response.producto
        };
      case "PRODUCTOS_ITEM":
          return {
            ...state,
            item: action.response
          }; 
       case "PRODUCTOS_RESET_ITEM":
          return {
            ...state,
            item: initialState.item
          };
      case "PRODUCTOS_SET_ITEM":
          return {
            ...state,
            item: action.response
          };      
      case "PRODUCTOS_DATA":
          return {
            ...state,
            data: action.response.data,
            pagina: action.response.pagina,
            paginas: action.response.paginas,
            total: action.response.total
          };
      case "PRODUCTOS_LISTA":
          return {
            ...state,
            data: action.result
          }; 
      case "SET_PANEL":
            return {
              ...state,
              panel: action.panel
            };     
      case "PRODUCTOS_RESET_LISTA":
          return {
            ...state,
            lista: []
          };                    
      case "PRODUCTOS_RESET":
        return {
          ...state,
          item: initialState.item,
          data: [],         
          pagina: 0,
          paginas: 0,
          total: 0
        };
      default:
        return state;
    }
  }