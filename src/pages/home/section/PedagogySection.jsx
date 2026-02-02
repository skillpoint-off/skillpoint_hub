import React from 'react';
import PedagogyCard from './PedagogyCard';
import './PedagogySection.css';

const PedagogySection = () => {
    const cards = [
        {
            index: '01',
            title: 'Learn Business,',
            highlight: 'Startup-Style',
            description: 'Fast cycles, ambiguous problems, real customers.',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop'
        },
        {
            index: '02',
            title: 'Learn by',
            highlight: 'Building',
            description: 'From AI products, D2C Brands, GTM strategies: build cycles will anchor your learning.',
            image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop'
        },
        {
            index: '03',
            title: 'Work Backwards',
            highlight: 'from Outcomes',
            description: 'Pedagogy and pathways are designed from the roles founders actually hire for.',
            image: 'https://images.unsplash.com/photo-1475721027785-f74dea327912?q=80&w=1000&auto=format&fit=crop'
        }
    ];

    return (
        <section className="pedagogy">
            <div className="container">
                <h2 className="section-title">
                    Tenets of our Pedagogy: <span className="highlight">AI-first, Startup-Focused, Builder-Led</span>
                </h2>
                <div className="cards-grid">
                    {cards.map((card, i) => (
                        <PedagogyCard key={i} {...card} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PedagogySection;
