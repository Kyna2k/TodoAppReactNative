import {Text, View, StyleSheet, SafeAreaView, FlatList, FlatListProps, ListRenderItem} from 'react-native';
import {Container} from '../../common/components/container/Container';
import {Search} from './components/Search';
import {useState} from 'react';
import {Filter} from './components/Filter';
import {TextInput} from '../../common/components/textinput/TextInput';
import { CheckBox } from '@rneui/base';
import TitleCheckBox from '../../common/components/text/TitleCheckBox';
import AddToDo from './components/AddTodo';
import { useDispatch,useSelector } from 'react-redux';
import { TODO } from '../../redux/reducer';
import { GetListToDo } from './selector/selector';

const useStyle = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 20,
    alignSelf: 'center',
    marginVertical: 20,
    fontWeight: 'bold',
  },
  textSubTitle: {
    color: 'black',
    fontSize: 16,
    marginVertical: 10,
    fontWeight: '500',
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
  flatList : {
    flex : 1
  }
});




const HomeScreen: React.FC = () => {
  const data = useSelector(GetListToDo);
  const [checked, setChecked] = useState(data);
  const renderItem : ListRenderItem<TODO> = ({item,index}) => {
    const handleCheckTODO = () =>{
      item.status = !item.status
      checked[index] = item,
      setChecked([...checked]);
    }
    return (
      <View>
        <CheckBox
          checked={item.status}
          onPress={handleCheckTODO}
          // Use ThemeProvider to make change for all checkbox
          iconType="material-community"
          checkedIcon="checkbox-marked"
          uncheckedIcon="checkbox-blank-outline"
          checkedColor="deepskyblue"
          containerStyle={{
            width : '100%',
            padding: 0,
            marginStart : 0,
            justifyContent: 'flex-start',
          }}
          
          title={<TitleCheckBox title={item.name}/>}
        />
      </View>
    );
  };

  return (
    <Container>
      <Text style={useStyle.title}>TODO APP WITH REDUX TOOL KIT</Text>
      <Text style={useStyle.textSubTitle}>Search</Text>
      <Search />
      <Text style={useStyle.textSubTitle}>Filter By Status</Text>
      <Filter />
      <Text style={useStyle.textSubTitle}>List TODO</Text>
      <FlatList 
        style={useStyle.flatList}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <AddToDo/>
    </Container>
  );
};
export default HomeScreen;
