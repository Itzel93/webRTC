import React from 'react';
import Question from '../components/question';
import { questions } from '../contents/questions';

const Tester: React.FC = () => {
  return (
    <div>
      {questions.map((item, idx) => {
        return (
          <div key={idx} className="questionBoxItem">
            <Question {...item} id={idx} />
          </div>
        );
      })}
    </div>
  );
};

export default Tester;
