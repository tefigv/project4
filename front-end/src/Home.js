import header from './img/header.jpg';
import bundle from './img/bundle-ho.jpg';
import './style.css';

const Home = () => {
    return( <>
        <div className='firstly'>
                <img className='img-banner' src={header} alt="prdustcs"/>
            </div>    
                <div className='content'>
                <div className='wrapper'>
                    <article className='opener'>
                        <h2>Meet your routine,<br/>reivented.</h2>
                        <p>The only plastic-free clean way to replace the paste you've used your whole life.</p>
        
                    </article>
                </div>
                <div className='product-container'>
                    <img className='img-product' src={bundle} alt="bundle"/>
                </div>    
            </div>  
            <div className = "footer">
               <p>Ivan Arriola</p> 
            </div>
            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
            </>
            )
   
  };
  
  export default Home;