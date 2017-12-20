import React, { Component } from 'react'
import dynamic from 'next/dynamic'
import NextHead from 'next/head'

const About = dynamic(import('../components/About.js'))
const Contact = dynamic(import('../components/Contact.js'))
const Footer = dynamic(import('../components/Footer.js'))
const Header = dynamic(import('../components/Header.js'))
const Portafolio = dynamic(import('../components/Portafolio.js'))
const Resume = dynamic(import('../components/Resume.js'))
const Testimonials = dynamic(import('../components/Testimonials.js'))


const data = {
    "main": {
      "name": "Fredy Bustos",
      "occupation": "Web Developer, programer and disigner",
      "description": "I design and program wesites and web aplications",
      "image": "../static/images/profilepic.jpg",
      "bio": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium.",
      "email": "afredybustos@gmail.com",
      "phone": "311 4352131",
      "addres": {
        "street": "cra 25 n 31-12",
        "city": "Bogota",
        "state": "C/Marca",
        "zip": 1189254
      },
      "website": "http://www.fredybustos.xyz/",
      "resumedoumload": "resume",
      "social": [
        {
          "name": "facebook",
          "url": "http://facebook.com",
          "className": "fa fa-facebook"
        },
        {
          "name": "twitter",
          "url": "http://twitter.com",
          "className": "fa fa-twitter"
        },
        {
          "name": "google-plus",
          "url": "http://googleplus.com",
          "className": "fa fa-google-plus"
        },
        {
          "name": "linkedin",
          "url": "http://linkedin.com",
          "className": "fa fa-linkedin"
        },
        {
          "name": "instagram",
          "url": "http://instagram.com",
          "className": "fa fa-instagram"
        },
        {
          "name": "github",
          "url": "http://github.com",
          "className": "fa fa-github"
        },
        {
          "name": "skype",
          "url": "http://skype.com",
          "className": "fa fa-skype"
        }
      ]
    },
    "resume": {
      "education": [
        {
          "school": "Autodidactic",
          "degree": "Master in frontend",
          "grduate": "may 23",
          "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium."
        },
        {
          "school": "Autodidactic",
          "degree": "Javascript Developer",
          "grduate": "march 23",
          "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium."
        }
      ],
      "work": [
        {
          "company": "awesong design studio",
          "title": "frontend",
          "years": "march 2012",
          "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium."
        },
        {
          "company": "Super Cool studio",
          "title": "frontend",
          "years": "march 2014",
          "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium."
        }
      ],
      "skills": [
        {
          "name": "Web design",
          "level": "60%"
        },
        {
          "name": "Javascript",
          "level": "40%"
        },
        {
          "name": "React",
          "level": "50%"
        },
        {
          "name": "Css",
          "level": "70%"
        },
        {
          "name": "Html",
          "level": "80%"
        },
        {
          "name": "Responsive",
          "level": "80%"
        },
      ]
    },
    "portfolio": {
      "projects": [
        {
          "title": "Coffe Cup",
          "description": "Si nos da miedo el amor, es porque hubo una vez nos hicieron daño, o incluso dos",
          "category": "Web",
          "tags": "Web Design",
          "image": "coffee.jpg",
          "url": "http://port1.com",
          "modal": "#modal-01"
        },
        {
          "title": "Console",
          "description": "Si nos da miedo el amor, es porque hubo una vez nos hicieron daño, o incluso dos",
          "category": "Web",
          "tags": "Web Design",
          "image": "console.jpg",
          "url": "http://port2.com",
          "modal": "#modal-02"
        },
        {
          "title": "Jedua",
          "description": "Si nos da miedo el amor, es porque hubo una vez nos hicieron daño, o incluso dos",
          "category": "Web",
          "tags": "Web Design",
          "image": "judah.jpg",
          "url": "http://port3.com",
          "modal": "#modal-03"
        },
        {
          "title": "Into the light",
          "description": "Si nos da miedo el amor, es porque hubo una vez nos hicieron daño, o incluso dos",
          "category": "Web",
          "tags": "Web Design",
          "image": "into-the-light.jpg",
          "url": "http://port4.com",
          "modal": "#modal-04"
        },
        {
          "title": "Farmer Boy",
          "description": "Si nos da miedo el amor, es porque hubo una vez nos hicieron daño, o incluso dos",
          "category": "Web",
          "tags": "Web Design",
          "image": "farmerboy.jpg",
          "url": "http://port5.com",
          "modal": "#modal-05"
        },
        {
          "title": "Girl",
          "description": "Si nos da miedo el amor, es porque hubo una vez nos hicieron daño, o incluso dos",
          "category": "Web",
          "tags": "Web Design",
          "image": "girl.jpg",
          "url": "http://port6.com",
          "modal": "#modal-06"
        },
        {
          "title": "Origami",
          "description": "Si nos da miedo el amor, es porque hubo una vez nos hicieron daño, o incluso dos",
          "category": "Web",
          "tags": "Web Design",
          "image": "origami.jpg",
          "url": "http://port7.com",
          "modal": "#modal-07"
        },
        {
          "title": "Retrocam",
          "description": "Si nos da miedo el amor, es porque hubo una vez nos hicieron daño, o incluso dos",
          "category": "Web",
          "tags": "Web Design",
          "image": "retrocam.jpg",
          "url": "http://port8.com",
          "modal": "#modal-08"
        }
      ]
    },
    "testimonial": {
      "testimonials": [
        {
          "text": "Mira, no se si ira todo bien, pero si te ahogas",
          "user": "Fredy Bustos"
        },
        {
          "text": "Mira, no se si ira todo bien, pero si te ahogas",
          "user": "Daniel Bustos"
        }
      ]
    }
}

class Main extends Component {
  render() {
    return(
      <section className="Main-container">
        <NextHead>
          <title>Modifed React</title>
          <link href="../static/css/app.css" rel="stylesheet" />
        </NextHead>
        <Header main={data.main}/>
        <About main={data.main}/>
        <Resume resume={data.resume}/>
        <Portafolio portfolio={data.portfolio}/>
        <Testimonials testimonial={data.testimonial}/>
        <Contact contact={data.main}/>
        <Footer footer={data.main}/>
      </section>
    )
  }
}

export default Main
