import React from 'react'
import './information.css'

export default function Information() {
  return (
    <>
        <div className="Information">
            <div  className="container">
                <div className="information-wrapper">
                    <div className="one">
                        <h3>DORSIN</h3>
                        <ul className="list">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Contact us</a></li>
                        </ul>
                    </div>
                    <div className="two">
                        <h3>Information</h3>
                        <ul className="list">
                            <li><a href="#">Terms & Condition</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Jobs</a></li>
                            <li><a href="#">Bookmarks</a></li>
                        </ul>
                    </div>
                    <div className="three">
                        <h3>Support</h3>
                        <ul className="list">
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Disscusion</a></li>
                        </ul>
                    </div>
                    <div className="four">
                        <h3>Subscribe</h3>
                            <p>In an ideal world this text wouldn’t exist,<br/>
                             a client would acknowledge the<br/>
                              importance of having web copy before <br/>
                              the design starts.</p>
                              <input type="text" placeholder="Email" className="footer-form"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer">
            <div className="container">
                <div className="footer-wrapper">
                    <p>2023 © Dorsin  Design by <span>sondos</span> </p>
                </div>
            </div>
        </div>
      
    </>
  )
}
