import React from 'react';
import StatCard from './StatCard';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Stats.css';

const Stats = () => {
    const statsData = [
        { icon: 'bi bi-person', value: '18,000+', description: 'Registered farmers' },
        { icon: 'bi bi-map', value: '30,000+', description: 'Acres of land' },
        { icon: 'bi bi-geo-alt', value: '252+', description: 'Villages covered' },
        { icon: 'bi bi-globe', value: '42+', description: 'Countries served' },
        { icon: 'bi bi-people', value: '110+', description: 'Customers worldwide' },
        { icon: 'bi bi-clock', value: '12+', description: 'Years in the industry' },
    ];

    return (
        <div className="stats-container">
            <h1>Welcome to Farm2Factory</h1>
            <div className="stats-grid">
                {statsData.map((stat, index) => (
                    <StatCard key={index} icon={stat.icon} value={stat.value} description={stat.description} />
                ))}
            </div>
        </div>
    );
};

export default Stats;
