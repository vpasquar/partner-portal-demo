import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import CustomCard from '../components/custom_card.js'

class HomeContent extends Component {
	render() {
		return(
		   <div className="main-content-container">
          	 <Paper className="paper"  zDepth={3}>
                 <CustomCard
                    title="Card1"
                    subtitle="test subtitle"  
                    link1="www.fox.com"
                    link2="www.cnn.com"
                    label1="FOX"
                    label2="CNN"
                    info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                          officia deserunt mollit anim id est laborum">
                 </CustomCard>  
          	 </Paper>
             <Paper className="paper"  zDepth={3}>
                 <CustomCard
                    title="Card2"
                    subtitle="test subtitle"  
                    link1="www.fox.com"
                    link2="www.cnn.com"
                    label1="FOX"
                    label2="CNN"
                    info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                          officia deserunt mollit anim id est laborum">
                 </CustomCard> 
             </Paper>
          	 <Paper className="paper"  zDepth={3}>
                 <CustomCard
                    title="Card3"
                    subtitle="test subtitle"  
                    link1="www.fox.com"
                    link2="www.cnn.com"
                    label1="FOX"
                    label2="CNN"
                    info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                          officia deserunt mollit anim id est laborum">
                 </CustomCard> 
             </Paper>
           </div>
		);
	}
}

export default HomeContent;