import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <>
      {/* <!-- LOADER --> */}
      <div id="preloader">
        <div class="loader">
          <img src="assets/images/loader.gif" alt="#" />
        </div>
      </div>
      {/* <!-- END LOADER --> */}
      <div class="wrapper">
        <nav id="sidebar">
          <div class="menu_section">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact us</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div id="content">
          {/* <!-- Start header --> */}
          <header class="top-header">
            <div class="container">
              <div class="row">
                <div class="col-sm-6">
                  <div class="logo_main">
                    <a href="index.html">
                      <img src="assets/images/main_logo.png" alt="" />
                    </a>
                  </div>
                </div>
                <div class="col-sm-6">
                  <button
                    type="button"
                    id="sidebarCollapse"
                    class="btn btn-info navbar-btn"
                  >
                    <img src="assets/images/menu_icon.png" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </header>
          {/* <!-- End header -->
         <!-- section --> */}
          <div class="section contact_section">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-6 theme_color_bg fc3726 padding_0">
                  <div class="full">
                    <div class="row">
                      <div class="col-sm-12 col-md-10 offset-lg-1">
                        <div class="full contact_form">
                          <form class="contact_form_inner" action="#">
                            <fieldset>
                              <div class="field">
                                <input
                                  type="text"
                                  name="name"
                                  placeholder="Your name"
                                />
                              </div>
                              <div class="field">
                                <input
                                  type="email"
                                  name="email"
                                  placeholder="Email"
                                />
                              </div>
                              <div class="field">
                                <input
                                  type="text"
                                  name="phone_no"
                                  placeholder="Phone number"
                                />
                              </div>
                              <div class="field">
                                <textarea placeholder="Message"></textarea>
                              </div>
                              <div class="field center">
                                <button class="margin-top_30">SEND</button>
                              </div>
                            </fieldset>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 padding_0">
                  <div class="full">
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="full map_section">
                          <div id="map">
                            <div
                              id="googleMap"
                              style={{ width: '100%', height: '440px' }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end section -->
         <!-- Start Footer --> */}
          <footer class="footer-box">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="full">
                    <div class="heading_main text_align_center white_fonts margin-bottom_30">
                      <h2>Contact us</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6 white_fonts">
                  <div class="full footer_blog f_icon_1">
                    <p>
                      Address
                      <br />
                      <small>
                        151 Ho Ba Kien Street,
                        <br />
                        Ward 15, District 10,
                        <br />
                        Ho Chi Minh City, Vietnam
                      </small>
                    </p>
                  </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6 white_fonts">
                  <div class="full footer_blog f_icon_2">
                    <p>
                      Phone
                      <br />
                      <small>
                        +84 126 922 0162
                        <br />
                        +84 905 333 333
                        <br />
                        Monday - Sunday
                        <br />
                        08:00 am - 05:00 pm
                      </small>
                    </p>
                  </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6 white_fonts">
                  <div class="full footer_blog f_icon_3">
                    <p>
                      Email
                      <br />
                      <small>
                        support@sofbox.com
                        <br />
                        24 X 7 online support
                      </small>
                    </p>
                  </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6 white_fonts">
                  <div class="full footer_blog_last">
                    <p>Social media</p>
                    <p>
                      <ul>
                        <li>
                          <a href="#">
                            <i class="fa fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-google-plus"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-youtube"></i>
                          </a>
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          {/* <!-- End Footer --> */}
          <div class="footer_bottom">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <p class="crp">
                    © Copyrights 2019 design by{' '}
                    <a
                      href="https://html.design"
                      title="Free Website Templates"
                    >
                      Free Website Templates
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a href="#" id="scroll-to-top" class="hvr-radial-out">
          <i class="fa fa-angle-up"></i>
        </a>
      </div>
    </>
  );
}
