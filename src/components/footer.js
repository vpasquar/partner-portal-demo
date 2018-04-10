import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Footer extends Component {
	render() {

		return(
             
             <div className="footer">

                <div className="footer-box">
                   <h3> Category 1 </h3>

                   <ul>
                         <a href='test'><li> test | </li></a>
                         <a href='test1'><li> test 1 | </li></a>
                         <a href='test2'><li> test 2 | </li></a>
                   </ul>
                    
                </div>

                <div className="footer-box">
                   <h3> Category 2 </h3>

                   <ul>
                         <a href='test'><li> test |</li></a>
                         <a href='test1'><li> test 1 | </li></a>
                         <a href='test2'><li> test 2 |</li></a>
                   </ul>
                    
                </div>

                <div className="footer-box">
                   <h3> Category 3 </h3>

                   <ul>
                         <a href='test'><li> test |</li></a>
                         <a href='test1'><li> test 1 | </li></a>
                         <a href='test2'><li> test 2 |</li></a>
                   </ul>
                    
                </div>

                 <div className="footer-box">
                   <h3> Category 4 </h3>

                   <ul>
                         <a href='test'><li> test |</li></a>
                         <a href='test1'><li> test 1 | </li></a>
                         <a href='test2'><li> test 2 | </li></a>
                   </ul>
                    
                </div>
                 
             </div> 
		);
	}
}

export default Footer;