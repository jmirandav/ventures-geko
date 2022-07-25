import React from 'react'
import avatar1 from '../assets/images/avatar1.png'
import avatar2 from '../assets/images/avatar2.png'
import avatar3 from '../assets/images/avatar3.png'
import avatar4 from '../assets/images/avatar4.png'
import avatar5 from '../assets/images/avatar5.png'

const team = [{
    name:"MIGUEL MUÑOS",
    role:"MANAGIN PARTNER",
    avatar:avatar1
},{
    name:"FREDY ARÉALO",
    role:"GENERAL PARTNER",
    avatar:avatar2
},{
    name:"RENÉ MUÑOZ",
    role:"GENERAL PARTNER",
    avatar:avatar3
},{
    name:"MAURICIO CEVELLOS",
    role:"PRINCIPAL",
    avatar:avatar4
},{
    name:"ROBERTO BERMEJO",
    role:"LEGAL DIRECTOR",
    avatar:avatar5
}]
const TeamGrid=()=>{
    return(
        <div className='flex flex-wrap flex-rows justify-center md:pl-10 md:pr-10'>
            {
                team.map(el=>(
                    <div className='items-center flex flex-col mr-1 ml-2 mt-4 md:mr-12 md:ml-12'>
                        <img className='w-12 md:w-32 lg:w-44' src={el.avatar} />
                        <div className='mt-4 '>
                            <p className='little-text text-center text-blue-500	font-bold'>
                                {el.name}
                            </p>
                            <p className='little-text-xs text-center'>
                                {el.role}
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default TeamGrid