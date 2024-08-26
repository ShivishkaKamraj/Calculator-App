import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState(null);
  const [operation, setOperation] = useState('');

  const calculate = () => {
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);
    
    if (isNaN(num1) || isNaN(num2)) {
      setResult('Invalid input');
      return;
    }

    let res;
    switch (operation) {
      case '+':
        res = num1 + num2;
        break;
      case '-':
        res = num1 - num2;
        break;
      case '*':
        res = num1 * num2;
        break;
      case '/':
        res = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
        break;
      default:
        res = 'Select an operation';
    }

    setResult(res);
  };

  const handleOperation = (op) => {
    setOperation(op);
    calculate();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Calculator</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter number"
          value={input1}
          onChangeText={setInput1}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter number"
          value={input2}
          onChangeText={setInput2}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.operationButton}
          onPress={() => handleOperation('+')}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.operationButton}
          onPress={() => handleOperation('-')}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.operationButton}
          onPress={() => handleOperation('*')}
        >
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.operationButton}
          onPress={() => handleOperation('/')}
        >
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>Result: {result !== null ? result : 'Enter numbers and select an operation'}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginHorizontal: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  operationButton: {
    width: 50,
    height: 50,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
  },
  resultContainer: {
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
  },
});

export default App;

