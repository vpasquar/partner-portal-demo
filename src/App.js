import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {cyan500, grey900,grey700,grey500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Main from './pages/main';
import UserLogin from './pages/login';


const muiTheme = getMuiTheme({
  palette: {
    textColor:cyan500,
    primary1Color:grey900,
  },
});
const App = () => (
   <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
     <Router>
      <div>
          <Switch>
             <Route exact path = "/" component={Main} />
             <Route exact path = "/user" component={UserLogin} />
          </Switch>  
      </div>
     </Router>
   </MuiThemeProvider>
);

export default App;

//