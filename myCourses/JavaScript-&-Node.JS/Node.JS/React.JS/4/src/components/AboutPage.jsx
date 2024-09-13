import React from 'react';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <div className='App'>
      <h1>О наc</h1>
      <Link to="/">Вернуться на главную страницу</Link>
    </div>
  );
}

export default AboutPage;
