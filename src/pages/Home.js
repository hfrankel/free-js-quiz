import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from './../components/PrimaryButton';
import ListCheck from './../assets/icons/list-check.svg';
import Trophy from './../assets/icons/trophy.svg';
import './../assets/styles/homePage.css';

const HomePage = () => {
  return (
    <>
      <div className="home-page-grid">
        <section className="home-page-main">
          <div className="home-page-slug">
            <img src={ListCheck} alt="Checklist icon" />
            <h3>Improve your JavaScript Skills</h3>
          </div>
          <div className="home-page-slug">
            <img src={Trophy} alt="Trophy icon" />
            <h3>Win bragging rights with top score</h3>
          </div>
        </section>
        <section className="home-page-buttons">
          <Link to="/howitworks">
            <PrimaryButton buttonTitle="How It Works" />
          </Link>
          <PrimaryButton buttonTitle="Leaderboard" />
        </section>
      </div>
    </>
  );
};

export default HomePage;
