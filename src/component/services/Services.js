import React from 'react'
import './services.css'
import DataServices from './DataServices'
import ServeItem from './ServeItem'
export default function Services() {
    const item = DataServices.map((e)=>{
        return(
            <div className='servicesItem'>
                <ServeItem title={e.title} description={e.description} icon={e.icon} key={e.id}/>
            </div>
        )
    })
  return (
    <>
        <div className="container">
            <div className="servicesWrapper">
                <div className="servicesTittle">
                    <h2>OUR SERVICES</h2>
                    <p>We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have
                        <br/>meaning and add a value for our clients.
                    </p>
                </div>
                <div className='serveItems'>
                    {item}
                </div>
                
            </div>
        </div>
    
    </>
  )
}
