import {Text, View, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {numberList} from '../data/numberList';
import {useFetchAnswer} from '../hooks/useFetchAnswer';

const PickNumber = ({route, navigation}: any): JSX.Element => {
  const {questionNo, questionName} = route.params;

  const handleFortuneNumberClick = (answerNo: string) => {
    const answerResult = useFetchAnswer(questionNo, answerNo);
    Alert.alert(
      'လက်ထောက်အဖြေ',
      answerResult,
      [
        {
          text: 'အခြားမေးခွန်းများသို့',
          onPress: () => {
            navigation.navigate('Home');
          },
        },
        {
          text: 'ပြန်ထောက်ရန်',
          onPress: () => {},
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
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
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.backBtnText}>ပြန်သွားရန်</Text>
      </TouchableOpacity>
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
    fontWeight: '800',
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
  backBtn: {
    width: '40%',
    marginTop: 60,
    backgroundColor: '#7bb7d1',
    padding: 8,
    borderRadius: 10,
  },
  backBtnText: {
    color: '#0B161A',
    fontWeight: '300',
    textAlign: 'center',
  },
});

export default PickNumber;
