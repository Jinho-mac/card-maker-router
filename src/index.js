import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import '@fortawesome/fontawesome-free';
import AuthService from './service/auth_service';
import ImageService from './service/image_service';
import DataService from './service/data_service';

const authService = new AuthService();
const imageService = new ImageService();
const dataService = new DataService();

ReactDOM.render(
  <React.StrictMode>
    <App 
    authService={authService} 
    imageService={imageService}
    dataService={dataService}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

