import ceo from './img/ceo1.png';
import pack from './img/pack.png';
import lab from './img/lab.png';
import './style.ab.css';

const About = () => {
    return (
        <>  
        <div className='first'>
            <div className = 'ceo'>
                    <img src={ceo} alt="company CEO"/>
            </div>
            <div className='title'>
                <h2>Every Little Bit Counts.</h2>
                <h4>Endding plastic waste one smile at a time.</h4>
            </div>    
        </div>      
            <div className='top'>
                <p>Bite started with two questions: Why does toothpaste come in plastic tubes and what exactly are we putting in our bodies when we brush our teeth?</p>
            </div>
            <div className='pack'>
                <img src={pack} alt="packaging"/>
            </div>    
            <div className='float'>
                <div className='text'>
                    <h2>Digging Deep.</h2>
                    <p>At the heart of Bite, we want to do better. That means asking ourselves, every day, how we can improve. Whether it’s mindlessly tossing out an 
                    empty toothpaste tube or glossing over the ingredients list, small daily actions can shape the future of our planet. By uncovering how we can be 
                    better to ourselves and to the earth, we are one step closer to a healthier and plastic-free world.</p>
                </div>
                <img src={lab} alt="lab pic"/>
                </div>   
        </>       
       
    );
  };
  
  export default About;