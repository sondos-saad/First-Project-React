import React from 'react'

import './Header.css'

export default function Header() {
  return (
    <>
        <header>
        <div className="headerOverlay">
            <div className="container">
            
                <div className="headerWrapper">
                    <h1>We help startups launch their<br/> products</h1>
                    <p>Etiam sed.Interdum consequat proin vestibulum class at<br/> Etiam sed.Interdum consequat proin vestibulum class at.</p>
                    <form>
                        <input type="email" placeholder="Email"/>
                        <button type="submit">SUBSCRIBE</button>
                    </form>
                    
                </div>
            </div>
        </div>
           
        </header>

    </>
  )
}
