import React from 'react'
import '../../stylings/privacy_terms.css'


function WithSubTitle({content}) {
    return (
        <div className='optionsWrapper'>
            <h3 className='optionsHeader'>{`${content.number}.`}<span>{content.title}</span></h3>
             
             <span className='optionsTwoHeader'>{content.subTitle}</span>

             {
                content.headerOptions.map(current => 
                    <h2 style={{marginBottom: '5px', gap:'3px'}} className='optionsTwoHeader '>{`${current.title}`}<span className='optionText'>{current.text}</span></h2>
                )
            }


        </div>
    )
}

export default WithSubTitle
