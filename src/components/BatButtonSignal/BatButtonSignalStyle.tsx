import { StyleSheet } from 'react-native';
import { BatLogo } from '../BatLogo/BatLogo';

export const styles = StyleSheet.create({
  button: {
    borderWidth: 5,
    alignItems:'center',
    width: '100%',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black'
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    color: 'white',
  }
});