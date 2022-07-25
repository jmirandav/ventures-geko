import React from "react";
import logo from '../assets/images/logo.svg';

const items=["What we do", "Key project", "Partners", "The Team", "Ready to build? Contact us"]

const NavigationDesktop=()=>{
    return(
        <nav className="hidden md:flex">
            <div>
                <img className='brand' src={logo} />
            </div>        
            <div className="flex-1 flex justify-end">
                {
                    items.map(it=>(
                        <div className="p-8">
                            <span className="opacity-70 text-white text-md">
                                {it}
                            </span>
                        </div>
                    ))         
                }
            </div>
        </nav>
    )
}

export default NavigationDesktop