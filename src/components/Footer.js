import React from 'react'
import logo from '../assets/images/logo-negative.svg'
import Title from './Title'
const Footer=()=>{
    return(
        <div className='footter pt-16 '>
            <div className='flex flex-col'>
                <div className='flex justify-start'>
                    <Title title={<img className='w-24 md:w-48' src={logo} />} />
                </div>
                
                <div className='grid grid-cols-3 mt-12 pl-8 pr-8 link-container'>
                    <h3>
                        What we do
                    </h3>
                    <h3>
                        Partners
                    </h3>
                    <h3>
                        Ready to build? Contact us
                    </h3>
                    <h3>
                        Key Project
                    </h3>
                    <h3>
                        The Team
                    </h3>
                </div>
                <div className='flex justify-end mt-16'>
                    <span className='cpy'>Copyright Geko Ventures</span>
                </div>
            </div>
        </div>
    )
}

export default Footer