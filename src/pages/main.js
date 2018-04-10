import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TopBar from '../components/top_bar.js';
import HomeContent from '../components/home_content.js';
import Footer from '../components/footer.js';



class Main extends Component {
	render() {
		return(
		    <div>	
            	<TopBar/>
            	<HomeContent/>
            	<Footer/>
            </div>
	    );
	}
}

// test
export default Main;