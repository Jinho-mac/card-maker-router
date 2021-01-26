import styles from './App.module.css';
import Login from './components/login/login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Maker from './components/maker/maker.jsx';

function App({ authService, imageService, dataService }) {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService}/>
          </Route>
          <Route path="/maker">
            <Maker 
            authService={authService} 
            imageService={imageService}
            dataService={dataService}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
