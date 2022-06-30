import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width * 0.8;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height,
  },
  textContainer: {
    backgroundColor: '#fff',
    borderRadius: 4,
    flex: 1,
    margin: 15,
  },
  contentContainer: {
    padding: 15,
  },
  avatar: { width, height: width, borderRadius: width / 2, marginBottom: 15 },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 20,
  },
});

export default styles;
