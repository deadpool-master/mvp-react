import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
  

    }
  }

  render(){
    return(
<div>
<div className="banner banner2">
	 <div className="container">
		 <div className="headr-right">
				<div className="details">
					<ul>
						<li><a href="mailto:@example.com"><span className="glyphicon glyphicon-envelope" aria-hidden="true"></span>iPlay@gmail.com</a></li>
						<li><span className="glyphicon glyphicon-earphone" aria-hidden="true"></span>(+962)79 090 7240</li>
					</ul>
			  </div>
		 </div>
		 <div className="banner_head_top">
			  <div className="logo">
					<h1><a href="/Welcomepage">i<span>Play</span></a></h1>
			 </div>	
			 <div className="top-menu">	 
			     <div className="content white">
					 <nav className="navbar navbar-default">
						 <div className="navbar-header">
							<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>				
						 </div>
						 {/* <!--/navbar header-->		 */}
						 <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
							 <ul className="nav navbar-nav">
								 <li><Link to="/Shop">Shop</Link></li>
								 <li><a href="about.html">About</a></li>
								 <li className="dropdown">
									<a href="#" className="scroll dropdown-toggle" data-toggle="dropdown">Reviews<b className="caret"></b></a>
									<ul className="dropdown-menu">
										<li><a href="review.html">Review 1</a></li>
										<li><a href="review.html">Review 2</a></li>
										<li><a href="review.html">Review 3</a></li>
									</ul>
								 </li>					
								 <li><a href="gallery.html">Gallery</a></li>
								 <li className="active"><a href="#">Shortcodes</a></li>
								 <li><a href="contact.html">Contact</a></li>
							 </ul>
							</div>
						  {/* <!--/navbar collapse--> */}
					 </nav>
					  {/* <!--/navbar--> */}
				 </div>
					 <div className="clearfix"></div>
					<script type="text/javascript" src="js/bootstrap-3.1.1.min.js"></script>
			  </div>
				 <div className="clearfix"></div>
		  </div>
	 </div>	 
</div>

</div>

    )
  }
}
export default Header;
