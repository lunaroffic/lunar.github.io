import React from 'react';
import './Header.css';
import LinkButton from './LinkButton';
import { FaHome, FaList, FaHeart, FaDiscord } from 'react-icons/fa';

function Header({ scrollToSection, heroRef, featuresRef}) {
    return (
        <header className="header">
            <a href="/" className="header-logo">
                 <img src="https://media.discordapp.net/attachments/1290700090650132571/1329741242971459607/photo_2024-12-31_16-29-21.jpg?ex=678cc309&is=678b7189&hm=03e3b7a0768e7389095c35dd6c54e5d7500216340c1fdf557b75ff4b13109d16&=&format=webp&width=662&height=662" alt="Lunar Avatar" className="header-logo-img" loading="lazy"/>
            </a>
            <nav className="header-nav">
                <a href="#" className="header-link" onClick={() => scrollToSection(heroRef)}>
                  <FaHome className="header-icon" />
                    Главная
                </a>
                <a href="#" className="header-link" onClick={() => scrollToSection(featuresRef)}>
                   <FaList className="header-icon" />
                    Возможности
                </a>
                 <a href="https://discord.gg/NhgAQAee2W" target="_blank" rel="noopener noreferrer"  className="header-link" >
                  <FaDiscord className="header-icon" />
                   Сервер поддержки
                </a>

            </nav>
            <div className="header-actions">
              <a href="https://www.donationalerts.com/r/jesusikneavgn" target="_blank" rel="noopener noreferrer" className="help-link">
                  <FaHeart  className="header-icon"/>
                  Помочь проекту
             </a>
                <LinkButton text="Добавить меня" href="https://discord.com/oauth2/authorize?client_id=1248175100336013363&permissions=573174659149558&integration_type=0&scope=bot+applications.commands"/>
            </div>
        </header>
    );
}

export default Header;