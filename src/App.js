
import Navbar from './components/Navbar'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { lazy,Suspense } from 'react';
import { Provider } from 'react-redux';
import store from './components/stores/store';
import Features2 from './components/Features2';
const Home = lazy(() => import('./components/Home'));
const Product = lazy(() => import('./components/Product'))
const Cart = lazy(() => import('./components/Cart'))

function App() {
  return (
    <> 
    <Provider store={store}>
   
    <Suspense fallback={<h2>Loading ...</h2>}>
      <BrowserRouter>
        <Navbar/>
        {/* <Features2></Features2> */}
         <Routes>
        <Route path = '/' element={<Home/>}></Route>
        <Route path = '/cart' element={<Cart />}></Route>
        <Route path= '/product' element= {<Product />}></Route>
        </Routes>
       </BrowserRouter>
    </Suspense>
 <p>Learn React</p>
    </Provider>

    </>
  );
}

export default App;
