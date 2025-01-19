import React, { useEffect, useRef } from 'react';
import './FeaturesSection.css';
import Feature from './Feature';
import { FaWrench, FaMoneyBillAlt, FaShieldAlt, FaGamepad, FaCog } from 'react-icons/fa';

function FeaturesSection() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                       if(sectionRef.current){
                            sectionRef.current.classList.add('active');
                        }
                    } else {
                          if(sectionRef.current){
                            sectionRef.current.classList.remove('active');
                        }
                    }
                });
            },
            {
                threshold: 0.2,
            }
        );
         if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
       return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);


    return (
        <section className="features-section" ref={sectionRef}>
            <h2>Возможности</h2>
            <div className="features-grid">
            <Feature
                  title="Утилиты"
                  description="Со стандартным набором команд Вы можете посмотреть информацию про участников сервера и про сам сервер, посмотреть аватар пользователя и саму информацию о боте и многое другое!"
                  icon={<FaWrench />}
              />
                <Feature
                    title="Экономика"
                    description="Вы можете стать аристократом по балансу или лидером в топе по уровню среди участников просто общаясь! Если хотите потратить свои сбережения - для вас есть настраиваемый магазин с ролями, но для азартных игроков тоже найдётся местечко!"
                    icon={<FaMoneyBillAlt />}
                />
              <Feature
                 title="Модерация"
                description="Бот поддерживает защиту, с помощью которого создаёт автоматически правила для автомодерации (фильтр запрещённых слов, обычного спама и упоминаний и т.д.), что значительно упрощает модерацию сервера. Кроме этого имеются стандартные команды бан, кик, таймаут и прочее."
                  icon={<FaShieldAlt />}
                />
                <Feature
                    title="Развлечение"
                    description="Есть несколько небольших команд развлечения, такое как много игр, с которыми будет очень весело.
                    "
                    icon={<FaGamepad />}
                />
                 <Feature
                    title="Настройки"
                    description="Lunar — это гибкий конструктор для вашего сервера. Адаптируйте его под свои нужды: билеты, идеи, вопросы, локализация, чат-бот и многое другое для идеального комьюнити."
                   icon={<FaCog />}
                />
            </div>
        </section>
    );
}

export default FeaturesSection;