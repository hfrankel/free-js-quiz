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
          width="129"
          height="142"
          viewBox="0 0 129 142"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M127.245 120.691C127.486 120.556 127.571 120.251 127.436 120.01L125.233 116.086C125.097 115.846 124.793 115.76 124.552 115.895C124.311 116.03 124.225 116.335 124.361 116.576L126.319 120.064L122.832 122.022C122.591 122.157 122.505 122.462 122.64 122.703C122.776 122.944 123.08 123.029 123.321 122.894L127.245 120.691ZM24.6775 2.03927C27.6185 39.366 35.3211 64.0732 51.267 81.9422C67.2051 99.8024 91.3118 110.754 126.865 120.736L127.135 119.773C91.618 109.801 67.7506 98.9118 52.0131 81.2764C36.2835 63.6498 28.6091 39.2068 25.6745 1.96073L24.6775 2.03927Z"
            fill="black"
          />
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
