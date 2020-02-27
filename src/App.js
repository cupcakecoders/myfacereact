import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { PostsPage } from './Posts/Posts';
import { SubscribeForm } from './Form/Form';


function App() {
  return (
    <div>
      <div>
        <Router>
          <h1 className="logo">My Face</h1>
          <Switch>
            <Route exact path="/posts">
              <PostsPage/>
            </Route>
          </Switch>
        </Router>
      </div>
      <div>
        <PostsPage/>
      </div>
      <footer>
        <h2>Sign up</h2>
        <SubscribeForm/>
      </footer>
    </div>
  );
}

export default App;
