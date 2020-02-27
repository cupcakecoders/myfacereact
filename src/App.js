import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { PostsPage } from './Posts/Posts';


function App() {
  return (
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

    
  );
}

export default App;
