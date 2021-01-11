import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return(
        <section className="footer-color">
        <div className="social-links">
        {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/komal-suthar" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/komalsuthar151" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>
        </div>    
        {/* <div className=""></div> */}
        </section>
    )
  }
}

export default Footer;
