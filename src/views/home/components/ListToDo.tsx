import { FlatList, ListRenderItem, View } from "react-native";
import TitleCheckBox from "../../../common/components/text/TitleCheckBox";
import { CheckBox } from "@rneui/base";
import { useDispatch, useSelector } from "react-redux";
import {  todoRemainingSelector } from "../../../redux/selector";
import { TODO } from "../../../redux/reducer";
import { updateTodo } from "../../../redux/slice/todolistslice";
export const ListTodo = () => {
  const data = useSelector(todoRemainingSelector);
  const dispatch = useDispatch();
  const renderItem: ListRenderItem<TODO> = ({item, index}) => {
    const handleCheckTODO = () => {
      item.status = !item.status;
      console.log(item);
      dispatch(updateTodo(item));
    };
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
            width: '100%',
            padding: 0,
            marginStart: 0,
            justifyContent: 'flex-start',
          }}
          title={<TitleCheckBox title={item.name} />}
        />
      </View>
    );
  };

  return (
    <FlatList
      style={{ flex : 1 }}
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
    />
  );
};
