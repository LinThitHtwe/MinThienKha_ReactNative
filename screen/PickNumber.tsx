import {Text, View, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {numberList} from '../data/numberList';
import {useFetchAnswer} from '../hooks/useFetchAnswer';

const PickNumber = ({route}: any): JSX.Element => {
  const {questionNo, questionName} = route.params;

  const handleFortuneNumberClick = (answerNo: string) => {
    const answerResult = useFetchAnswer(questionNo, answerNo);
    Alert.alert('Answer Result', answerResult);
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.questionText}>{questionName}</Text>
      <View style={styles.numberPickBoxContainer}>
        {numberList.map((number, index) => (
          <TouchableOpacity
            key={index}
            style={styles.gridItem}
            onPress={() => handleFortuneNumberClick(number)}>
            <Text style={styles.numberBlock}>{number}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
  },

  questionText: {
    textAlign: 'center',
    color: '#0B161A',
    width: '80%',
    lineHeight: 25,
    fontSize: 18,
    marginVertical: 20,
  },

  numberPickBoxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 5,
  },
  gridItem: {
    width: '11%',
    padding: 2,
    aspectRatio: 1,
  },
  numberBlock: {
    backgroundColor: '#9BCBDE',
    padding: 10,
    textAlign: 'center',
    fontSize: 14,
    borderRadius: 5,
    height: 38,
    color: '#0B161A',
  },
});

export default PickNumber;
