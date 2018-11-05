import * as React from 'react';
import {
  View, Text, TextInput,
  Button, StyleSheet, Platform,
  TouchableOpacity, FlatList
} from 'react-native';

import ActionSheet from 'react-native-actionsheet'


// {
//   title: '',
//     id: ''
// }

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [{
        id: 1,
        title: "HHiii"
      }],
      textInput: '',
      selectedItem: null,
    }
  }

  actionSheet = React.createRef();

  onChangeText = text => {
    this.setState({
      textInput: text,
    })
  };
  addTodo = () => {
    const { textInput } = this.state;
    if (textInput.trim() === '') return;
    const newTodo = [
      ...this.state.list,
      {
        title: textInput,
        id: Math.random()
      }
    ];
    this.setState({
      list: newTodo,
      textInput: ''
    })
  };

  onItemPress = item => {
    this.setState({
      selectedItem: item.id
    }, () => {
      this.actionSheet.current.show();
    });
  }
  _renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => this.onItemPress(item)}
        style={styles.todoItem}
      >
        <Text>{item.title}</Text>
      </TouchableOpacity>
    )
  };
  _keyExtractor = (item) => item.id+'';

  onActionSheetPress = index => {
    const { list, selectedItem } = this.state;
    if(index === 1) {
      const newList = list.filter(item => item.id !== selectedItem);
      this.setState({
        list: newList,
        selectedItem: null,
      })
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.addForm}>
          <TextInput
            value={this.state.textInput}
            autoFocus
            style={[styles.textInput, styles.applyMargin]}
            placeholder="Add Todo"
            onChangeText={this.onChangeText}
            onSubmitEditing={this.addTodo}
          />
          <TouchableOpacity
            style={styles.applyMargin}
            onPress={this.addTodo}
          >
            <Text>Add</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={this.state.list}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
        <ActionSheet
          ref={this.actionSheet}
          title={'Which one do you like ?'}
          options={['Edit', 'Delete', 'cancel']}
          cancelButtonIndex={2}
          destructiveButtonIndex={1}
          onPress={this.onActionSheetPress}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  applyMargin: {
    margin: 16
  },
  textInput: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 100,
    flex: 1,
  },
  addForm: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  todoItem: {
    paddingVertical: 16,
    paddingHorizontal: 32,
  }
});

export { TodoList };

