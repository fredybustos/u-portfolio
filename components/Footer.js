import React, { Component } from 'react'

class Footer extends Component {
  render() {
    if (this.props.footer) {
      var social = this.props.footer.social.map((item, index) => {
        return(
          <li key={index}><a href={item.url}><i className={item.className}></i></a></li>
        )
      })
    }
    return(
      <footer id="footer">
        <div className="row">
           <div className="twelve columns">
              <ul className="social-links">
                {social}
              </ul>
              <ul className="copyright">
                 <span>Modified by Fredy with React<a title="Styleshout" href="#"></a></span>
              </ul>
           </div>
           <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
        </div>
      </footer>
    )
  }
}

export default Footer
