import React from 'react';
import { Provider as StoreProvider } from 'react-redux'
import { store } from './src/constants/store'
import DefaultNavigator from "./src/navigation/DefaultNavigator";

export default function App() {
  return (
    <StoreProvider store={store}>      
       <DefaultNavigator/>
    </StoreProvider>
  );
}


