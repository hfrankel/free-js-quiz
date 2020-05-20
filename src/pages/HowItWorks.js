import React from 'react';
import PrimaryButton from './../components/PrimaryButton';
import Arrow from './../assets/icons/arrow-down-right.svg';
import './../assets/styles/howItWorksPage.css';

const HowItWorksPage = () => {
  return (
    <>
      <section>
        <h3>Select the rights answers</h3>
        {/* <img src={Arrow} alt="Arrow" /> */}
        <h3>Get harder questions</h3>
        <h3>Select the wrong answers</h3>
        <h3>Get easier questions</h3>
      </section>
      <section>
        <PrimaryButton buttonTitle="Start Quiz" />
      </section>
    </>
  );
};

export default HowItWorksPage;
