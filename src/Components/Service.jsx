import React from 'react'

function Service() {
  return (
    <>
      <div>
        {/* service section */}
        <section className="service_section layout_padding ">
          <div className="container">
            <h2 className="custom_heading">Our Services</h2>
            <p className="custom_heading-text">
              There are many variations of passages of Lorem Ipsum available, but
              the majority have
            </p>
            <div className=" layout_padding2">
              <div className="card-deck">
                <div className="card">
                  <img className="card-img-top" src="images/card-item-1.png" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Orange</h5>
                    <p className="card-text">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in some
                      form, by injected humour, or randomised words which don't look
                      even slightly believable.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <img className="card-img-top" src="images/card-item-2.png" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Grapes</h5>
                    <p className="card-text">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in some
                      form, by injected humour, or randomised words which don't look
                      even slightly believable.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <img className="card-img-top" src="images/card-item-3.png" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Gauva</h5>
                    <p className="card-text">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in some
                      form, by injected humour, or randomised words which don't look
                      even slightly believable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <a href className="custom_dark-btn">
                Read More
              </a>
            </div>
          </div>
        </section>
        {/* end service section */}
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

export default Service
