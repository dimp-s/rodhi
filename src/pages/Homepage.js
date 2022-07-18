import React from 'react';
import { Link } from 'react-router-dom';

export default function Homepage() {
  return (
    <>
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
                      <img
                        src="assets/images/main_logo.png"
                        alt=""
                        style={{ height: '180px', width: '350px' }}
                      />
                    </a>
                  </div>
                </div>
                {/* <div class="col-sm-6">
                  <button
                    type="button"
                    id="sidebarCollapse"
                    class="btn btn-info navbar-btn"
                  >
                    <img src="assets/images/menu_icon.png" alt="" />
                  </button>
                </div> */}
              </div>
            </div>
          </header>
          {/* <!-- End header -->
        <!-- Start Banner --> */}
          <div class="ulockd-home-slider">
            <div class="container-fluid">
              <div class="row">
                <div class="pogoSlider" id="js-main-slider">
                  <div
                    class="pogoSlider-slide"
                    style={{
                      backgroundImage: 'url(assets/images/banner/1-01.png)',
                      backgroundSize: 'cover',
                    }}
                  >
                    <div class="container">
                      <div class="row">
                        <div class="col-md-12">
                          <div class="slide_text">
                            <h4>We</h4>
                            {/* <h3>with</h3> */}
                            <h4>Source</h4>
                            <br />
                            {/* <a class="readmore_bt" href="about.html">
                              Read More
                            </a> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="pogoSlider-slide"
                    style={{
                      backgroundImage: 'url(assets/images/banner/2-02.png)',
                      backgroundSize: 'cover',
                    }}
                  >
                    <div class="container">
                      <div class="row">
                        <div class="col-md-12">
                          <div class="slide_text">
                            <h4>We</h4>
                            {/* <h3>with</h3> */}
                            <h4>Import</h4>
                            <br />
                            {/* <a class="readmore_bt" href="about.html">
                              Read More
                            </a> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="pogoSlider-slide"
                    style={{
                      backgroundImage: 'url(assets/images/banner/3-03.png)',
                      backgroundSize: 'cover',
                    }}
                  >
                    <div class="container">
                      <div class="row">
                        <div class="col-md-12">
                          <div class="slide_text">
                            <h4>We</h4>
                            {/* <h3>with</h3> */}
                            <h4>Deliver</h4>
                            <br />
                            {/* <a class="readmore_bt" href="about.html">
                              Read More
                            </a> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="pogoSlider-slide"
                    style={{
                      backgroundImage: 'url(assets/images/banner/4-04.png)',
                      backgroundSize: 'cover',
                    }}
                  >
                    <div class="container">
                      <div class="row">
                        <div class="col-md-12">
                          <div class="slide_text">
                            <h4>We help you</h4>
                            {/* <h3>with</h3> */}
                            <h4>To sell</h4>
                            <br />
                            {/* <a class="readmore_bt" href="about.html">
                              Read More
                            </a> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="pogoSlider-slide"
                    style={{
                      backgroundImage: 'url(assets/images/banner/5-05.png)',
                      backgroundSize: 'cover',
                    }}
                  >
                    <div class="container">
                      <div class="row">
                        <div class="col-md-12">
                          <div class="slide_text">
                            <h6>Grow your business</h6>
                            <h3>with</h3>
                            <h4>Rodhi</h4>
                            <br />
                            {/* <a class="readmore_bt" href="about.html">
                              Read More
                            </a> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- .pogoSlider --> */}
              </div>
            </div>
          </div>
          {/* <!-- End Banner -->
         
         <!-- section --> * FOR CLIENTS */}
          {/*SERVICES*/}
          <div class="section about_section layout_padding dash_bg padding_top_5">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="full">
                    <div class="heading_main text_align_center">
                      <h2>Our Clients</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div
                  class="col-xs-6 col-sm-6 col-md-6 col-lg-3"
                  style={{ marginLeft: '6rem' }}
                >
                  <div class="full feature_box">
                    <div class="full icon">
                      <img
                        src="assets/images/clients/tuddrom.png"
                        alt="#"
                        style={{ height: '12rem', width: '12rem' }}
                      />
                    </div>
                    <div class="full">
                      <h4>Tuddrom</h4>
                    </div>
                  </div>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-4">
                  <div class="full feature_box">
                    <div class="full icon">
                      <img
                        src="assets/images/clients/felt-and-yarn.png"
                        alt="#"
                        style={{ height: '12rem', width: '15rem' }}
                      />
                    </div>
                    <div class="full">
                      <h4>Felt & Yarn</h4>
                    </div>
                  </div>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-3">
                  <div class="full feature_box">
                    <div class="full icon">
                      <img
                        src="assets/images/clients/ytech.png"
                        alt="#"
                        style={{ height: '12rem', width: '12rem' }}
                      />
                    </div>
                    <div class="full">
                      <h4>YTech</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- end section -->

          <!-- section --> */}
          <div class="section about_section layout_padding padding_top_5">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="full">
                    <div class="heading_main text_align_center margin-bottom_30">
                      <h2>
                        <strong class="small theme_color">
                          Are You a person or a business looking for an
                          outsourcer to import products from China with no
                          hassle, or do you want to expand your import business?
                        </strong>
                        <br />
                      </h2>
                    </div>
                    <div class="full center">
                      <a class="readmore_bt" href="about.html">
                        Let's Talk
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="full text_align_center padding_top_0">
                    <img
                      class="img-responsive"
                      src="assets/images/map.gif"
                      alt="#"
                    />
                    <img
                      class="img-responsive"
                      src="assets/images/experience.gif"
                      alt="#"
                    />{' '}
                    + Years of experience
                    <img
                      class="img-responsive"
                      src="assets/images/growing-business.gif"
                      alt="#"
                    />{' '}
                    + Growing Businesses
                    <img
                      class="img-responsive"
                      src="assets/images/export-team.gif"
                      alt="#"
                    />
                    {` `}+ Export Team Members
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*SERVICES*/}
          <div class="section about_section layout_padding dash_bg padding_top_0">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="full">
                    <div class="heading_main text_align_center">
                      <h2>Our Services</h2>
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
                        src="assets/images/services/build_own_brand.png"
                        alt="#"
                        style={{ height: '12rem', width: '12rem' }}
                      />
                      <img
                        class="default-none"
                        src="assets/images/services/build_own_brand.png"
                        alt="#"
                        style={{ height: '12rem', width: '12rem' }}
                      />
                    </div>
                    <div class="full">
                      <h4>Product Sourcing</h4>
                    </div>
                    <div class="full">
                      <p>
                        Once you submit your inquiry, our specialist research
                        team in China, which has been sourcing for over ten
                        years, will find the proper manufacturer for you through
                        our supply channel and notify you within one business
                        day.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-3">
                  <div class="full feature_box">
                    <div class="full icon">
                      <img
                        class="default-block"
                        src="assets/images/services/digital_marketing_services.png"
                        alt="#"
                        style={{ height: '12rem', width: '12rem' }}
                      />
                      <img
                        class="default-none"
                        src="assets/images/services/digital_marketing_services.png"
                        alt="#"
                        style={{ height: '12rem', width: '12rem' }}
                      />
                    </div>
                    <div class="full">
                      <h4>Digital Marketing</h4>
                    </div>
                    <div class="full">
                      <p>
                        To help you grow your business, we provide digital
                        marketing services such as branding, design, social
                        marketing, web design, and SEO. We assist you in
                        developing a strong strategy as well as your company's
                        brand identity.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-3">
                  <div class="full feature_box">
                    <div class="full icon">
                      <img
                        class="default-block"
                        src="assets/images/services/competitive_price.png"
                        alt="#"
                        style={{ height: '12rem', width: '12rem' }}
                      />
                      <img
                        class="default-none"
                        src="assets/images/services/competitive_price.png"
                        alt="#"
                        style={{ height: '12rem', width: '12rem' }}
                      />
                    </div>
                    <div class="full">
                      <h4>Competitive Pricing</h4>
                    </div>
                    <div class="full">
                      <p>
                        Our expert team advises you in choosing the right
                        products at the best price on the market; we negotiate
                        with suppliers on your behalf and always look for the
                        lowest price possible to enhance profits.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-3">
                  <div class="full feature_box">
                    <div class="full icon">
                      <img
                        class="default-block"
                        src="assets/images/services/transport_customer.png"
                        alt="#"
                        style={{ height: '12rem', width: '12rem' }}
                      />
                      <img
                        class="default-none"
                        src="assets/images/services/transport_customer.png"
                        alt="#"
                        style={{ height: '12rem', width: '12rem' }}
                      />
                    </div>
                    <div class="full">
                      <h4>Transport and Customs</h4>
                    </div>
                    <div class="full">
                      <p>
                        We understand how important it is to get the cargo on
                        time and how difficult it is to go through customs while
                        importing, therefore we focus on making it as quick and
                        painless as possible.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="col-xs-6 col-sm-6 col-md-6 col-lg-3"
                  style={{ marginLeft: '17.8rem' }}
                >
                  <div class="full feature_box">
                    <div class="full icon">
                      <img
                        class="default-block"
                        src="assets/images/services/product_sourcing.png"
                        alt="#"
                        style={{ height: '12rem', width: '12rem' }}
                      />
                      <img
                        class="default-none"
                        src="assets/images/services/product_sourcing.png"
                        alt="#"
                        style={{ height: '12rem', width: '12rem' }}
                      />
                    </div>
                    <div class="full">
                      <h4>Build Your Brand</h4>
                    </div>
                    <div class="full">
                      <p>
                        We offer specialized and tailored services such as OEM,
                        ODM, White labeling, package design, logo print, factory
                        audit, and sample consolidation.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-3">
                  <div class="full feature_box">
                    <div class="full icon">
                      <img
                        class="default-block"
                        src="assets/images/services/quality_check.png"
                        alt="#"
                        style={{ height: '12rem', width: '12rem' }}
                      />
                      <img
                        class="default-none"
                        src="assets/images/services/quality_check.png"
                        alt="#"
                        style={{ height: '12rem', width: '12rem' }}
                      />
                    </div>
                    <div class="full">
                      <h4>Quality Checking</h4>
                    </div>
                    <div class="full">
                      <p>
                        With our team in China, we will verify that the products
                        are the same as what you ordered and are in the best
                        possible quality and safe condition.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*End SERVICES*/}

          {/* <!-- section -->  */}
          <div class="section about_section layout_padding padding_top_5">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="full">
                    <div class="heading_main text_align_center">
                      <h2 class="margin-bottom_30">
                        <strong class="small theme_color">
                          Sourcing and importing goods from China is simple and
                          efficient
                        </strong>
                        <br />
                        WITH RODHI
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <div class="full">
                    <div class="heading_small">
                      <h4>About us</h4>
                    </div>
                    <p style={{ fontSize: '1.2rem' }}>
                      Rodhi, a young and experienced China sourcing company,
                      helps you in locating the ideal products for the Nepali
                      market, the best manufacturers, reasonable rates,
                      follow-up manufacturing, quality inspection, and delivery
                      to your door or warehouse. We will also keep you informed
                      of any future new goods, specials, or other types of
                      offers that may be of interest to you. Not only do we
                      assist you in building your brand on the digital platform
                      by providing digital marketing services. Start Sourcing
                      with us..
                    </p>
                  </div>
                  {/* <div class="full margin-top_30">
                    <a class="readmore_bt" href="about.html">
                      Read More
                    </a>
                  </div> */}
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <div class="full text_align_center">
                    <img
                      class="img-responsive"
                      src="assets/images/services/product_sourcing.png"
                      alt="#"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end section -->
          {/*<!-- section --> MISCELLANEOUS*/}
          {/* <div class="section about_section layout_padding">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="full">
                    <div class="heading_main text_align_center margin-bottom_30">
                      <h2>
                        <strong class="small theme_color">
                          We’ve done lot’s of work, Let’s
                        </strong>
                        <br />
                        Check some from here
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6 col-md-3 col-lg-3">
                  <div class="work_blog margin-top_30">
                    <img
                      class="img-responsive"
                      src="assets/images/blog1.jpg"
                      alt="#"
                    />
                    <div class="hover_workblog">
                      <img src="assets/images/search_icon.png" alt="#" />
                    </div>
                  </div>
                </div>

                <div class="col-sm-6 col-md-3 col-lg-3">
                  <div class="work_blog margin-top_30">
                    <img
                      class="img-responsive"
                      src="assets/images/blog2.jpg"
                      alt="#"
                    />
                    <div class="hover_workblog">
                      <img src="assets/images/search_icon.png" alt="#" />
                    </div>
                  </div>
                </div>

                <div class="col-sm-6 col-md-3 col-lg-3">
                  <div class="work_blog margin-top_30">
                    <img
                      class="img-responsive"
                      src="assets/images/blog3.jpg"
                      alt="#"
                    />
                    <div class="hover_workblog">
                      <img src="assets/images/search_icon.png" alt="#" />
                    </div>
                  </div>
                </div>

                <div class="col-sm-6 col-md-3 col-lg-3">
                  <div class="work_blog margin-top_30">
                    <img
                      class="img-responsive"
                      src="assets/images/blog4.jpg"
                      alt="#"
                    />
                    <div class="hover_workblog">
                      <img src="assets/images/search_icon.png" alt="#" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <!-- end section -->*/}
          {/* <!-- section --> FOR FORM AND LOCATION*/}
          {/*<!-- Start Footer --> */}
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
                        Tinkune near Tribhuwan International Airport ,
                        <br />
                        Kathmandu, Nepal
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
                        +977-9851325806
                        <br />
                        +977-9804360634
                        <br />
                        Sunday - Friday
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
                        rodhisources@gmail.com
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
                          <a href="https://www.facebook.com/Rodhi-Import-Export">
                            <i class="fa fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="rodhisources@gmail.com">
                            <i class="fa fa-google-plus"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/rodhi.sources/">
                            <i class="fa fa-instagram"></i>
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
                  <p class="crp">© Copyrights 2022 Rodhi Sourcing co.</p>
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
