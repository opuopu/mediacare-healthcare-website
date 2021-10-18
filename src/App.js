import logo from './logo.svg';
import './App.css';
import Header from './pages/header/Header';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Carousels from './pages/home/carousel/Carousel';
import Footer from './pages/footer/Footer';
import About from './pages/about/About';

function App() {
  return (
<div>

      <BrowserRouter>
      <Header/>
      <Switch>
  
    
  <Route exact path="/">
<Home></Home>
  </Route>
  <Route path="/home">
<Home></Home>

  </Route>
  <Route path="/about">
<About></About>
  </Route>
  <Route path ="*">
  
</Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
</div>
  
  );
}

export default App;
