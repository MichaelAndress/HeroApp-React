import React from 'react';
import { BrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { HeroesApp } from './HeroesApp';
import './index.css';
import 'animate.css';
import { DcPage, HeroesRoutes, HeroPage, MarvelPage, SearchPage } from './heroes';
import { LoginPage } from './auth';

const router = createHashRouter([
  {
    path:'/',
    element:<HeroesRoutes/>
  },
  {
    path:'/login',
    element:<LoginPage/>
  },
  {
    path:'/dc',
    element:<DcPage/>
  },
  {
    path:'hero/:id',
    element:<HeroPage/>
  },
  {
    path:'/marvel',
    element:<MarvelPage/>
  },
  {
    path:'/search',
    element:<SearchPage/>
  },
])

// Debi comnetar react router y usar hashrouter porque en githubpage no funciona 
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    // <BrowserRouter>
    <RouterProvider router={router}>
      <HeroesApp />
    </RouterProvider>
    // </BrowserRouter>
  // </React.StrictMode>,
)
