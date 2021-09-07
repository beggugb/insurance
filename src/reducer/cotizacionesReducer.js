const initialState = {
    data: [],    
    auto:{
      Marca: {
        "id": 0,
        "nombre": "",
      },
      Modelo: {
        "filename": "",
        "id": 0,
        "nombre": "",
      },
      Tipo: {
        "id": 0,
        "nombre": "",
      }
    },
    pagina: 0,
    paginas: 0,
    panel:1,
    total: 0,
    tipoId:0,
    tipo:'',
    marcaId:0,
    marca:'',
    monto:0,
    modeloId:0,
    modelo:'',
    modeloImg:'',
    email:'',
    tasas:[],
    companias:[],
    item:{
        id:'',
        nombre:'',
        icon:''        
    }    
  };
  
export function cotizaciones(state = initialState, action) {
    switch (action.type) {     
      case 'COTIZACIONES_DATA': 
        return {
          ...state,
          data: action.result.data,
          total:action.result.total,
          pagina:action.result.pagina,
          paginas:action.result.paginas

        }; 
        case "COTIZACION_SET_ITEM":
          return {
            ...state,
            item: action.response
          }; 
        case "COTIZACION_SET_AUTO":
            return {
              ...state,
              auto: action.response
          };   
      case "COTIZACIONES_SET_TIPO_ID":
          return {
            ...state,
            tipoId: action.tipoId,
            tipo: action.tipo
          };
      case "COTIZACIONES_RESET":
          return {
            ...state,
            item: initialState.item,
            panel:1,            
            tipoId:0,
            tipo:'',
            marcaId:0,
            marca:'',
            monto:0,
            modeloId:0,
            modelo:'',
            modeloImg:'',
            tasas:[],
            companias:[],
            email:''
          };    
      case "COTIZACIONES_SET_MARCA_ID":
          return {
            ...state,
            marcaId: action.marcaId,
            marca: action.marca
          };
      case "COTIZACIONES_SET_MODELO_ID":
          return {
            ...state,
            modeloId: action.modeloId,
            modelo: action.modelo,
            modeloImg: action.modeloImg
          };
      case "COTIZACIONES_SET_MONTO":
            return {
              ...state,
              monto: action.monto,
              email: action.email
          };    
      case "TASAS_LISTA":
            return {
              ...state,
              tasas: action.response
            };                                                           
      case "TASAS_LISTA_RESET":
            return {
              ...state,
              tasas: [],
              companias:[]
            };                                  
      default:
        return state;
    }
  }