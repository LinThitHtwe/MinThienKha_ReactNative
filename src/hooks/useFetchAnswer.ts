import {answers} from '../data/answers';

type Answer = {
  questionNo: number;
  answerNo: number;
  answerResult: string;
};

type UseFetchAnswer = (
  questionNo: number,
  burmeseAnswerNo: string,
) => string | undefined;

type BurmeseToEnglishMap = {
  [burmeseNumber: string]: number;
};

type ConvertBurmeseNumToEnglishNum = (burmeseNumber: string) => number | null;

const burmeseToEnglishMap: BurmeseToEnglishMap = {
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

const convertBurmeseNumToEnglishNum: ConvertBurmeseNumToEnglishNum =
  burmeseNumber => burmeseToEnglishMap[burmeseNumber] || null;

export const useFetchAnswer: UseFetchAnswer = (questionNo, burmeseAnswerNo) => {
  const answerNoInEnglish = convertBurmeseNumToEnglishNum(burmeseAnswerNo);
  const answer = answers.find(
    (ans: Answer) =>
      ans.questionNo === questionNo && ans.answerNo === answerNoInEnglish,
  );
  return answer?.answerResult;
};
