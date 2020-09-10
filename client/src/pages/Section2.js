import React from 'react'
import PreviewVideo from '../components/ui/PreviewVideo'
import Dotspot from '../components/ui/Dotspot'

const Section2 = () => {
    return (
        <div>
            <div className='flexContainer'>
                <div className='flexItem'><Dotspot black={true} tip={<div>Enterprise Architecture 2005-2012</div>} /></div>
                <div className='flexItem'><Dotspot black={true} tip={<div>Virtual World 2012-2013</div>} /></div>
                <div className='flexItem'><Dotspot black={true} tip={<div>Community Development</div>} /></div>
                <div className='flexItem'><Dotspot black={true} tip={<div>FWC Sustainable System and CDP Archives</div>} /></div>
                <div className='flexItem'><Dotspot black={true} tip={<div>Fair World Community and Phase Network Development</div>} /></div>
            </div>
            <PreviewVideo fForm={true} title={<div>Development Chronology</div>} />
        </div>
    )
}

export default Section2
