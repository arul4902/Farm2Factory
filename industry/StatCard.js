import React from 'react';
import './StatCard.css';

const StatCard = ({ icon, value, description }) => {
    return (
        <div className="stat-card">
            <i className={`${icon} stat-icon`}></i>
            <div className="stat-value">{value}</div>
            <div className="stat-description">{description}</div>
        </div>
    );
};

export default StatCard;
