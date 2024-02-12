import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetailsPage from './pages/ProductDetailsPage';
import './App.css';
import {createBrowserRouter,RouterProvider,Route,Link} from 'react-router-dom'
import Protected from './features/auth/protected';  
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchItemsByUserIdAsync } from './features/cart/CartSlice';
import { selectLoggedInUser } from './features/auth/components/authSlice';


const router=createBrowserRouter([{
  path:'/',
  element: <Protected><Home></Home></Protected>,
},
{
  path:'/signup',
  element: <SignUpPage/>
},
{
  path:'/login',
  element:<LoginPage/>
},
{
  path:'/cart',
  element:<Protected><CartPage/></Protected>
},
{
  path:'/checkout',
  element:<Protected><Checkout/></Protected>
},
{
  path:'/productdetails/:id',
  element:<Protected><ProductDetailsPage/></Protected>
}

])
function App() {
  const dispatch=useDispatch();
  const user=useSelector(selectLoggedInUser);
  useEffect(()=>{
    if(user){
      dispatch(fetchItemsByUserIdAsync(user.id))
    }
  },[dispatch,user]);
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
