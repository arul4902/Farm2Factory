import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import { keyframes } from '@emotion/react';
import Slider from 'react-slick';

import './adminHome.css';
import Stats from './Stats';
import relianceLogo from './rewe.jpg';
import nilonsLogo from './field fresh.jpg';
import metroLogo from './honour foods.jpeg';
import motherDairyLogo from './mapro.jpg';
import tesco from './tesco.png';
import netra from './netra agro.png';
import AdminHeader from './adminHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faTractor, faShieldAlt, faUserFriends } from '@fortawesome/free-solid-svg-icons';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroSection = styled('header')({
  position: 'relative',
  height: '100vh',
  textAlign: 'center',
  color: '#fff',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  animation: `${fadeIn} 2s ease-out`,
});

const HeroText = styled('div')({
  zIndex: 1,
  maxWidth: '800px',
  textAlign: 'center',
});



const categories = [
  { img: 'https://media.istockphoto.com/id/547150468/photo/fresh-bio-waste-and-compost.jpg?s=612x612&w=0&k=20&c=iN9Sjhlb5BiENasbjpN0G3EPfdy92UN9bgcTURD9SSc=', title: 'Organic Waste', count: 12 },
  { img: 'https://media.istockphoto.com/id/1436672364/photo/hazardous-waste-in-yard-of-chemical-waste-processing-and-disposal-works.jpg?s=612x612&w=0&k=20&c=oPUIocD2EkZEc4vJTz0aElcR6yemZmCBfGb3PHsCSFo=', title: 'Chemical Waste', count: 12 },
  { img: 'https://media.istockphoto.com/id/1345268522/photo/dirty-beach-environment-from-plastic-garbage.jpg?s=612x612&w=0&k=20&c=BfXSlvLgREfo-GW4N1VZh60WSH7_gWALGKnxgYEMGY0=', title: 'Plastic Waste', count: 12 },
  { img: 'https://media.istockphoto.com/id/531543158/photo/stainless-steel-scrap.jpg?s=612x612&w=0&k=20&c=kFPmE8O_rnpg6egLFEjly3tfvE7-kq4ZtCaqV3mJgI8=', title: 'Metal Waste', count: 10 },
  { img: 'https://media.istockphoto.com/id/1022715774/photo/medical-hazardous-laboratory-waste.jpg?s=612x612&w=0&k=20&c=jOxQCOZszeRpoGi6mPjKzHog_Bm49PTToeki0cH2UBQ=', title: 'Biomedical Waste', count: 10 },
  { img: 'https://media.istockphoto.com/id/1484099148/photo/obsolete-and-out-of-date-technology.jpg?s=612x612&w=0&k=20&c=ub7lGatF1tcwx3GdopgP5lY1pm1sJpH2c3_mRH8qlug=', title: 'E-waste', count: 10 },
];
const customerLogos = [
  { img: relianceLogo, alt: 'Reliance Retail' },
  { img: nilonsLogo, alt: 'Nilons' },
  { img: metroLogo, alt: 'Metro' },
  { img: motherDairyLogo, alt: 'Mother Dairy' },
  { img: tesco, alt: 'tesco' },
  { img: netra, alt: 'netra' },
  
];
const pillars = [
  {
    icon: faCogs,
    title: 'Largest integrated value chain',
    description: "It's our equity and compensation policies, our promises to customers, or use of state-of-the-art technologies to make trust tangible, Sahyadri Farms has been leading the way on all fronts."
  },
  {
    icon: faTractor,
    title: 'Farm-to-fork traceability',
    description: 'Our farmers see what happens with their produce after it leaves their farm, and our consumers see details about their food, their farmer, and what happens with the money they pay.'
  },
  {
    icon: faShieldAlt,
    title: 'Safety and hygiene',
    description: 'At Sahyadri Farms, we ensure that we remain updated with the latest health norms. We even followed updated FSSAI norms meant to ensure safety during the global COVID pandemic.'
  },
  {
    icon: faUserFriends,
    title: 'Farmer-led initiative',
    description: 'Sahyadri Farms is an initiative fully led and managed by farmers who have complete understanding of the problems faced by small-landholding farmers.'
  }
];
const AdminHome = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <AdminHeader/>
      <main className="App-main">
        <HeroSection className="hero-section">
          <video className="video-background" autoPlay loop muted>
            <source src="/3209211-uhd_3840_2160_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          
          
          
          
          
          
          
          
          .....................................................................
          .++++++++++.........++.....................</video>
          <HeroText className="hero-text">
            <Typography variant="h2" component="h1">Farm2Factory</Typography>
            <Typography variant="h5" component="p">Every product begins with a promise – from farm to factory, we deliver</Typography>
           
          </HeroText>
        </HeroSection>
        <section className="stats-section">
          <Stats />
        </section>
        <section className="shop-by-category">
          <Typography variant="h5" className="category-title">Category</Typography>
          <div className="category-container">
            {categories.map((category, index) => (
              <div key={index} className="category-item">
                <img src={category.img} alt={category.title} className="category-image" />
                <Typography variant="body1">{`${category.title} - (${category.count})`}</Typography>
              </div>
            ))}
          </div>
        </section>
        
        

        <section className="feature-section1">
          <div className="feature-image">
            <img src="https://img.freepik.com/premium-photo/woman-agriculture-concept_882954-36499.jpg" alt="Feature" />
          </div>
          <div className="feature-content">
            <Typography variant="h6" className="feature-subtitle">Feature is in the Soil</Typography>
            <Typography variant="h4" className="feature-title">How can easily find out the right box for you Need?</Typography>
            <Typography variant="body3" className="feature-description">
              To easily find the right box for your needs, start by assessing the specific requirements of what you need to store or transport. Consider factors such as size, weight, and fragility of the items. Measure the dimensions of the items and compare them with the available box sizes to ensure a proper fit. Check the weight capacity of the box to ensure it can safely hold the items without breaking. Additionally, consider any special features needed, such as cushioning for fragile items or waterproofing for items that need protection from moisture. By carefully evaluating these factors, you can quickly identify the right box that meets your needs and ensures the safe storage or transportation of your items.
            </Typography>
            
          </div>
        </section>

        <div className="pillars-section">
    <h2>Pillars of Farm2Factory</h2>
    <div className="pillars-container">
      {pillars.map((pillar, index) => (
        <div key={index} className="pillar-card">
          <FontAwesomeIcon icon={pillar.icon} size="4x" color="#1B5E20" />
          <h3>{pillar.title}</h3>
          <p>{pillar.description}</p>
          <button>Read More</button>
        </div>
      ))}
    </div>
  </div>

        <section className="our-customers">
          <Typography variant="h5" align="center">Our Esteemed Customers</Typography>
          <div className="carousel-container">
            <Slider {...settings}>
              {customerLogos.map((logo, index) => (
                <div key={index} className="carousel-slide">
                  <img src={logo.img} alt={logo.alt} className="carousel-image" />
                </div>
              ))}
            </Slider>
          </div>
        </section>
      </main>
    </>
  );
};

export default AdminHome;
