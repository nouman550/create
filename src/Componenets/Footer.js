import React from "react";
import "../Componenets/Footer.css";
import Grid from '@material-ui/core/Grid';
import logos from '../Images/footer-logo.png';
import insta from '../Images/insta.png';
import face from '../Images/facebook.png';
import twitt from '../Images/twitter.png';
import mail from '../Images/mail.png';
import Button from '@material-ui/core/Button';
import { NavLink as Link } from 'react-router-dom';
function Footer() {



  return (

    <>
      <div className="footer-main">
        <Grid container spacing={1} >

          <Grid lg={4}  sm={12} >
          <li className="logo-link" ><Link to="/"> <img className="logo" src={logos} alt="logo"></img></Link></li>
            <p className="footer-content">
              Leaflet Distribution Team<br></br>
              <span className="boston">145-147 Boston Road Hanwell, London W7 3SA<br></br></span>
              <span className="phone">Phone :<a href="tel:0208 935 5753"> 0208 935 5753</a> </span><br></br>
              <span className="email">Email :<a href="mailto:info@leafletdistributionteam.co.uk"> info@leafletdistributionteam.co.uk</a> </span>

            </p>
            <div className="footer-icons">
              <div className="face-footer"> <a href="facebook.com"> <img src={face} alt="facebook"></img></a></div>
              <div className="twitt-footer"><a href="twitt.com"> <img src={twitt} alt="twitter"></img></a></div>
              <div className="insta-footer"> <a href="insta.com"><img src={insta} alt="insta"></img> </a></div>
              <div className="mail-footer"><a href="mail.com"><img src={mail} alt="mail"></img> </a></div>

            </div>
          </Grid>
          <Grid lg={2} sm={6}>
            <h2 className="services">Services</h2>
            <ul className="service-menu">
              <li><Link to="/door">Door to Door</Link></li>
              <li><Link to="/hand">Hand to Hand</Link></li>
              <li><Link to="/hand">B2B</Link></li>
              <li><Link to="/hand">Printing</Link></li>
              <li><Link to="/design">Design</Link></li>
            </ul>
          </Grid>
          <Grid lg={1} sm={6}>
            <h2 className="company">Company</h2>
            <ul className="company-menu">
              <li><Link to="/about">Abous Us</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/faq">FAQs</Link></li>
              <li><Link to="/areas">Areas We Cover</Link></li>
              <li><Link to="/sectors">Sectros</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </Grid>
          <Grid lg={2} sm={6}>
            <h2 className="tools">Tools</h2>
            <ul className="tool-menu">
              <li><Link to="/roi">ROI Calculator</Link></li>
              <li><Link to="/calcaulator">Pricing Calculator</Link></li>
              <li><Link to="/gps">GPS Guide</Link></li>
              <li><Link to="/guide">Leaflet Guide</Link></li>

            </ul>
          </Grid>

          <Grid lg={3} sm={12} >
            <h2 className="letter">Newsletter</h2>
            <input className="mail-field" type="text" placeholder="your@email.com"></input>
            <Button className="subscribe">Subscribe</Button>
            <h2 className="blog">Blog Posts</h2>
            <ul className="posts">
              <li><Link to="/blog/agent">Estate Agent advertising</Link></li>
              <li><Link to="/blog/leaflet">Does Leaflet Distribution Work?</Link></li>
              <li><Link to="/blog/work">Do Leaflet Drops Work</Link></li>
            </ul>
          </Grid>

        </Grid>
      </div>
      <div className="below-footer">
        <p><Link to="/privacy">Privacy</Link> | <Link to="terms.com">Terms & Conditions</Link> | Copyright Notice</p>
      </div>
    </>
  )


}

export default Footer