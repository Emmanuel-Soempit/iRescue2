import React from 'react'
import '../../stylings/privacy_terms.css'

function WithOptions({content}) {
    return (
        <div className='optionsWrapper'>
            <h3 className='optionsHeader'>{`${content.number}.`}<span>{content.title}</span></h3>

            {
                content.options.map(current => 
                    <h2 style={{marginBottom: '5px', gap: '5px'}} className='optionsTwoHeader'>{`${current.number}`}<span className='optionText'>{current.text}</span></h2>
                )
            }

        </div>
    )
}

export default WithOptions
