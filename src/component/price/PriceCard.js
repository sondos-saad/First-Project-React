import React from 'react'

export default function PriceCard({title, price, description, band,  space, support, domain, fees, btn}) {
  return (
    <>
        <div className='cardPrice'>
            <div className='cardItem'>
                <h3>{title}</h3>
                <h4>{price}</h4>
                <h5>{description}</h5>
                <hr className="new1"/>
                <p>Bandwidth:<span>{band}</span></p>
                <p>Onlinespace : <span>{space}</span></p>
                <p>Support: <span>{support}</span></p>
                <p>Domain: <span>{domain}</span></p>
                <p>Hidden Fees:<span>{fees}</span></p>
                <button className='btn'>{btn}</button>
            </div>
            
        </div>

      
    </>
  )
}
