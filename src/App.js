import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './containers/HomePage';
import CategoriesPage from './containers/CategoriesPage';
import CategoryPage from './containers/CategoryPage';
import ProductPage from './containers/ProductPage';
import ErrorPage from './containers/ErrorPage';
import ProfilePage from './containers/ProfilePage';

function App() {
  return (
    <>
      <NavBar />
      <div className='app-container'>
        <BrowserRouter>
          <Switch>
            <Route exact path={['/', '/home']} component={HomePage}/>
            <Route exact path='/categories' component={CategoriesPage}/>
            <Route exact path='/category/:id' component={CategoryPage}/>
            <Route exact path='/product/:id' component={ProductPage}/>
            <Route exact path='/profile' component={ProfilePage}/>
            <Route path='*' component={ErrorPage}/>
          </Switch>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  );
}

export default App;