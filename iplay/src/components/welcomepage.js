import React from 'react';

// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class Welcomepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
  render() {
    return (
      <div>
        {/* <!-- header --> */}
        <div className="banner">
          <div className="container">
            <div className="headr-right">
              <div className="details">
                <ul>
                  <li><a href="mailto:@example.com"><span className="glyphicon glyphicon-envelope" aria-hidden="true"></span>info(at)example.com</a></li>
                  <li><span className="glyphicon glyphicon-earphone" aria-hidden="true"></span>(+1)000 123 456789</li>
                </ul>
              </div>
            </div>
            <div className="banner_head_top">
              <div className="logo">
                <h1><a href="index.html">i<span className="glyphicon glyphicon-knight" aria-hidden="true"></span><span>Play </span></a></h1>
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
                        <li className="active"><a href="index.html">Home</a></li>
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
                        <li><a href="shortcodes.html">Shortcodes</a></li>
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
            <div className="banner-info">
              <h3>Welcome to our Website</h3>
              <h2>Fast Racing</h2>
            </div>
            <div className="social">
              <ul>
                <li><a href="#"><span className="fa"> </span></a></li>
                <li><a href="#"><span className="tw"> </span></a></li>
                <li><a href="#"><span className="g"> </span></a></li>
                <li><a href="#"><span className="in"> </span></a></li>
                <li><a href="#"><span className="pin"> </span></a></li>
              </ul>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
        {/* <!----> */}
        <div className="welcome">
          <div className="container">
            <div className="welcome-info">
              <h3>Welcome</h3>
              <h4>Lorem ipsum dolor sit amet consectetur adipiscing elit.</h4>
              <p>Morbi condimentum imperdiet placerat. Nullam in nisl eget turpis convallis venenatis. Cras cursus elementum justo nec bibendum. Donec quis nisi cursus, vestibulum elit eget, sagittis ligula.</p>
            </div>
          </div>
        </div>
        {/* <!---->   */}
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
                    <img src="images/ps.png" className="img-responsive" alt="" />
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
              <div className="games-grids">
                <div className="game-grid-left">
                  <div className="grid1">
                    <h5 className="act"><a href="single.html">Action</a></h5>
                    <a href="single.html"><img src="images/c1.jpg" className="img-responsive" alt="" /></a>
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
                    <a href="single.html"><img src="images/c2.jpg" className="img-responsive" alt="" /></a>
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
                    <a href="single.html"><img src="images/c3.jpg" className="img-responsive" alt="" /></a>
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
                    <a href="single.html"><img src="images/c4.jpg" className="img-responsive" alt="" /></a>
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
                      <a href="single.html"><img src="images/tr1.jpg" alt="/" className="img-responsive" /></a>
                    </div>
                    <div className="col-md-9 tab-pic-info">
                      <h4><a href="single.html">Angry Birds</a></h4>
                      <p>Lorem Ipsum is simply dummy text of the printing industry.</p>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="game1">
                    <div className="col-md-3 tab-pic">
                      <a href="single.html"><img src="images/tr3.jpg" alt="/" className="img-responsive" /></a>
                    </div>
                    <div className="col-md-9 tab-pic-info">
                      <h4><a href="single.html">Vice City GTA</a></h4>
                      <p>Lorem Ipsum is simply dummy text of the printing industry.</p>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="game1">
                    <div className="col-md-3 tab-pic">
                      <a href="single.html"><img src="images/tr2.jpg" alt="/" className="img-responsive" /></a>
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
                      <a href="single.html"><img src="images/tr4.jpg" alt="/" className="img-responsive" /></a>
                    </div>
                    <div className="col-md-9 tab-post-info">
                      <h4><a href="single.html">IronMan</a></h4>
                      <p>Posted By <a href="#">Admin</a> &nbsp;&nbsp; on June 2, 2015 &nbsp;&nbsp; <a href="#">Comments (10)</a></p>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="game-post">
                    <div className="col-md-3 tab-pic">
                      <a href="single.html"><img src="images/tr5.jpg" alt="/" className="img-responsive" /></a>
                    </div>
                    <div className="col-md-9 tab-post-info">
                      <h4><a href="single.html">God Of War</a></h4>
                      <p>Posted By <a href="#">Admin</a> &nbsp;&nbsp; on June 2, 2015 &nbsp;&nbsp; <a href="#">Comments (10)</a></p>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="game-post">
                    <div className="col-md-3 tab-pic">
                      <a href="single.html"><img src="images/tr6.jpg" alt="/" className="img-responsive" /></a>
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
                    <a className="example-image-link" href="images/p2.jpg" data-lightbox="example-set"><img className="example-image" src="images/p2.jpg" alt="" /></a>
                  </div>
                  <div className="col-md-4 gallery-grid-pic">
                    <a className="example-image-link" href="images/p1.jpg" data-lightbox="example-set"><img className="example-image" src="images/p1.jpg" alt="" /></a>
                  </div>
                  <div className="col-md-4 gallery-grid-pic">
                    <a className="example-image-link" href="images/p3.jpg" data-lightbox="example-set"><img className="example-image" src="images/p3.jpg" alt="" /></a>
                  </div>
                  <div className="clearfix"></div>
                </div>
                <div className="gallery-1">
                  <div className="col-md-4 gallery-grid-pic">
                    <a className="example-image-link" href="images/p4.jpg" data-lightbox="example-set"><img className="example-image" src="images/p4.jpg" alt="" /></a>
                  </div>
                  <div className="col-md-4 gallery-grid-pic">
                    <a className="example-image-link" href="images/p5.jpg" data-lightbox="example-set"><img className="example-image" src="images/p5.jpg" alt="" /></a>
                  </div>
                  <div className="col-md-4 gallery-grid-pic">
                    <a className="example-image-link" href="images/p6.jpg" data-lightbox="example-set"><img className="example-image" src="images/p6.jpg" alt="" /></a>
                  </div>
                  <div className="clearfix"></div>
                </div>
                <div className="gallery-1">
                  <div className="col-md-4 gallery-grid-pic">
                    <a className="example-image-link" href="images/p1.jpg" data-lightbox="example-set"><img className="example-image" src="images/p1.jpg" alt="" /></a>
                  </div>
                  <div className="col-md-4 gallery-grid-pic">
                    <a className="example-image-link" href="images/p3.jpg" data-lightbox="example-set"><img className="example-image" src="images/p3.jpg" alt="" /></a>
                  </div>
                  <div className="col-md-4 gallery-grid-pic">
                    <a className="example-image-link" href="images/p4.jpg" data-lightbox="example-set"><img className="example-image" src="images/p4.jpg" alt="" /></a>
                  </div>
                  <div className="clearfix"></div>
                </div>

              </div>

            </div>
            <div className="clearfix"></div>
          </div>
        </div>
        <script src="js/lightbox-plus-jquery.min.js"></script>

        {/* <!-- footer --> */}
        <div className="footer">
          <div className="container">
            <div className="footer-grids">
              <div className="col-md-6 news-ltr">
                <h4>Newsletter</h4>
                <p>Aenean sagittis est eget elit pulvinar cursus. Lorem ipsum consectetur adipiscing elit. Phasellus non purus at risus consequat finibus.</p>
                <form>
                  <input type="text" className="text" value="Enter Email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Enter Email';}" />
                  <input type="submit" value="Subscribe" />
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
        {/* <!----> */}
        <div className="copywrite">
          <div className="container">
            <p> TEST COPYRIGHTS</p>
          </div>
        </div>
        {/* <!----> */} 

      </div>

    )
  }
}

export default Welcomepage;