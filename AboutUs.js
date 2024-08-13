import React from 'react';
import { motion } from 'framer-motion';
// Ensure this path is correct
import './AboutUs.css';
import Header from './Header';

const AboutUs = () => {
  return (
    
    <>
       <Header/>
      <motion.div 
        className="about-us"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="about-us-content">
          {/* Existing sections from the previous code */}
          <motion.h1 
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="about-us-title"
          >
            About Farm
          </motion.h1>
          <motion.h2 
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="about-us-subtitle"
          >
            Where Nature Meets Nurture: Cultivating Tomorrow's Harvest Today
          </motion.h2>
          <div className="about-us-image-container">
            <motion.img 
              src="https://static.vecteezy.com/system/resources/previews/026/797/629/large_2x/farmer-s-hands-over-farm-plants-realistic-image-ultra-hd-high-design-very-detailed-free-photo.jpg" 
              alt="Agriculture"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="about-us-image"
            />
          </div>

          <motion.p 
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="about-us-text"
          >
            A farm is a dedicated area of land where agricultural activities are conducted to cultivate crops, raise livestock, or both. Farms vary in size and scale, ranging from small family-owned operations to large commercial enterprises. The primary goal of a farm is to produce food and other resources for consumption and trade.Overall, farms play a crucial role in the food supply chain and contribute to local and global economies.
          </motion.p>
        

          <motion.h1 
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="about-us-title"
          >
            About Company
          </motion.h1>
          <motion.h2 
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="about-us-subtitle"
          >
            Turning Farm Waste into Industry Gold: Sustainable Solutions for a Greener Tomorrow
          </motion.h2>
          <motion.p 
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="about-us-text"
          >
Our company specializes in transforming agricultural waste into valuable resources for industries. We collect organic waste, such as crop residues and manure, directly from farmers, ensuring efficient and eco-friendly waste management. This waste is then processed and repurposed for various industrial applications, including bioenergy production, compost, and raw materials for manufacturing. By facilitating this circular economy, we help farmers reduce waste disposal costs while providing industries with sustainable and cost-effective inputs          </motion.p>
          <div className="about-us-images">
            <motion.img 
              src="https://media.istockphoto.com/id/1412701708/photo/farmer-working-in-the-fields-with-a-pedestal-plough-in-autumn.jpg?s=612x612&w=0&k=20&c=ycZbA3LEIiqnZJPaV4INj6t_GcHJ39cMznc15_umxSc=" 
              alt="Agriculture"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="about-us-image"
            />
            <motion.img 
              src="https://media.istockphoto.com/id/1297398472/photo/field-of-wheat-at-sunset-with-grain-silos-in-the-back-ground.jpg?s=612x612&w=0&k=20&c=9l7R8uFNOVPxUh3vFWaP-xW31lL11QsucLZ4IdISkVI=" 
              alt="Agriculture"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="about-us-image"
            />
          </div>

          {/* New "Meet our team" section */}
          <motion.h1 
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="about-us-title"
          >
            Meet our team
          </motion.h1>
          <motion.p 
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="about-us-subtitle"
          >
            Meet the dynamic team dedicated to transforming agricultural waste into valuable resources, driving sustainability and innovation every step of the way.
          </motion.p>
          <div className="team-container">
            <div className="team-member">
              <img src="http://apps.skct.edu.in:806/assets/StudentImage/727822TUIT017.jpg" alt="Jesica Albert" className="team-image" />
              <h3>Anusri</h3>
              <p>Expert Farmer</p>
            </div>
            <div className="team-member">
              <img src="http://apps.skct.edu.in:806/assets/StudentImage/727822TUIT019.jpg" alt="Williams" className="team-image" />
              <h3>Archana Debi Stella</h3>
              <p>Organic Farmer</p>
            </div>
            <div className="team-member">
              <img src="http://apps.skct.edu.in:806/assets/StudentImage/727822TUIT018.jpg" alt="James Hentry" className="team-image" />
              <h3>Archana</h3>
              <p>Soil Expert</p>
            </div>
            <div className="team-member">
              <img src="http://apps.skct.edu.in:806/assets/StudentImage/727822TUIT020.jpg" alt="Anita James" className="team-image" />
              <h3>Arul</h3>
              <p>Expert Farmer</p>
            </div>
          </div>
        </div>
        
      </motion.div>
      
    </>
  );
};

export default AboutUs;
