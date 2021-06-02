import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
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
      <Router>
        <NavBar />
        <div className='app-container'>
          <Switch>
            <Route exact path='/'>
              <Redirect to='/home' />
            </Route>
            <Route path='/home' component={HomePage} />
            <Route exact path='/categories' component={CategoriesPage} />
            <Route path='/category/:id' component={CategoryPage} />
            <Route path='/product/:id' component={ProductPage} />
            <Route path='/profile' component={ProfilePage} />
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
