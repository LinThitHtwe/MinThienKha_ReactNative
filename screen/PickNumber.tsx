import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {numberList} from '../data/numberList';

const PickNumber = (): JSX.Element => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.questionText}>
        မိမိ၏ကံဇာတာအညံ့များ ပြေပျောက်ရန်အတွက်လည်းကောင်း၊ လိုအင်ဆန္ဒများ
        ပြည့်ရန်အတွက်လည်းကောင်း ယတြာချေခြင်းနှင့် ဆိုင်သော အဟော။
      </Text>
      <View style={styles.numberPickBoxContainer}>
        {numberList.map((number, index) => (
          <TouchableOpacity key={index} style={styles.gridItem}>
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
  },
});

export default PickNumber;
