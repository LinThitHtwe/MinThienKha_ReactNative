import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import {questions} from '../data/questions';
import QuestionCard from '../components/QuestionCard';
import {FC, useEffect, useRef, useState} from 'react';
import Pagination from '../components/Pagination';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../navigations/type';
import SearchInput from '../components/SearchInput';

type Question = {
  questionNo: number;
  questionName: string;
};

type Props = NativeStackScreenProps<RootStackParamsList, 'HomeScreen'>;

const HomeScreen: FC<Props> = ({navigation}): JSX.Element => {
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

  return (
    <View style={styles.mainContainer}>
      <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <FlatList
        data={filteredQuestions}
        renderItem={({item: question}: any) => (
          <QuestionCard
            key={question.questionNo}
            questionNo={question.questionNo}
            questionName={question.questionName}
            navigation={navigation}
          />
        )}
        keyExtractor={question => question.questionNo.toString()}
      />

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F1F7FA',
  },
});

export default HomeScreen;
