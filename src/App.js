import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './Cart';
import Home from './Home';
import AllProducts from './Home/Product/AllProducts';
import Jewellery from './Jewellery';
import Login from './Login';
// import ProductCategory from './ProductCategory';
import ProductDetails from './ProductDetails';
import Users from './Users';
// import Stopwatch from './Stopwatch';

axios.defaults.baseURL = 'https://fakestoreapi.com/';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/category' exact component={Home} />
        <Route path='/products' exact component={AllProducts} />
        <Route path='/products/:id' exact component={ProductDetails} />
        <Route path='/products/category/:type' exact component={Jewellery} />
        <Route path='/users' exact component={Users} />
        <Route path='/cart' exact component={Cart} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
