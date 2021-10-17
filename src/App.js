import logo from './logo.svg';
import './App.css';
import Header from './pages/header/Header';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Carousels from './pages/home/carousel/Carousel';

function App() {
  return (
<div>

      <BrowserRouter>
      <Header/>
      <Switch>
  
    
  <Route path="/">
<Home></Home>
  </Route>
      </Switch>
      </BrowserRouter>
</div>
  
  );
}

export default App;
