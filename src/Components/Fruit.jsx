import React from 'react'

function Fruit() {
  return (
    <>
      <div>
        <section className="fruit_section layout_padding-top">
          <div className="container">
            <h2 className="custom_heading">Fresh Fruits</h2>
            <p className="custom_heading-text">
              There are many variations of passages of Lorem Ipsum available, but
              the majority have
            </p>
            <div className="row layout_padding2">
              <div className="col-md-8">
                <div className="fruit_detail-box">
                  <h3>
                    Best Fresh Orange
                  </h3>
                  <p className="mt-4 mb-5">
                    but the majority have suffered alteration in some form, by
                    injected humour, or randomised words which don't look even
                    slightly believable. If you are going to use a passage of Lorem
                    Ipsum, you need to be
                  </p>
                  <div>
                    <a href className="custom_dark-btn">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex justify-content-center align-items-center">
                <div className="fruit_img-box d-flex justify-content-center align-items-center">
                  <img src="images/orange.png" alt className width="250px" />
                </div>
              </div>
            </div>
            <div className="row layout_padding2">
              <div className="col-md-8">
                <div className="fruit_detail-box">
                  <h3>
                    Best Fresh Grapes
                  </h3>
                  <p className="mt-4 mb-5">
                    but the majority have suffered alteration in some form, by
                    injected humour, or randomised words which don't look even
                    slightly believable. If you are going to use a passage of Lorem
                    Ipsum, you need to be
                  </p>
                  <div>
                    <a href className="custom_dark-btn">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex justify-content-center align-items-center">
                <div className="fruit_img-box d-flex justify-content-center ">
                  <img src="images/grapes.png" alt className width="100px" />
                </div>
              </div>
            </div>
            <div className="row layout_padding2-top layout_padding-bottom">
              <div className="col-md-8">
                <div className="fruit_detail-box">
                  <h3>
                    Best Fresh Gauva
                  </h3>
                  <p className="mt-4 mb-5">
                    but the majority have suffered alteration in some form, by
                    injected humour, or randomised words which don't look even
                    slightly believable. If you are going to use a passage of Lorem
                    Ipsum, you need to be
                  </p>
                  <div>
                    <a href className="custom_dark-btn">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex justify-content-center align-items-center">
                <div className="fruit_img-box d-flex justify-content-center align-items-center">
                  <img src="images/gauva.png" alt className width="250px" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end fruits section */}
        <section className="info_section layout_padding">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <h5>
                  Fruits
                </h5>
                <ul>
                  <li>
                    randomised
                  </li>
                  <li>
                    words which
                  </li>
                  <li>
                    don't look even
                  </li>
                  <li>
                    slightly
                  </li>
                  <li>
                    believable. If you
                  </li>
                  <li>
                    are going to use
                  </li>
                  <li>
                    a passage of
                  </li>
                  <li>
                    Lorem Ipsum,
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <h5>
                  Services
                </h5>
                <ul>
                  <li>
                    randomised
                  </li>
                  <li>
                    words which
                  </li>
                  <li>
                    don't look even
                  </li>
                  <li>
                    slightly
                  </li>
                  <li>
                    believable. If you
                  </li>
                  <li>
                    are going to use
                  </li>
                  <li>
                    a passage of
                  </li>
                  <li>
                    Lorem Ipsum,
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <h5>
                  List
                </h5>
                <ul>
                  <li>
                    randomised
                  </li>
                  <li>
                    words which
                  </li>
                  <li>
                    don't look even
                  </li>
                  <li>
                    slightly
                  </li>
                  <li>
                    believable. If you
                  </li>
                  <li>
                    are going to use
                  </li>
                  <li>
                    a passage of
                  </li>
                  <li>
                    Lorem Ipsum,
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <div className="social_container">
                  <h5>
                    Follow Us
                  </h5>
                  <div className="social-box">
                    <a href>
                      <img src="images/fb.png" alt />
                    </a>
                    <a href>
                      <img src="images/twitter.png" alt />
                    </a>
                    <a href>
                      <img src="images/linkedin.png" alt />
                    </a>
                    <a href>
                      <img src="images/instagram.png" alt />
                    </a>
                  </div>
                </div>
                <div className="subscribe_container">
                  <h5>
                    Subscribe Now
                  </h5>
                  <div className="form_container">
                    <form action>
                      <input type="email" />
                      <button type="submit">
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* footer section */}
        <section className="container-fluid footer_section">
          <p>
            Copyright © 2019 All Rights Reserved By
            <a href="https://html.design/">Free Html Templates</a>
          </p>
        </section>
      </div>


    </>
  )
}

export default Fruit
