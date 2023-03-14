import React from 'react'
import './price.css'
import PriceCard from './PriceCard'
import DataPrice from './DataPrice'

export default function Price() {
    const itemPrice = DataPrice.map((e)=>{
        return(
            <div >
                <PriceCard 
                title={e.title} 
                description={e.description}
                 price={e.price} 
                 band={e.band} 
                 space={e.space} 
                 support={e.support}
                  domain={e.domain}
                  fees={e.fees}
                  btn={e.btn}
                  key={e.id}/>
            </div>
        )
    })
  return (
    <>
        <div className='price'>
            <div className='container'>
                <div className='priceWrapper'>
                    <div className="priceTittle">
                        <h2>OUR SERVICES</h2>
                        <p>We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have
                         <br/>meaning and add a value for our clients.
                        </p>
                    </div>
                    <div className='cards'>
                        {itemPrice}
                    </div>
                </div>
            </div>
        </div>
      
    </>
  )
}
