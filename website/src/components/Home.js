import React from 'react';
import ReactDOM from 'react-dom/client';
import { Text, View } from 'react-native';

const Home = () => {
    return (
        <View 
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                color: 'blue',
            }}>
            <Text>Hello</Text>
        </View>
    );
};

export default Home;