import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ServeItem({title, description, icon}) {
  return (
    <>
        <div className='box'>
            <FontAwesomeIcon icon={icon} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
      
    </>
  )
}
