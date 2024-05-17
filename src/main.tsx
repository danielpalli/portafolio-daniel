import React from 'react'
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ReactDOM from 'react-dom/client'
import { Portafolio } from './Portafolio'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Portafolio />
  </React.StrictMode>,
)
