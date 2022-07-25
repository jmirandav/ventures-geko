import React from 'react'


const BannerWave = ({
    image,
    topWave,
    bottomWave,
    imageStyle={}
}) => {
    return (
        <section className="meetting" style={{
            backgroundImage: `url(${image})`,
            ...imageStyle
        }}>
            {topWave && (<img className='top-wave md:hidden' src={topWave} />)}
            {bottomWave && (<img className='bottom-wave' src={bottomWave} />)}
        </section>
    )
}

export default BannerWave