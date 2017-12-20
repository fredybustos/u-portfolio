import React, { Component } from 'react'

class Portafolio extends Component {
  render() {
    if (this.props.portfolio) {
      var portfolio = this.props.portfolio.projects.map((item, index) => {
        var imageUrl = 'static/images/portfolio/'+item.image
        return <div className="columns portfolio-item" key={index}>
           <div className="item-wrap">
              <a href={item.modal} title="">
                 <img alt="" src={imageUrl} />
                 <div className="overlay">
                    <div className="portfolio-item-meta">
                   <h5>{item.title}</h5>
                    <p>{item.category}</p>
                </div>
                 </div>
                 <div className="link-icon"><i className="icon-plus"></i></div>
              </a>
            </div>
          </div>
      })

    }
    return(
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {portfolio}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Portafolio
