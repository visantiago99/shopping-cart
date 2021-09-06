import {Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ProductsCategory from './pages/ProductsCategory';
import ProductsInput from './pages/ProductsInput';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/productInput" render={() => <ProductsInput />} />
        <Route path="/productCategory" render={() => <ProductsCategory />} />
      </Switch>
    </div>
  );
}

export default App;
