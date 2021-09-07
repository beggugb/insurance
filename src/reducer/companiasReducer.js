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
  
export function companias(state = initialState, action) {
    switch (action.type) {
      case "COMPANIAS_CHANGE":
        return {          
          ...state,
          item:
          {...state.item,
            [action.props]: action.value
          }
        };
      case "COMPANIAS_ADD":
        return {
          ...state,
          item: action.response.producto
        };
      case "COMPANIAS_ITEM":
          return {
            ...state,
            item: action.response
          }; 
       case "COMPANIAS_RESET_ITEM":
          return {
            ...state,
            item: initialState.item
          };
      case "COMPANIAS_SET_ITEM":
          return {
            ...state,
            item: action.response
          };      
      case "COMPANIAS_DATA":
          return {
            ...state,
            data: action.response.data,
            pagina: action.response.pagina,
            paginas: action.response.paginas,
            total: action.response.total
          };
      case "COMPANIAS_LISTA":
          return {
            ...state,
            data: action.result
          }; 
      case "COMPANIAS_RESET_LISTA":
          return {
            ...state,
            lista: []
          };                    
      case "COMPANIAS_RESET":
        return {
          ...state,
          item: initialState.item,
          data: [],
          lista: [],
          pagina: 0,
          paginas: 0,
          total: 0
        };
      case "COMPANIAS_RESET_DATA":
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