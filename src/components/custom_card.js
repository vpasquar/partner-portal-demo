import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {cyan500, grey900,grey700,grey500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


const muiTheme = getMuiTheme({
  palette: {
    textColor:grey900,
    primary1Color:grey900,
  },
});

var cardStyle = {
    fontFamily:'Titillium Web, sans-serif'
}
var headerStyle = {
    fontSize:"24px"
}

var subtitleStyle= {
    fontSize:"17px"
}

const CustomCard = props => (
    <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
    <Card className="custom-card" style={cardStyle}>
        <CardHeader
            title={props.title}
            subtitle={props.subtitle}
            titleStyle={headerStyle}
            subtitleStyle={subtitleStyle}
        />

        <CardActions>
            <a href={props.link1}><FlatButton label={props.label1} /></a>
            <a href={props.link2}><FlatButton label={props.label2} /></a>
        </CardActions>

        <CardText style={subtitleStyle}>
            {props.info} 
        </CardText>

    </Card>
    </MuiThemeProvider>

);

export default CustomCard;