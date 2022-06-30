import { StyleSheet } from 'react-native';

export function boxShadow(
  color = 'black',
  offset = { height: 2, width: 2 },
  radius = 4,
  opacity = 0.2,
) {
  return {
    shadowColor: color,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation: radius,
  };
}

const styles = StyleSheet.create({
  alignCenter: {
    alignItems: 'center',
  },
});

export default styles;
