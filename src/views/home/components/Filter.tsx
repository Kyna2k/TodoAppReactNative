import {CheckBox} from '@rneui/base';
import {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-svg';
import TitleCheckBox from '../../../common/components/text/TitleCheckBox';

const useStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export const Filter: React.FC = () => {
  const [selectedIndex, setIndex] = useState('ALL');
  return (
    <View style={useStyle.container}>
      <CheckBox
        containerStyle={{
          width: '15%',
          marginStart: 0,
        }}
        size={22}
        center={true}
        title={<TitleCheckBox title={'ALL'}></TitleCheckBox>}
        checked={selectedIndex === 'ALL'}
        onPress={() => setIndex('ALL')}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checkedColor='deepskyblue'
      />
      <CheckBox
        center={true}
        size={22}
        containerStyle={{
          marginStart: 0,
        }}
        title={<TitleCheckBox title={'Completed'}></TitleCheckBox>}
        checked={selectedIndex === 'Completed'}
        onPress={() => setIndex('Completed')}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checkedColor='deepskyblue'

      />
      <CheckBox
        center={true}
        size={22}
        containerStyle={{
          marginStart: 0,
        }}
        title={<TitleCheckBox title={'TO DO'}></TitleCheckBox>}
        checked={selectedIndex === 'TO DO'}
        onPress={() => setIndex('TO DO')}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checkedColor='deepskyblue'

      />
    </View>
  );
};
