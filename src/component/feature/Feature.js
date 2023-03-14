import React from 'react'
import './feature.css'
import img from '../../image/online-world2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'

export default function Feature() {
  return (
    <>
        <div className='sectionFeature'>
            <div className='container'>
                <div className='featureWrapper'>
                    <div className='featureText'>
                        <h2>A digital web design studio creating <br/> modern & engaging online <br/>experiences</h2>
                        <p>Separated they live in Bookmarksgrove right at the coast of the <br/>
                        Semantics, a large language ocean. A small river named Duden flows<br/>
                         by their place and supplies it with the necessary regelialia.</p>
                         <ul className='featureList'>
                            <li>We put a lot of effort in design.</li>
                            <li>The most important ingredient of successful website.</li>
                            <li>Sed ut perspiciatis unde omnis iste natus error sit.</li>
                            <li>Submit Your Orgnization.</li>
                         </ul>
                         <button className='btn'>Learn More <FontAwesomeIcon icon={faArrowRight} /> </button>
                    </div>
                    <div className='featureImage'>
                        <img src={img} alt='feature' className='imgFeature'/>
                    </div>

                </div>
            </div>
        </div>
        <div className='featureSectionTwo'>
            <div className='featureLayout'>
                <div className='container'>
                    <div className='SectionTwo'>
                        <h2>Build your dream website today</h2>
                        <p>But nothing the copy said could convince her and so it didn’t take long until a few  <br/>
                        insidious Copy Writers ambushed her.</p>
                        <button className='btn'>View Plan & Pricing</button>
                    </div>
                </div>
            </div>
        </div>
        
    
    </>
  )
}
