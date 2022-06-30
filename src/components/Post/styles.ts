import { StyleSheet } from 'react-native';
import { POST_ITEM_HEIGHT } from '../../utils/constants';
import { boxShadow } from '../../utils/globalStyles';

const styles = StyleSheet.create({
  parentContainer: {
    padding: 15,
  },
  container: {
    padding: 20,
    borderRadius: 4,
    borderWidth: 1,
  },
  cardContainer: {
    borderColor: 'gray',
    height: POST_ITEM_HEIGHT,
    flexDirection: 'row',
    backgroundColor: '#fff',
    ...boxShadow(),
  },
  textContainer: {
    borderColor: 'lightgray',
    marginTop: 15,
    padding: 15,
    flex: 1,
  },
  name: { fontWeight: 'bold', fontSize: 16 },
  postContainer: { paddingLeft: 15, flex: 1, justifyContent: 'space-around' },
  avatar: {
    width: POST_ITEM_HEIGHT / 2,
    height: POST_ITEM_HEIGHT / 2,
    borderRadius: POST_ITEM_HEIGHT / 4,
  },
});

export default styles;
