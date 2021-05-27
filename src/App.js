import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

// Components
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// Pages
import HomePage from './containers/HomePage';
import CategoriesPage from './containers/CategoriesPage';
import CategoryPage from './containers/CategoryPage';
import ProductPage from './containers/ProductPage';
import ErrorPage from './containers/ErrorPage';

function App() {
  return (
    <>
      <NavBar />
      <div className='app-container'>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/home' component={HomePage} />
            <Route exact path='/categories' component={CategoriesPage} />
            <Route exact path='/category/:id' component={CategoryPage} />
            <Route exact path='/product/:id' component={ProductPage} />
            <Route exact path='/profile' component={ProductPage} />
            <Route exact path='/404' component={ErrorPage} />
            <Route path='*' component={HomePage} />
          </Switch>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  );
}

export default App;
