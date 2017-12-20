import React, { Component } from 'react'

class About extends Component {
  render() {
    if (this.props.main) {
      var name = this.props.main.name
      var image = this.props.main.image
      var bio = this.props.main.bio
      var street = this.props.main.addres.street
      var city = this.props.main.addres.city
      var state = this.props.main.addres.state
      var zip = this.props.main.addres.zip
      var phone = this.props.main.phone
      var email = this.props.main.email
      var resumeDoumload = this.props.main.resumedoumload
    }

    return(
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic"  src={image} alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
  						  <span>{name}</span><br />
  						  <span>{street}<br />
  						     {city}, {state} {zip}
                </span><br />
  						  <span>{phone}</span><br />
                <span>{email}</span>
  					    </p>
              </div>
              <div className="columns download">
                <p>
                  <a href={resumeDoumload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About
