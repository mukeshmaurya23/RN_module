// modules/awesome-module/src/CounterComponent.tsx
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CounterComponent = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1);
    };
    const decrementCount = () => {
        setCount(prev => prev - 1)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.counterText}>Count: {count}</Text>
            <Button title="Increment" onPress={incrementCount} />
            <View style={{ paddingTop: 10 }} />
            <Button title='Decrement' onPress={decrementCount} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "red"
    },
    counterText: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default CounterComponent;
