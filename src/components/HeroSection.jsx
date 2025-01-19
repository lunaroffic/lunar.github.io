import React from 'react';
import './HeroSection.css';
import LinkButton from './LinkButton';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Инновационный <br/>Discord Бот</h1>
        <p>Улучши свой сервер с помощью Lunar.</p>
        <LinkButton text="Пригласить бота" href="https://discord.com/oauth2/authorize?client_id=1248175100336013363&permissions=573174659149558&integration_type=0&scope=bot+applications.commands" />
      </div>
       <div className="hero-description">
            <p>Lunar - многофункциональный Discord бот, разработанный для улучшения вашего сервера, предоставляя инструменты модерации, развлечения и многое другое.
            </p>
           </div>
    </section>
  );
}

export default HeroSection;