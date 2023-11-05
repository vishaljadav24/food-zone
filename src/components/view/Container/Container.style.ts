import {ScaledSheet} from 'react-native-size-matters';
import Color from '../../../utils/Color';

/* The code is exporting a JavaScript object that contains a style definition for a container
component. The style definition is created using the `ScaledSheet.create()` function from the
`react-native-size-matters` library. */
export default ScaledSheet.create({
  container: {
    flex: 1,
    padding: '15@ms',
    backgroundColor: Color.WHITE,
  },
});
