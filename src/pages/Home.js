
import '../Home.css'
import sally from './sal.png'
import sally2 from './sal2.png'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export default function Home(){
useEffect(()=>{
    AOS.init({duration : 2000})
  }, [])

    return (
        <>
        
        <div className='container'>
        <div  className='content1'>
        <div data-aos="slide-right" className='isicontent1'>
<h1>Welcome To MyPage</h1>
<h3>I'm Farhan Rafid Syauqi</h3>
<h3>a web developer</h3>
<h3>specializing in</h3>
<h3>front end</h3>
<Link to='profile' className='explore'>Explore!</Link>
        </div>

        </div>
        <div 
       
        className='content2'>
        <img data-aos="slide-down"  src={sally} className='sally' alt=""/>
<img data-aos="slide-up" src={sally2} className='sally2' alt=""/>

</div>
        </div>
    </>
    )
}