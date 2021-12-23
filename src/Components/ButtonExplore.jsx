import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const ButtonExplore = () => {

    const[hover,setHover] = useState(false);
    const Hover = document.getElementById('btn-effect');


    useEffect( ()=>{
        if(Hover){
            const changeClass = ()=>{
                if(hover){
                    Hover.classList.add('efect-hover-btn-active');
                }else{
                    Hover.classList.remove('efect-hover-btn-active');
                }
            }
    
            changeClass();
        }
        
    }, [hover])

    return ( 
        <div className='btn-home' id='btn-home-id' >
            <div className='button-home' 
                onMouseEnter={()=>setHover(true)}
                onMouseLeave={()=>setHover(false)}
            >
                <Link to = '/destination ' className='btn-home-text'>Explore</Link>
            </div>
            <div id = 'btn-effect' className='efect-hover-btn'></div>

        </div>
        

        
    );
}
 
export default ButtonExplore;