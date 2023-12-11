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
import {useEffect, useRef, useState} from 'react';

type Question = {
  questionNo: number;
  questionName: string;
};

const Home = ({navigation}: {navigation: any}): JSX.Element => {
  //const totalPages = Math.ceil(questions.length / 10);
  const [totalPages, setTotalPages] = useState(
    Math.ceil(questions.length / 10),
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredQuestions, setFilteredQuestions] = useState<Array<Question>>(
    [],
  );
  const prevSearchQueryRef = useRef<string>('');

  useEffect(() => {
    const filtered = questions.filter(question =>
      question.questionName.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    if (searchQuery !== prevSearchQueryRef.current) {
      setCurrentPage(1);
      prevSearchQueryRef.current = searchQuery;
    }
    setTotalPages(Math.ceil(filtered.length / 10));
    setFilteredQuestions(
      filtered.slice((currentPage - 1) * 10, currentPage * 10),
    );
  }, [currentPage, searchQuery]);
  const renderPaginationButtons = () => {
    return (
      <>
        {currentPage > 2 && (
          <TouchableOpacity
            style={styles.inActivePaginationContainer}
            onPress={() => setCurrentPage(currentPage - 2)}>
            <Text style={styles.paginationPageNumberText}>•••</Text>
          </TouchableOpacity>
        )}
        {currentPage - 1 != 0 && (
          <TouchableOpacity
            style={styles.inActivePaginationContainer}
            onPress={() => setCurrentPage(currentPage - 1)}>
            <Text style={styles.paginationPageNumberText}>
              {currentPage - 1}
            </Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.activePagePagination}>
          <Text style={styles.activePagePaginationText}>{currentPage}</Text>
        </TouchableOpacity>
        {currentPage < totalPages && (
          <TouchableOpacity
            style={styles.inActivePaginationContainer}
            onPress={() => setCurrentPage(currentPage + 1)}>
            <Text style={styles.paginationPageNumberText}>
              {currentPage + 1}
            </Text>
          </TouchableOpacity>
        )}
        {currentPage == 1 && totalPages > 1 && (
          <TouchableOpacity
            style={styles.inActivePaginationContainer}
            onPress={() => setCurrentPage(currentPage + 2)}>
            <Text style={styles.paginationPageNumberText}>
              {currentPage + 2}
            </Text>
          </TouchableOpacity>
        )}

        {currentPage + 1 < totalPages && (
          <TouchableOpacity
            style={styles.inActivePaginationContainer}
            onPress={() => setCurrentPage(currentPage + 2)}>
            <Text style={styles.paginationPageNumberText}>•••</Text>
          </TouchableOpacity>
        )}
      </>
    );
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
          <TouchableOpacity
            style={
              currentPage === 1
                ? styles.disablePrevNextBtn
                : styles.prevAndNextBtn
            }
            onPress={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage == 1}>
            <Text style={styles.prevAndNextText}>နောက်သို့</Text>
          </TouchableOpacity>
          <View style={styles.paginationContainer}>
            {renderPaginationButtons()}
          </View>
          <TouchableOpacity
            style={
              currentPage === totalPages
                ? styles.disablePrevNextBtn
                : styles.prevAndNextBtn
            }
            disabled={currentPage == totalPages}
            onPress={() => setCurrentPage(currentPage + 1)}>
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
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

  inActivePaginationContainer: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
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

  disablePrevNextBtn: {
    backgroundColor: '#9BCBDE',
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    opacity: 0.3,
  },
});

export default Home;
