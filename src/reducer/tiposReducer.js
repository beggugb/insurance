const initialState = {
    data: [],    
    pagina: 0,
    paginas: 0,
    panel:1,
    total: 0,
    item:{
        id:'',
        nombre:'',
        icon:''        
    }    
  };
  
export function tipos(state = initialState, action) {
    switch (action.type) {
      case "TIPOS_CHANGE":
        return {          
          ...state,
          item:
          {...state.item,
            [action.props]: action.value
          }
        };
      case "TIPOS_ADD":
        return {
          ...state,
          item: action.response.producto
        };
      case "TIPOS_ITEM":
          return {
            ...state,
            item: action.response
          }; 
       case "TIPOS_RESET_ITEM":
          return {
            ...state,
            item: initialState.item
          };
      case "TIPOS_SET_ITEM":
          return {
            ...state,
            item: action.response
          };      
      case "TIPOS_DATA":
          return {
            ...state,
            data: action.response.data,
            pagina: action.response.pagina,
            paginas: action.response.paginas,
            total: action.response.total
          };
      case "TIPOS_LISTA":
          return {
            ...state,
            data: action.result.data
          }; 
      case "TIPOS_RESET_LISTA":
          return {
            ...state,
            lista: []
          };                    
      case "TIPOS_RESET":
        return {
          ...state,
          item: initialState.item,
          data: [],
          lista: [],
          pagina: 0,
          paginas: 0,
          total: 0
        };
      case "TIPOS_RESET_DATA":
          return {
            ...state,            
            data: [],            
            pagina: 0,
            paginas: 0,
            total: 0
        };  
      default:
        return state;
    }
  }