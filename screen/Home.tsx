import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {questions} from '../data/questions';
import QuestionCard from '../components/QuestionCard';
const Home = ({navigation}: {navigation: any}): JSX.Element => {
  return (
    <ScrollView style={styles.mainContainer}>
      <Text style={styles.searchInputLable}>Search Questions</Text>
      <TextInput style={styles.searchInput} />
      {/* <Button title="Home2" onPress={() => navigation.navigate('Home2')} /> */}
      {questions.map(question => (
        <QuestionCard
          key={question.questionNo}
          questionNo={question.questionNo}
          questionName={question.questionName}
          navigation={navigation}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F1F7FA',
  },

  searchInputLable: {
    color: '#0B161A',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 8,
  },

  searchInput: {
    borderWidth: 1,
    borderColor: '#4399BD',
    padding: 8,
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 10,
    color: '#0B161A',
  },
});

export default Home;
