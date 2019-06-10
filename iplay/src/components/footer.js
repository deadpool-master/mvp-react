import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
  

    }
  }

  render(){
    return(

<div>
<div className="footer">
	 <div className="container">
		 <div className="footer-grids">
			 <div className="col-md-6 news-ltr">
				 <h4>Newsletter</h4>
				 <p>Aenean sagittis est eget elit pulvinar cursus. Lorem ipsum consectetur adipiscing elit. Phasellus non purus at risus consequat finibus.</p>
				 <form>					 
					  <input type="text" className="text" value="Enter Email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Enter Email';}"/>
					 <input type="submit" value="Subscribe"/>
					 <div className="clearfix"></div>
				 </form>			 
			 </div>
			 <div className="col-md-3 ftr-grid">
				 <h3>Categories</h3>
				 <ul className="ftr-list">
					 <li><a href="#">Action</a></li>
					 <li><a href="#">Racing</a></li>
					 <li><a href="#">Adventure</a></li>
					 <li><a href="#">Simulation</a></li>
					 <li><a href="#">Bike</a></li>
				 </ul>							 
			 </div>	
			 <div className="col-md-3 ftr-grid">
				 <h3>Platform</h3>
				 <ul className="ftr-list">
					 <li><a href="#">Pc</a></li>
					 <li><a href="#">Ps4</a></li>
					 <li><a href="#">XBOX 360</a></li>					 
					 <li><a href="#">XBOX ONE</a></li>
					 <li><a href="#">PSP</a></li>
				 </ul>				 
			 </div>			 	
			 <div className="clearfix"></div>
		 </div>
	 </div>
</div>
    </div> 
    )
  }
} 
 export default Footer;   
