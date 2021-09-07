import { combineReducers } from "redux";
import { users } from "./usersReducer";
import { clientes } from "./clientesReducer";
import { productos } from "./productosReducer";
import { tipos } from "./tiposReducer";
import { marcas } from "./marcasReducer";
import { modelos } from "./modelosReducer";
import { cotizaciones } from "./cotizacionesReducer";
import { companias } from "./companiasReducer";

const rootReducer = combineReducers({  
  users,  
  clientes,
  companias,
  productos,
  tipos,
  marcas,
  cotizaciones,
  modelos
});

export default rootReducer;
