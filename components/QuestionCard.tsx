import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface QuestionCardProps {
  questionNo: number;
  questionName: string;
}
const QuestionCard = ({
  questionNo,
  questionName,
  navigation,
}: QuestionCardProps & {navigation: any}): JSX.Element => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('PickNumber')}>
      <Text style={styles.cardText}>
        {questionNo} . {questionName}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    marginHorizontal: 20,
    marginVertical: 6,
    minHeight: 40,
    maxHeight: 'auto',
    borderRadius: 15,
    borderColor: '#61dafb',
    padding: 10,
    backgroundColor: '#9BCBDE',
    alignItems: 'center',
    flexDirection: 'row',
  },
  cardText: {
    color: '#0B161A',
  },
});

export default QuestionCard;
