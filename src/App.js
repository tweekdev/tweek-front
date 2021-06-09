import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import LoadingSpinner from './shared/components/UIElements/LoadingSpinner';
import { AuthContext } from './shared/context/auth-context';
import { useAuth } from './shared/hooks/auth-hook';

const Home = React.lazy(() => import('./shared/components/Home'));
const About = React.lazy(() => import('./shared/components/Home/About'));

const Contact = React.lazy(() => import('./shared/components/Home/Contact'));
const NewProject = React.lazy(() => import('./projects/pages/NewProject'));
const UpdateProject = React.lazy(() =>
  import('./projects/pages/UpdateProject')
);
const Projects = React.lazy(() => import('./projects/pages/Projects'));
const Auth = React.lazy(() => import('./user/pages/Auth'));

const App = () => {
  const { token, login, logout, userId } = useAuth();
  let routes;

  if (token) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <div>
            <Home></Home>
            <About></About>
            <Projects></Projects>
            <Contact></Contact>
          </div>
        </Route>
        <Route path="/project/new" exact>
          <NewProject />
        </Route>
        <Route path="/projects/:projectId">
          <UpdateProject />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <div>
            <Home></Home>
            <About></About>
            <Projects></Projects>
            <Contact></Contact>
          </div>
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <MainNavigation />
        <main>
          <Suspense
            fallback={
              <div className="center">
                <LoadingSpinner></LoadingSpinner>
              </div>
            }
          >
            {routes}
          </Suspense>
        </main>
      </Router>
    </AuthContext.Provider>
  );
};
export default App;
