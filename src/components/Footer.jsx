import React, { useEffect, useState } from 'react';
import './Footer.css';
import { FaArrowUp, FaHeart } from 'react-icons/fa';

function Footer() {
    const [showScroll, setShowScroll] = useState(false);
    const botName = 'Lunar';
    const developerName = 'jesusikneavgn';

    useEffect(() => {
        const checkScrollTop = () => {
            if (!showScroll && window.pageYOffset > 400) {
                setShowScroll(true);
            } else if (showScroll && window.pageYOffset <= 400) {
                setShowScroll(false);
            }
        };

        window.addEventListener('scroll', checkScrollTop);

        return () => window.removeEventListener('scroll', checkScrollTop);
    }, [showScroll]);

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <div className="footer-logo">
                        <img src="https://media.discordapp.net/attachments/1290700090650132571/1329741242971459607/photo_2024-12-31_16-29-21.jpg?ex=678cc309&is=678b7189&hm=03e3b7a0768e7389095c35dd6c54e5d7500216340c1fdf557b75ff4b13109d16&=&format=webp&width=662&height=662" alt="Lunar Avatar" className="footer-logo-img" loading="lazy" />
                        <span className="footer-logo-text">{botName}</span>
                    </div>
                    <p className="footer-description">
                        Lunar — это универсальный виртуальный помощник, который предлагает широкий спектр
                        функций для улучшения вашего взаимодействия.
                    </p>
                    <p className="footer-developer">
                        <br />Разработчик бота - {developerName}.
                    </p>
                </div>
                <div className="footer-right">
                    <div className="footer-links-container">
                        <div className="footer-links-column">
                            <h4 className="footer-links-title">Страницы</h4>
                            <a href="/" className="footer-link"  target="_blank" rel="noopener noreferrer">
                                Главная
                            </a>
                            <a href="/privacy" className="footer-link"  target="_blank" rel="noopener noreferrer">
                                Конфиденциальность
                            </a>
                            <a href="/terms" className="footer-link"  target="_blank" rel="noopener noreferrer">
                                Условия Обслуживания
                            </a>
                        </div>
                        <div className="footer-links-column">
                            <h4 className="footer-links-title">Ссылки</h4>
                            <a
                                href="https://discord.com/oauth2/authorize?client_id=1248175100336013363&permissions=573174659149558&integration_type=0&scope=bot+applications.commands"
                                className="footer-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Пригласить бота
                            </a>
                            <a
                                href="https://discord.gg/NhgAQAee2W"
                                className="footer-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Сервер поддержки
                            </a>
                        </div>
                        <div className="footer-links-column">
                            <h4 className="footer-links-title">Мониторинги</h4>
                            <a
                                href="https://bots.server-discord.com/1248175100336013363"
                                className="footer-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Мы на SDC
                            </a>
                              <a
                                href="https://top.gg/bot/1248175100336013363"
                                  target="_blank"
                                rel="noopener noreferrer"
                                 className="footer-link"
                            >
                                 Мы на Top.gg
                            </a>
                        </div>
                        <a
                            href="https://www.donationalerts.com/r/jesusikneavgn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link help-link"
                        >
                            <FaHeart  className="footer-icon"/>
                          <span>Помочь проекту</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 - {new Date().getFullYear()} {botName}. Все права защищены.</p>
                <p>Мы не являемся аффилированным лицом компании Discord Inc.</p>
            </div>
            <button className="scroll-to-top" onClick={scrollTop} style={{ opacity: showScroll ? '1' : '0' }} >  <FaArrowUp /> </button>
        </footer>
    );
}

export default Footer;