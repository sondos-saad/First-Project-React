import React from 'react'
import './contactUs.css'

import { FaFacebook , FaTwitter , FaLinkedin ,FaGoogle ,FaFirefox , FaPhone , FaYahoo} from 'react-icons/fa'



export default function ContactUs() {
  return (
    <>
    <div className="contactUs">
        <div className="container">
            <div className="contactWrapper">
                <div className="contactIcon">
                    <FaFacebook className="face"/>
                    <FaTwitter className="twitter"/>
                    <FaLinkedin className="linked"/>
                    <FaGoogle className="google"/>
                    <FaFirefox className="firefox"/>
                </div>
                <div className="contactPhone">
                    <div className="phone">
                        <FaPhone className="phoneIcon"/>
                        <span> +91 123 4556 789</span>
                    </div>
                    <div className="emil">
                    <FaYahoo className="yahooIcon"/>
                        <span> Support@info.com</span></div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
