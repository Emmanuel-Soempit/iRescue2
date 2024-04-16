import React from 'react'
import '../../stylings/privacy_terms.css'

function LastUpdated({lastUpdated, content}) {
    return (
        <div className='updatedWrapper'>
            <h2 className='subHeaderOne'>{`Last Updated: ${lastUpdated}`}</h2>

            <span className='bodyText'>{content}</span>
            
        </div>
    )
}

export default LastUpdated
