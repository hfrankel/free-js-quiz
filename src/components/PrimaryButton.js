import React from 'react';
import './../assets/styles/primaryButton.css';

const PrimaryButton = (props) => {
  return <button className="primary-button">{props.buttonTitle}</button>;
};

export default PrimaryButton;
