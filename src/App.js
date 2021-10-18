import logo from './logo.svg';
import './App.css';
import Header from './pages/header/Header';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './pages/home/Home';

import Footer from './pages/footer/Footer';
import About from './pages/about/About';
import Appoitment from './appoitment/Appoitment';
import Login from './pages/Login/Login';
import authprovider from './context/authprovider';
import Authprovider from './context/authprovider';
import Register from './pages/register/register';



function App() {
  return (




    <Authprovider>
        <BrowserRouter>
      <Header/>
      <Switch>
  
    
  <Route exact path="/">
<Home></Home>
  </Route>
  <Route path="/home">
<Home></Home>

  </Route>
<Route path="/register">
<Register></Register>
</Route>
  <Route path="/about">
<About></About>
  </Route>
  <Route path="/login">
<Login></Login>
  </Route>
  <Route path="/appoitment">
<Appoitment></Appoitment>
  </Route>
  <Route path ="*">
  
</Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
    </Authprovider>
    

  
  );
}

export default App;
