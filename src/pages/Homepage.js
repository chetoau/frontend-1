import React, {useState} from 'react';
import './Homepage.css';
import { Link } from "react-router-dom";
import searchIcon from "../assets/images/search-glass-icon.png";
import dropDown from './images/Vector.png';
import blueDropDown from './images/blueDropdown.png';
import arrowIcon from './images/header-arrow-icon.png'


function Homepage() {

  const [search, setSearch] = useState('');
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="Homepage">
      <section className="landing-page-section">
        <div className="landing-page-container">
          
          <p className="hero-subtitle">Data-driven reviews by students, for students.</p>
          <h1>Find Your Dream Internship</h1>
          
          <div className="search-container">
            <input type="text" placeholder="Search for anything" className="search-input" value={search} onChange={handleChange}/>
            <Link to="/search" state={{searched: search}} className="search-button">
              <img src={searchIcon} alt="Search" className="search-icon" />
            </Link>
          </div>

          <div className="filter-buttons" style={{marginBottom:'20px', marginTop:'30px'}}>
            <button className="filter-button industry">Industry <img src={dropDown}></img></button>
            <button className="filter-button career-role">Career Role <img src={blueDropDown}></img></button>
          </div>
          <div style={{display:"flex", justifyContent:"center", alignItems:'center', gap:'10px'}}>
            <p className="review-invitation">Have an internship you want to review? </p>
            <p className="review-link"> Write A Review</p>
            <img src={arrowIcon} style={{height: "10px"}}></img>
            
          </div>
          
        </div>
      </section>

      <div className="bigcontainer">
        <div className="text-section">
          <h2>Discover what students are saying about their recent internship experiences</h2>
        </div>

        <div className="container">
          <h3>Trending Reviews Of The Week</h3>
          <div className="box">Review</div>
          <div className="box">Review</div>
          <div className="box">Review</div>
          <div className="box">Review</div>
          <div className="box">Review</div>
        </div>

        <p className="description-paragraph">
          We've curated a list of the most sought-after companies and organizations where students have completed internships and shared their candid feedback. By diving into these reviews, you can gain valuable information about the companies that interest you and make more informed decisions about your future internships.
        </p>
      </div>

      <div className="bigcontainer2">
      <p>Join The Community</p>
        <h4>Connect with Us</h4>
        <div className="container2">
          <div className="box2">Slack</div>
          <div className="box2">Github</div>
          <div className="box2">LinkedIn</div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
