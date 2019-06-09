import React from 'react';
// import ReactDom from "react-dom";
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import "../../public/css"

class Welcomepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
  render() {
    return (
      <div>
      <div className="banner">
	 <div className="container">
		 
		  <div className="banner-info">
			 <h3>Welcome to our Website & Shop</h3>
			 <h2>iPlay</h2>
		  </div>
		  <div className="social">
				<ul>
					<li><a href="https://www.facebook.com/iPlayJor/?modal=admin_todo_tour"><span className="fa"> </span></a></li>
					<li><a href="#"><span className="tw"> </span></a></li>
					<li><a href="iPlay@gmail.com"><span className="g"> </span></a></li>
					<li><a href="#"><span className="in"> </span></a></li>
				</ul>
				<div className="clearfix"></div>
		 </div>
	 </div>	 
</div>
<div className="welcome">
	 <div className="container">
		 <div className="welcome-info">
				<h3>Welcome</h3>
				<h4>To Our World Wide Online Shop & Games News.</h4>
				<p>Here, We deliver the best gaming experience in Jordan & Globally for all the gamers aroung the world from gaming news to gift cards and PC Games, ALL YOU NEED IN ONE PLACE! </p>
	     </div>
	 </div>
</div>
<div className="content">
	 <div className="container">
		  <div className="col-md-8 content-left">
			 <div className="information">
				 <h4>Information</h4>
				 <div className="information_grids">
					 <div className="info">					 
						 <p>" Etiam ante arcu, vestibulum diam. Curabitur quis lectus. Pellentesque dictum odio velit.</p>
						 <a href="about.html">Read more</a>
					 </div>
					 <div className="info-pic">	
						 <img src="images/ps.png" className="img-responsive" alt=""/>
					 </div>
					 <div className="clearfix"></div>
				 </div>				 
			 </div>
			 <div className="games-grids">
					 <div className="game-grid-left">
						 <div className="grid1">
							 <h5 className="act"><a href="single.html">Action</a></h5>
							 <a href="single.html"><img src="images/c1.jpg" className="img-responsive" alt=""/></a>
							 <div className="grid1-info">
								 <h4><a href="single.html">Watch Dogs</a></h4>
								 <p>Integer ut leo vitae nibh cursus aliquetr Sed, condimentum bibendum nibh accumsan vel.</p>								 
							 </div>
							 <div className="more">
							 <a href="single.html">Read more</a>
							 </div>
						 </div>
						 <div className="grid2">
							 <h5 className="race"><a href="single.html">Racing</a></h5>
							 <a href="single.html"><img src="images/c2.jpg" className="img-responsive" alt=""/></a>
							 <div className="grid1-info">
								 <h4><a href="single.html">Monster Racing</a></h4>
								 <p>Integer ut leo vitae nibh cursus aliquetr Sed, condimentum bibendum nibh accumsan vel.</p>								 
							 </div>
							 <div className="more">
							 <a href="single.html">Read more</a>
							 </div>
						 </div>
					 </div>
					 
					 <div className="game-grid-right">
						 <div className="grid3">
							 <h5 className="sport"><a href="single.html">Sports</a></h5>
							 <a href="single.html"><img src="images/c3.jpg" className="img-responsive" alt=""/></a>
							 <div className="grid1-info">
								 <h4><a href="single.html">FIFA 2015</a></h4>
								 <p>Integer ut leo vitae nibh cursus aliquetr Sed, condimentum bibendum nibh accumsan vel.</p>								 
							 </div>
							 <div className="more">
							 <a href="single.html">Read more</a>
							 </div>
						 </div>
						 <div className="grid4">
							 <h5 className="arc"><a href="single.html">Arcade</a></h5>
							 <a href="single.html"><img src="images/c4.jpg" className="img-responsive" alt=""/></a>
							 <div className="grid1-info">
								 <h4><a href="single.html">Skylanders</a></h4>
								 <p>Integer ut leo vitae nibh cursus aliquetr Sed, condimentum bibendum nibh accumsan vel.</p>								 
							 </div>
							 <div className="more">
							 <a href="single.html">Read more</a>
							 </div>
						 </div>
					 </div>
					 <div className="clearfix"></div>
				 </div>
		  </div>
		  <div className="col-md-4 content-right">
			  {/* <!-- Nav tabs --> */}
                    <ul className="nav nav-tabs nav2" role="tablist">
                    <li role="presentation" className="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Trending</a></li>
                    <li role="presentation" ><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Recent Posts</a></li>
                    </ul>
               {/* <!-- Tab panes --> */}
              <div className="tab-content">
						<div role="tabpanel" className="tab-pane active re-pad2" id="home">
						   <div className="game1">
								<div className="col-md-3 tab-pic">
									<a href="single.html"><img src="images/tr1.jpg" alt="/" className="img-responsive"/></a>
								</div>
								<div className="col-md-9 tab-pic-info">
								<h4><a href="single.html">Angry Birds</a></h4>
								<p>Lorem Ipsum is simply dummy text of the printing industry.</p>
								</div>
								<div className="clearfix"></div>
							</div>
							<div className="game1">
								<div className="col-md-3 tab-pic">
									<a href="single.html"><img src="images/tr3.jpg" alt="/" className="img-responsive"/></a>
								</div>
								<div className="col-md-9 tab-pic-info">
								<h4><a href="single.html">Vice City GTA</a></h4>
								<p>Lorem Ipsum is simply dummy text of the printing industry.</p>
								</div>
								<div className="clearfix"></div>
							</div>
							<div className="game1">
								<div className="col-md-3 tab-pic">
									<a href="single.html"><img src="images/tr2.jpg" alt="/" className="img-responsive"/></a>
								</div>
								<div className="col-md-9 tab-pic-info">
								<h4><a href="single.html">Call Of Duty</a></h4>
								<p>Lorem Ipsum is simply dummy text of the printing industry.</p>
								</div>
								<div className="clearfix"></div>
							</div>
						</div>
						<div role="tabpanel" className="tab-pane re-pad2" id="profile">
							<div className="game-post">
								<div className="col-md-3 tab-pic">
									<a href="single.html"><img src="images/tr4.jpg" alt="/" className="img-responsive"/></a>
								</div>
								<div className="col-md-9 tab-post-info">
								<h4><a href="single.html">IronMan</a></h4>
								<p>Posted By <a href="#">Admin</a> &nbsp;&nbsp; on June 2, 2015 &nbsp;&nbsp; <a href="#">Comments (10)</a></p>
								</div>
								<div className="clearfix"></div>
							</div>
							<div className="game-post">
								<div className="col-md-3 tab-pic">
									<a href="single.html"><img src="images/tr5.jpg" alt="/" className="img-responsive"/></a>
								</div>
								<div className="col-md-9 tab-post-info">
								<h4><a href="single.html">God Of War</a></h4>
								<p>Posted By <a href="#">Admin</a> &nbsp;&nbsp; on June 2, 2015 &nbsp;&nbsp; <a href="#">Comments (10)</a></p>
								</div>
								<div className="clearfix"></div>
							</div>
							<div className="game-post">
								<div className="col-md-3 tab-pic">
									<a href="single.html"><img src="images/tr6.jpg" alt="/" className="img-responsive"/></a>
								</div>
								<div className="col-md-9 tab-post-info">
								<h4><a href="single.html">Need For Speed</a></h4>
								<p>Posted By <a href="#">Admin</a> &nbsp;&nbsp; on June 2, 2015 &nbsp;&nbsp; <a href="#">Comments (10)</a></p>
								</div>
								<div className="clearfix"></div>
							</div>
						</div>                   
			 </div>
			 {/* <!----> */}
			 <div className="category blog-ctgry">
					<h4>Top Games</h4>
					<div className="list-group">
						<a href="#" className="list-group-item">Cras justo odio</a>
						<a href="#" className="list-group-item">Dapibus ac facilisis in</a>
						<a href="#" className="list-group-item">Morbi leo risus</a>
						<a href="#" className="list-group-item">Porta ac consectetur ac</a>
						<a href="#" className="list-group-item">Vestibulum at eros</a>
						<a href="#" className="list-group-item">Quisque elementum </a>
						<a href="#" className="list-group-item">Vestibulum eleifend</a>
						<a href="#" className="list-group-item">Donec sit amet justo </a>
					</div>
			 </div>	
			 <div className="photo-gallery">
				 <h4>Photo Gallery</h4>
				 <div className="gallery-1">
					<div className="col-md-4 gallery-grid-pic">
						<a className="example-image-link" href="images/p2.jpg" data-lightbox="example-set"><img className="example-image" src="images/p2.jpg" alt=""/></a>
					</div>
					<div className="col-md-4 gallery-grid-pic">
						<a className="example-image-link" href="images/p1.jpg" data-lightbox="example-set"><img className="example-image" src="images/p1.jpg" alt=""/></a>
					</div>
					<div className="col-md-4 gallery-grid-pic">
						<a className="example-image-link" href="images/p3.jpg" data-lightbox="example-set"><img className="example-image" src="images/p3.jpg" alt=""/></a>
					</div>
					<div className="clearfix"></div>
				 </div>
				 <div className="gallery-1">
					<div className="col-md-4 gallery-grid-pic">
						<a className="example-image-link" href="images/p4.jpg" data-lightbox="example-set"><img className="example-image" src="images/p4.jpg" alt=""/></a>
					</div>
					<div className="col-md-4 gallery-grid-pic">
						<a className="example-image-link" href="images/p5.jpg" data-lightbox="example-set"><img className="example-image" src="images/p5.jpg" alt=""/></a>
					</div>
					<div className="col-md-4 gallery-grid-pic">
						<a className="example-image-link" href="images/p6.jpg" data-lightbox="example-set"><img className="example-image" src="images/p6.jpg" alt=""/></a>
					</div>
					<div className="clearfix"></div>
				 </div>
				 <div className="gallery-1">
					<div className="col-md-4 gallery-grid-pic">
						<a className="example-image-link" href="images/p1.jpg" data-lightbox="example-set"><img className="example-image" src="images/p1.jpg" alt=""/></a>
					</div>
					<div className="col-md-4 gallery-grid-pic">
						<a className="example-image-link" href="images/p3.jpg" data-lightbox="example-set"><img className="example-image" src="images/p3.jpg" alt=""/></a>
					</div>
					<div className="col-md-4 gallery-grid-pic">
						<a className="example-image-link" href="images/p4.jpg" data-lightbox="example-set"><img className="example-image" src="images/p4.jpg" alt=""/></a>
					</div>
					<div className="clearfix"></div>
				 </div>

			 </div>

		  </div>
		  <div className="clearfix"></div>
	 </div>
</div>
<script src="../web/js/lightbox-plus-jquery.min.js"></script>

{/* <!-- footer --> */}
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

export default Welcomepage;