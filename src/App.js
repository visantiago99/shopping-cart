import {Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import CartList from './pages/CartList';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import ProductsList from './pages/ProductsList';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/productsList" render={() => <ProductsList />} />
        <Route path="/productDetails/:id" render={(props) => <ProductDetails {...props} />} />
        <Route path="/cart" render={() => <CartList />} />
      </Switch>
    </div>
  );
}

export default App;
