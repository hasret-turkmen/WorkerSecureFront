import React from 'react';
import dev1 from '../assets/asaf.jpg';
import dev2 from '../assets/hasret.jpg';
import dev3 from '../assets/metin.jpg';
import dev4 from '../assets/sevcan.jpg';
import '../css/Developers.css';

const Developers = () => {
    const developers = [
        { name: 'Asaf Emin Gündüz', image: dev1 },
        { name: 'Hasret Türkmen', image: dev2 },
        { name: 'Niyazi Ahmet Metin', image: dev3 },
        { name: 'Selin Sevcan Çakan', image: dev4 }
    ];

    return (
        <div className="developers-container">
            <h1>Our Developers</h1>
            <div className="developer-list">
                {developers.map((developer, index) => (
                    <div key={index} className="developer-card">
                        <img src={developer.image} alt={developer.name} className="developer-image" />
                        <div className="developer-name">{developer.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Developers;
