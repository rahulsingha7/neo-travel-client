import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Home from './components/Home/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import Authprovider from './contexts/Authprovider';
import AdminPanel from './components/Admin/AdminPanel';
import Login from './components/Login/Login/Login';
import AddServices from './components/Admin/AddServices/AddServices';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute'
import Booking from './components/Login/Booking/Booking';
import ManageClient from './components/Admin/ManageClient/ManageClient';
import AllServices from './components/Admin/AllServices/AllServices';
import UpdateServices from './components/Admin/AllServices/UpdateServices/UpdateServices';
import MyOrder from './components/Home/MyOrder/MyOrder';
function App() {
  return (
    <div className="App">
      <Authprovider>
        <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
           <Home></Home>
          </Route>
          <Route path='/login'>
           <Login></Login>
          </Route>
          <PrivateRoute path='/dashboard'>
           <AdminPanel></AdminPanel>
          </PrivateRoute>
          <PrivateRoute path='/myOrder'>
           <MyOrder></MyOrder>
          </PrivateRoute>
          <PrivateRoute path='/booking/:serviceId'>
          <Booking></Booking>
          </PrivateRoute>
          <Route path='/addService'>
           <AddServices></AddServices>
          </Route>
          <Route path='/services/:id'>
           <UpdateServices></UpdateServices>
          </Route>
          <Route path='/manageClient'>
           <ManageClient></ManageClient>
          </Route>
          <Route path='/allServices'>
           <AllServices></AllServices>
          </Route>
          
          <Route path="*">
               <NotFound></NotFound>
          </Route>
        </Switch>
         <Footer></Footer>
        </BrowserRouter>
      </Authprovider>
    </div>
  );
}

export default App;
