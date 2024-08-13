import React from 'react';
import './FarmerContact.css';

import FarmHeader from './FarmHeader';


const ContactUs = () => {
  return (
    <div>
      <FarmHeader/>
      <div className="contact-container">
        <div className="contact-header">
          <h2>Contact Us</h2>
          <p>
          Contact us to discover how we can turn your agricultural waste into valuable resources and contribute to a sustainable future          </p>
        </div>
        <div className="contact-image" />
        <div className="contact-content">
          <div className="contact-info">
            <h3>PARTNER WITH US</h3>
            <h2>We are here to Help</h2>
            <p>Partnering with us means joining forces to drive sustainability and innovation. Our dedicated team is committed to transforming agricultural waste into valuable resources, benefiting both farmers and industries. By collaborating with us, you contribute to a more sustainable environment while enhancing your operational efficiency.</p>
            <div className="contact-details">
              <p><strong>Phone</strong><br />+987 78787 6767 7678</p>
              <p><strong>Email</strong><br />support@Farm2Factory.com</p>
            </div>
          </div>
          <div className="contact-form">
            <h3>Contact Us</h3>
            <form>
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input type="text" id="fullName" name="fullName" placeholder="Enter Name" />
              </div>
              <div className="form-group">
                <label htmlFor="mobileNumber">Mobile Number</label>
                <input type="text" id="mobileNumber" name="mobileNumber" placeholder="Enter Mobile Number" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Enter Message</label>
                <textarea id="message" name="message" placeholder="Enter Message"></textarea>
              </div>
              <button type="submit" className="send-message-btn">Send Message</button>
            </form>
          </div>
        </div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.223414589208!2d79.80529261480161!3d11.934056491538918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baad2d5fcf88d5d%3A0x6270a12d9ff7d3d7!2sPuducherry!5e0!3m2!1sen!2sin!4v1595604302867!5m2!1sen!2sin"
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0, width: '100%', height: '450px' }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
        <div className="thanks-container">
          <h2>Thanks for Reaching Out</h2>
          <p>
          We appreciate your interest and are eager to assist you. Our team is dedicated to providing tailored solutions and answering any questions you may have. Whether you’re looking to learn more about our services, discuss potential partnerships, or explore how we can support your specific needs, we’re here to help.          </p>
       
        </div>
      </div>
      
    </div>
  );
};

export default ContactUs;
