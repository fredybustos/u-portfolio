import React, { Component } from 'react'

class Header extends Component {
  render() {
    if (this.props.main) {
      var name = this.props.main.name
      var occupation = this.props.main.occupation
      var description = this.props.main.description
      var city = this.props.main.addres.city
      var netWorks = this.props.main.social.map((item, index) => {
        return(
          <li key={index}><a href={item.url}><i className={item.className}></i></a></li>
        )
      })
    }
    return(
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">I'm {name} </h1>
            <h3>I'm a {city} based <span>{occupation}</span>{description}</h3>
            <hr />
            <ul className="social">
               {netWorks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    )
  }
}

export default Header
