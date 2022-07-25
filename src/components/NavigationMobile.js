import React, { useState } from 'react'
import main from '../assets/images/Mail-White.svg'

const items = [{
    id:"1",
    icon:main
},{
    id:"2",
    icon:main
},{
    id:"3",
    icon:main
},{
    id:"4",
    icon:main
},{
    id:"5",
    icon:main
},{
    id:"6",
    icon:main
}]

const NavigationMobile = () =>{
    const [selected,setSelected] = useState("1")
    return(
        <nav className='nav-mobile flex flex-col'>
            {
                items.map(it=>(
                    <div className='flex flex-1 justify-center items-center relative'>
                        {selected == it.id && (<div className='primary-bg w-14 h-14 rounded-full absolute z-0 left-8' />)}
                        <img className={`w-8 h-8 z-10 ${selected == it.id && 'ml-6'}`} src={it.icon} />
                    </div>
                ))
            }
        </nav>
    )
}
export default NavigationMobile