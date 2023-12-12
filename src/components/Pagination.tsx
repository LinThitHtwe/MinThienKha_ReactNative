import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';

type Props = {
  currentPage: number;
  setCurrentPage: (pageNumber: number) => void;
  totalPages: number;
};

const Pagination: FC<Props> = ({currentPage, setCurrentPage, totalPages}) => {
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
          currentPage === 1 ? styles.disablePrevNextBtn : styles.prevAndNextBtn
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
  );
};

export default Pagination;

const styles = StyleSheet.create({
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
