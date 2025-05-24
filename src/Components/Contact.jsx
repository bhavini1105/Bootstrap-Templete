import React from 'react'

function Contact() {
  return (
    <>
      <div>
        {/* contact section */}
        <section className="contact_section layout_padding">
          <div className="container">
            <h2 className="font-weight-bold">
              Contact Us
            </h2>
            <div className="row">
              <div className="col-md-8 mr-auto">
                <form action>
                  <div className="contact_form-container">
                    <div>
                      <div>
                        <input type="text" placeholder="Name" />
                      </div>
                      <div>
                        <input type="text" placeholder="Phone Number" />
                      </div>
                      <div>
                        <input type="email" placeholder="Email" />
                      </div>
                      <div className="mt-5">
                        <input type="text" placeholder="Message" />
                      </div>
                      <div className="mt-5">
                        <button type="submit">
                          send
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* end contact section */}
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

export default Contact
