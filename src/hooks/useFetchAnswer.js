import {answers} from '../data/answers';

const burmeseToEnglishMap = {
  '၁': 1,
  '၂': 2,
  '၃': 3,
  '၄': 4,
  '၅': 5,
  '၆': 6,
  '၇': 7,
  '၈': 8,
  '၉': 9,
  '၁၀': 10,
};

const convertBurmeseNumToEnglishNum = burmeseNumber =>
  burmeseToEnglishMap[burmeseNumber] || null;

export const useFetchAnswer = (questionNo, burmeseAnswerNo) => {
  const answerNoInEnglish = convertBurmeseNumToEnglishNum(burmeseAnswerNo);
  const answer = answers.find(
    ans => ans.questionNo === questionNo && ans.answerNo === answerNoInEnglish,
  );
  return answer.answerResult;
};
