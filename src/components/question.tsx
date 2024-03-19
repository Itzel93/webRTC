import React from 'react';
import { TquestionContent } from '../types';
import { questions } from '../contents/questions';

type questionType = TquestionContent & {
  id: number;
};

const Question: React.FC<questionType> = ({ question, example, id }) => {
  const [userAnswers, setUserAnswers] = React.useState<Map<any, any> | null>(
    null
  );

  const onClickAnswerItem = (questionNum: number, answer: number) => {
    setUserAnswers((prev) => new Map(prev).set(questionNum, answer));
  };

  React.useEffect(() => {
    const answers = new Map();
    questions.forEach((_, idx) => {
      answers.set(idx + 1, '');
    });
    setUserAnswers(answers);
  }, []);

  if (userAnswers)
    return (
      <div>
        <div
          style={{ display: 'flex', flexDirection: 'row', marginBottom: 18 }}
        >
          <p className="questionText"> {id + 1 + '.'}&nbsp;</p>
          <p className="questionText"> {question}</p>
        </div>
        {example.map((item, idx) => {
          const questionNum = id + 1;
          const answerItemNum = idx + 1;
          return (
            <div
              key={idx}
              onClick={() => onClickAnswerItem(questionNum, answerItemNum)}
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginBottom: 12,
              }}
            >
              <div>
                <div
                  className={`radioBtn 
                  ${
                    userAnswers.get(questionNum) == answerItemNum
                      ? 'selected'
                      : 'unselected'
                  }`}
                />
              </div>
              <p
                style={{
                  fontFamily: 'Regular',
                }}
              >
                &ensp;{idx + 1}.&nbsp;{item}
              </p>
            </div>
          );
        })}
      </div>
    );
};

export default Question;
