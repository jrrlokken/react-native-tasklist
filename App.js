import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';

export default function App() {
  const [enteredInput, setEnteredInput] = useState('');
  const [goals, setGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredInput(enteredText);
  };

  const addGoalHandler = () => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), value: enteredInput },
    ]);
    // setEnteredInput('');
  };

  const generateKey = (pre) => {
    return `${pre}_${new Date().getTime()}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={enteredInput}
          placeholder="Enter A Goal"
          style={styles.mainInput}
          onChangeText={goalInputHandler}
        />
        <Button
          title="ADD"
          style={styles.inputButton}
          onPress={addGoalHandler}
          accessibilityLabel="Add goal"
        />
      </View>
      <FlatList
        data={goals}
        renderItem={(itemData) => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingTop: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  mainInput: {
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 10,
    width: '80%',
  },
  inputButton: {
    borderRadius: 50,
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});
