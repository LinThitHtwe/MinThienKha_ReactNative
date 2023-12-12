import {StyleSheet, Text, TextInput} from 'react-native';
import React, {FC} from 'react';

type Props = {
  searchQuery: string;
  setSearchQuery: (searchQueryInput: string) => void;
};

const SearchInput: FC<Props> = ({searchQuery, setSearchQuery}) => {
  return (
    <>
      <Text style={styles.searchInputLable}>မေးခွန်းများရှာရန်</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="မေးခွန်းများရှာရန်"
        placeholderTextColor={'rgba(11, 22, 26,0.2)'}
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
      />
    </>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
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
});
