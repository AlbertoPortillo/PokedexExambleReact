import React, {useEffect, useReducer, useState} from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import pokemonRouter from './router/pokemonRouter';
import indexRouter from './router/indexRouter';
import './App.css';

import { AuthContext } from './config/AuthContext';
import { authReducer } from './config/authReducer';


const init = ():any => {
  return sessionStorage.getItem('poke') || {  };
}

const router = createBrowserRouter([
  ...pokemonRouter,
  ...indexRouter
]);

function App() {  
  const [ poke, dispatch ] = useReducer(authReducer, {}, init || {});
  const [ pokeFav, setPokeFav ] = useState(null)

  useEffect(() => {
    sessionStorage.setItem( 'poke', JSON.stringify(poke) );
  }, [poke])
  
  return (
    <AuthContext.Provider value={{ poke, dispatch, pokeFav, setPokeFav }}>
      <RouterProvider router={router}/>
    </AuthContext.Provider>
  );
}

export default App;
