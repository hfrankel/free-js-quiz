import React from 'react';
import ListCheck from './../assets/icons/list-check.svg';
import Trophy from './../assets/icons/trophy.svg';
import './../assets/styles/homePage.css';

const HomePage = () => {
  return (
    <section>
      <div className="home-page-slug">
        <img src={ListCheck} alt="Checklist icon" />
        <h3>Improve your JavaScript Skills</h3>
      </div>
      <div className="home-page-slug">
        <img src={Trophy} alt="Trophy icon" />
        <h3>Win bragging rights with a top score</h3>
      </div>
    </section>
  );
};

export default HomePage;
