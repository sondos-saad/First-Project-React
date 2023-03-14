import React from 'react'
import './about.css'

export default function About() {
  return (
    <>
        <div className="container">
            <div className="aboutWrapper"> 
                    <div className="aboutTittle">
                        <h2>GET IN TOUCH</h2>
                        <p>We thrive when coming up with innovative ideas but also understand that a smart concept should be 
                        <br/>supported with measurable results.</p> 
                    </div>
                    <div className="about">
                        <div className="about-content">
                            <h4>Office Address 1:</h4>
                            <p>4461 Cedar Street Moro, AR 72368</p>
                            <h4>Office Address 2:</h4>
                            <p>2467 Swick Hill Street </p>
                            <p>New Orleans, LA 70171</p>
                            <h4>Working Hours:</h4>
                            <p>9:00AM To 6:00PM</p>

                        </div>
                        <div className="about-form">
                            <form>
                                <input type="text" placeholder="Your name"/>
                                <input type="text" placeholder="Your email"/>
                                <br/> 
                                <input type="subject" placeholder="Your subject"/>
                                <br/>
                                <textarea placeholder="Your message" cols="30" rows="5"/>
                                <br/>
                                <button className="btn" type="submit">Send message</button>
                            </form>
                        </div>
                    </div>
            </div>
        </div>
      
    </>
  )
}
