import sea from './img/plastic.jpeg';
import bottle from './img/bottle.jpg';
import bag from './img/bag.jpg';
import './style-sus.css';

const Sustainability = () => {

  return (     
    <>     
  <div className='header'>
      <img className='img-header' src={sea} alt="plastic in ocean"/> 
      <div className='center'>
          <h1>Sustainability</h1>
          <p>Join us and millions of others on our journey to
          reduce plastic waste. Here’s how and why we do it—every little bit counts.</p>
      </div>
  </div>
        
    <div className='wrapper-shop-now'>
      <button className = 'shop-now'><a href='/CreativeProject/shop.html'>Shop Now </a></button>
    </div> 
    <div className='plastic-free'>
      <h1>We’re different and<br/>
      it makes a difference.</h1>
      <p>Here’s how we happily avoid plastic</p>
    </div> 
    <div className='content'> 
      <div className='bottle-wrapper'>
          <div className='packaging right'>
              <h2>Bottles</h2>
              <p>We only ever use glass bottles. Why? Unlike plastic, glass is infinitely recyclable, looks great, and breaks down into sand at the end of its life.</p>
          </div>
          <div className='img-wrapper left'>
              <img className='img-packaging' src={bottle} alt="container"/>
          </div>
      </div> 
      <div className='envelopes-wrapper'>
          <div className='packaging left'>
              <h2>Envelopes</h2>
              <p>nstead of plastic poly-mailers, we ship with kraft envelopes padded with post-consumer recycled newspapers.</p>
          </div>
          <div className='img-wrapper right'>
              <img className='img-packaging' src={bag} alt="plastic bags"/>
          </div>
        
      </div>   
    </div> 
    {/* <div class='api'>
          
          <img id="img" src="" />
      </div> */}
      </>  
      )
};

export default Sustainability;