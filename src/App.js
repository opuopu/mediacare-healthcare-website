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
import Privateroute from './pages/Login/privateroute/Privateroute';
import Details from './pages/details/Details';
import Notfound from './pages/notfound/Notfound';
import appoitmentBook from './pages/appoitment-booking/appoitmentBook';
import AppoitmentBook from './pages/appoitment-booking/appoitmentBook';
import Services from './pages/services/Services';



function App() {
  return (




    <Authprovider>
        <BrowserRouter>
      <Header/>
      <Switch>
  
    
  <Route exact path="/">
<Home></Home>
  </Route>
  <Route exact path="/home">
<Home></Home>

  </Route>
<Route exact path="/register">
<Register></Register>
</Route>
  <Route exact path="/about">
<About></About>
  </Route>
  <Route exact path="/login">
<Login></Login>
  </Route>
  <Route exact path="/appoitment">
<Appoitment></Appoitment>
  </Route>
  <Route exact path="/service">
<Services></Services>
  </Route>
  <Privateroute exact  path="/about/:id">
<Details></Details>
  </Privateroute>
 <Privateroute  exact path="/appoitment/:doctor">
<AppoitmentBook></AppoitmentBook>
 </Privateroute>
   <Privateroute exact  path="/service/:id">
<Details></Details>
   </Privateroute>
{/* <Route path="/service/:id">
<Details></Details>
</Route> */}


  <Route exact path ="*">
  <Notfound/>
</Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
    </Authprovider>
    

  
  );
}

export default App;
