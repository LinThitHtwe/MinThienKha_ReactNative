import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import {questions} from '../data/questions';
import QuestionCard from '../components/QuestionCard';
import {useEffect, useState} from 'react';

type Question = {
  questionNo: number;
  questionName: string;
};

const Home = ({navigation}: {navigation: any}): JSX.Element => {
  const totalPages = Math.floor(questions.length / 10);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredQuestions, setFilteredQuestions] = useState<Array<Question>>(
    [],
  );

  useEffect(() => {
    const filtered = questions
      .filter(question =>
        question.questionName.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      .slice(currentPage - 1, currentPage + 9);

    setFilteredQuestions(filtered);
  }, [currentPage, searchQuery]);

  const renderPaginationButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <TouchableOpacity
          key={i}
          style={i === currentPage ? styles.activePagePagination : null}
          onPress={() => setCurrentPage(i)}>
          <Text
            style={
              i === currentPage
                ? styles.activePagePaginationText
                : styles.paginationPageNumberText
            }>
            {i}
          </Text>
        </TouchableOpacity>,
      );
    }

    return buttons;
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.searchInputLable}>မေးခွန်းများရှာရန်</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="မေးခွန်းများရှာရန်"
        placeholderTextColor={'rgba(11, 22, 26,0.2)'}
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
      />
      <ScrollView>
        {filteredQuestions.map(question => (
          <QuestionCard
            key={question.questionNo}
            questionNo={question.questionNo}
            questionName={question.questionName}
            navigation={navigation}
          />
        ))}
        <View
          style={{
            height: 80,
            paddingVertical: 20,
            paddingHorizontal: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity style={styles.prevAndNextBtn}>
            <Text style={styles.prevAndNextText}>နောက်သို့</Text>
          </TouchableOpacity>
          <View style={styles.paginationContainer}>
            <TouchableOpacity style={styles.activePagePagination}>
              <Text style={styles.activePagePaginationText}>1</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.paginationPageNumberText}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.paginationPageNumberText}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.paginationPageNumberText}>•••</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.prevAndNextBtn}>
            <Text style={styles.prevAndNextText}>ရှေ့သို့</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
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
    fontSize: 17,
    fontWeight: '600',
    opacity: 0.8,
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

  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '65%',
    alignItems: 'center',
  },

  prevAndNextBtn: {
    backgroundColor: '#9BCBDE',
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

  prevAndNextText: {
    color: '#0B161A',
    fontWeight: '400',
  },

  activePagePagination: {
    backgroundColor: '#9BCBDE',
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },

  activePagePaginationText: {
    color: '#0B161A',
    fontWeight: '700',
  },
  paginationPageNumberText: {
    color: '#9BCBDE',
    fontWeight: '800',
  },
});

export default Home;
