import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Jewellery from './Jewellery';
import ProductCategory from './ProductCategory';
import ProductDetails from './ProductDetails';
// import Stopwatch from './Stopwatch';

axios.defaults.baseURL = 'https://fakestoreapi.com/';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/products/:id' exact component={ProductDetails} />
        <Route path='/products/category/:type' exact component={Jewellery} />
        {/* <Route path='/products/category/jewelery' exact component={Jewellery} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
