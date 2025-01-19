import React from 'react';
import './FeatureList.css';
import Feature from './Feature';

function FeatureList() {
  return (
    <section className="features-section">
      <h2>Особенности Lunar</h2>
      <div className="features-grid">
          <Feature title="Модерация" description="Полный набор инструментов для модерации вашего сервера." />
          <Feature title="Развлечения" description="Игры и развлекательные команды, чтобы поднять настроение." />
          <Feature title="Музыка" description="Слушайте любимую музыку с помощью бота." />
          <Feature title="Полезные инструменты" description="Множество полезных команд для вашего сервера." />
        </div>
    </section>
  );
}

export default FeatureList;