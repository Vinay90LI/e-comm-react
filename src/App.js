import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Home from './pages/Home';
import './App.css';
import {createBrowserRouter,RouterProvider,Route,Link} from 'react-router-dom'
const router=createBrowserRouter([{
  path:'/',
  element: <Home></Home>,
},
{
  path:'/signup',
  element: <SignUpPage/>
},
{
  path:'/login',
  element:<LoginPage/>
}
])
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
