import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';


function Footer() {
  return (
   

      <div className='footer-container' id='about'>
       
        <div class='footer-links '>
        <img className='image'style={{width:"690px"}} src="images/frontwash.jpg"></img>
          
            
            
           


          


          <div class='footer-link-items' style={{margintop:"150px",marginleft:"50px"}} id='Contact'>
            <h2>Contact Us</h2>
            <Link to='/'>We are open,</Link>
            <Link to='/'> Mon-Sat 09:00 am - 09:00 pm</Link>
            <Link to='/'>Contact
              (+91) 7032109076</Link>
              
            <Link to='/'>We're HERE
              Kondapur,Main Road,
              Gachibowli,
              Hyderabad - 500084</Link>

          </div>

        </div>
        <section class='social-media'>
          <div class='social-media-wrap'>
            <div class='footer-logo'>
              <Link to='/' className='social-logo'>
                Green Wash Car Wash-Centre
                {/* <i class="fab fa-swift"></i> */}
              </Link>
            </div>
            <small class='website-rights'> </small>
            <div class='social-icons'>
              <Link
                class='social-icon-link facebook'
                to='/'
                target='_blank'
                aria-label='Facebook'
              >
                <i class='fab fa-facebook-f' />
              </Link>
              <Link
                class='social-icon-link instagram'
                to='/'
                target='_blank'
                aria-label='Instagram'
              >
                <i class='fab fa-instagram' />
              </Link>
              <Link
                class='social-icon-link youtube'
                to='/'
                target='_blank'
                aria-label='Youtube'
              >
                <i class='fab fa-youtube' />
              </Link>
              <Link
                class='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='Twitter'
              >
                <i class='fab fa-twitter' />
              </Link>
            
            </div>
          </div>
        </section>
      </div>
   
  );
}

export default Footer;
