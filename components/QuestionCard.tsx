import {StyleSheet, Text, View} from 'react-native';

interface QuestionCardProps {
  questionNo: number;
  questionName: string;
}

const QuestionCard = ({
  questionNo,
  questionName,
}: QuestionCardProps): JSX.Element => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>
        {questionNo} . {questionName}
      </Text>
    </View>
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
