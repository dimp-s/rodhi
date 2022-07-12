import React from 'react';
import { Link } from 'react-router-dom';
export default function About() {
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
                <a href="index.html">Home</a>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <a href="services.html">Services</a>
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
         <!-- Start Banner -->
         <!-- section --> */}
          <div class="section about_section layout_padding dash_bg">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="full">
                    <div class="heading_main text_align_center">
                      <h2>What We Do</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-3">
                  <div class="full feature_box">
                    <div class="full icon">
                      <img
                        class="default-block"
                        src="assets/images/icon_1.png"
                        alt="#"
                      />
                      <img
                        class="default-none"
                        src="assets/images/icon_1w.png"
                        alt="#"
                      />
                    </div>
                    <div class="full">
                      <h4>Link Building</h4>
                    </div>
                    <div class="full">
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content..
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-3">
                  <div class="full feature_box">
                    <div class="full icon">
                      <img
                        class="default-block"
                        src="assets/images/icon_2.png"
                        alt="#"
                      />
                      <img
                        class="default-none"
                        src="assets/images/icon_2w.png"
                        alt="#"
                      />
                    </div>
                    <div class="full">
                      <h4>Monthly SEO Task</h4>
                    </div>
                    <div class="full">
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content..
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-3">
                  <div class="full feature_box">
                    <div class="full icon">
                      <img
                        class="default-block"
                        src="assets/images/icon_3.png"
                        alt="#"
                      />
                      <img
                        class="default-none"
                        src="assets/images/icon_3w.png"
                        alt="#"
                      />
                    </div>
                    <div class="full">
                      <h4>On Page SEO</h4>
                    </div>
                    <div class="full">
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content..
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-3">
                  <div class="full feature_box">
                    <div class="full icon">
                      <img
                        class="default-block"
                        src="assets/images/icon_4.png"
                        alt="#"
                      />
                      <img
                        class="default-none"
                        src="images/icon_4w.png"
                        alt="#"
                      />
                    </div>
                    <div class="full">
                      <h4>Online marketing</h4>
                    </div>
                    <div class="full">
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content..
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end section -->
         <!-- section --> */}
          <div class="section about_section layout_padding padding_top_0">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="full">
                    <div class="heading_main text_align_center">
                      <h2 class="margin-bottom_30">
                        <strong class="small theme_color">
                          Increase your client for
                        </strong>
                        <br />
                        Better position of Business
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <div class="full">
                    <div class="heading_small">
                      <h4>Increase your client</h4>
                    </div>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a pass
                      <br />
                      <br />
                      age of Lorem Ipsum, you need to be sure there isn'There
                      are many variations of passages of Lorem Ipsum available,
                      but the majority have suffered alteration in some form, by
                      injected humour, or randomised words which don't look even
                      slightly believable. If you are going to use a passage of
                      Lorem Ipsum, you need to be sure there isn
                    </p>
                  </div>
                  <div class="full margin-top_30">
                    <a class="readmore_bt" href="about.html">
                      Read More
                    </a>
                  </div>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <div class="full text_align_center">
                    <img
                      class="img-responsive"
                      src="assets/images/f1.png"
                      alt="#"
                    />
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
