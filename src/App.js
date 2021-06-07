import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { lightMode, darkMode } from './utils/themes';
import GlobalStyle from './utils/globalStyles';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './containers/HomePage';
import CategoriesPage from './containers/CategoriesPage';
import CategoryPage from './containers/CategoryPage';
import ProductPage from './containers/ProductPage';
import ErrorPage from './containers/ErrorPage';
import ProfilePage from './containers/ProfilePage';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(null);

  useEffect(() => {
    if (isDarkMode !== null) {
      localStorage.setItem('darkMode', isDarkMode);
    }
  }, [isDarkMode]);

  useEffect(() => {
    const darkModeValue = JSON.parse(localStorage.getItem('darkMode'));
    if (darkModeValue === null) {
      const matchesDarkMode = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      setIsDarkMode(matchesDarkMode);
    } else {
      setIsDarkMode(darkModeValue);
    }
  }, []);

  const themeToggler = () => {
    setIsDarkMode((prevMode) => {
      return !prevMode;
    });
  };
  return (
    <ThemeProvider theme={isDarkMode ? darkMode : lightMode}>
      <GlobalStyle />
      <Router>
        <NavBar isDarkMode={isDarkMode} themeHandler={themeToggler} />
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
    </ThemeProvider>
  );
}

export default App;
