import {Image, StyleSheet, Text, View} from 'react-native';

const CustomHeader = (): JSX.Element => {
  return (
    <View style={styles.navbar}>
      <Image
        style={styles.navbarImage}
        source={{
          uri: 'https://mintheinkha-lathtaukbaydin.netlify.app/images/mintheinkha_logo.png',
        }}
      />
      <Text style={styles.navTitle}>Min Thein Kha </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#67B2D0',
    borderWidth: 1,
    borderColor: '#4399BD',
    padding: 3,
  },

  navbarImage: {
    width: 45,
    height: 45,
    marginHorizontal: 3,
    marginBottom: 3,
    borderRadius: 20,
  },
  navTitle: {
    color: '#0B161A',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '500',
    marginHorizontal: 6,
  },
});

export default CustomHeader;
