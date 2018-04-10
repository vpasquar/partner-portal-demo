import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/menu';


const Menu = (props) => (
  <IconMenu
      {...props}
      iconButtonElement={
          <IconButton><MoreVertIcon/></IconButton>
      }
  >
    <Link to="/test"><MenuItem primaryText="test" /></Link>
    <MenuItem primaryText="test2" />

  </IconMenu>  
);


class Login extends Component {
  render() {
     return (
       <Link to="/user">
          <FlatButton {...this.props} label ="Login"/>
       </Link>   
    );
  }
};


class TopBar extends Component {
  render() {
    return (
         <AppBar
             title="Cloudscann"
             iconElementLeft  = {<Menu/>}
             iconElementRight = {<Login/>}
          />
    );
  }
}

export default TopBar;