import React, { useState } from 'react';
import './../assets/styles/quiz.css';

const QuizPage = () => {
  const [questionCount, setQuestionCount] = useState(1);

  return (
    <section>
      <div className="question-slug">
        <h3>Q{questionCount}</h3>
        <p>What is the question here?</p>
      </div>
    </section>
  );
};

export default QuizPage;
