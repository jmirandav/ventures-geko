import React from 'react'


const MarcasGrid = ({ card, images }) => {
    return (
        <div className='mt-16'>
            <div className='grid grid-cols-2 gap-16 md:flex md:flex-wrap md:justify-center'>
                {images.map(img => {
                    if (card) {
                        return (
                            <div className='w-24 h-24  shadow-lg rounded-full flex justify-center items-center p-5 md:w-48 md:h-48' style={{ background: "#fff" }} >
                                <img style={{ width: "100%" }} src={img} />
                            </div>
                        )
                    }else{
                        return (
                            <img  className="md:w-24 md:flex-1 w-full" src={img} />
                        )
                    }

                })}

            </div>
        </div>
    )
}

export default MarcasGrid