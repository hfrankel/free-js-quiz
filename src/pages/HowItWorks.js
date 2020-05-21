import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from './../components/PrimaryButton';
// import Arrow from './../assets/icons/arrow-down-right.svg';
import './../assets/styles/howItWorksPage.css';

const HowItWorksPage = () => {
  return (
    <>
      <section>
        <h3>Select the rights answers</h3>
        {/* <img src={Arrow} alt="Arrow" /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-arrow-down-right"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <line x1="7" y1="7" x2="17" y2="17" />
          <polyline points="17 8 17 17 8 17" />
        </svg>
        <h3>Get harder questions</h3>
        <h3>Select the wrong answers</h3>
        <h3>Get easier questions</h3>
      </section>
      <section>
        <Link to="/quiz">
          <PrimaryButton buttonTitle="Start Quiz" />
        </Link>
      </section>
    </>
  );
};

export default HowItWorksPage;
