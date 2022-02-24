import './KaryaGrid.css'
import './KaryaBase.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState } from 'react';

export default function Karya(){

    useState(()=>{
AOS.init({duration : 3000})
    }, [])
  return(
      <>
<section className='grid'>
<div className  ="photo-grid">
      <div
      data-aos="fade"
        className="card card-tall card-wide"
        style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")` 
    }}
      >
        
      </div>
      <div
       data-aos="fade"
       data-aos-delay="500"
        className="card card-tall card-wide"
        style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1010&q=80")` 
    }}
      >
        
      </div>
      <div
       data-aos="fade"
       data-aos-delay="800"
        className="card card-tall card-wide"
        style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1547333590-47fae5f58d21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80")` 
    }}
      >
        
      </div>
      <div
       data-aos="fade"
       data-aos-delay="1200"
        className="card card-tall card-wide"
        style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1578059457703-850565b053f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80")` 
    }}
      >
        
      </div>
      <div
       data-aos="fade"
       data-aos-delay="1500"
        className="card card-tall card-wide"
        style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1533122250115-6bb28e9a48c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80")` 
    }}
      >
        
      </div>
      <div
       data-aos="fade"
      
        className="card card-tall card-wide"
        style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1618331835717-801e976710b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80")` 
    }}
      >
        
      </div>
      </div>


</section>



      </>
  )
}