import React from 'react';
import ReactDOM from 'react-dom/client';
import { StyleSheet, Text, View } from 'react-native';

const Home = () => {
    return (
    <View style={{height: '100%'}}>
        <View
          style={{
            height: '15%',
            backgroundColor: 'powderblue',
          }}
        />
        <View
          style={{
            width: '66%',
            height: '35%',
            backgroundColor: 'skyblue',
          }}
        />
        <View
          style={{
            width: '33%',
            height: '50%',
            backgroundColor: 'steelblue',
          }}
        />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    test: {
        backgroundColor: 'black',
        height: '100%',
    },
    green: {
        backgroundColor: 'green',
        flex: '50%',
    },
    main: {
        flex: 1,
    },
    topBar: {
        backgroundColor: 'gainsboro',
        flex: 1,
    },
    content: {
        width: '100%',
        backgroundColor: 'lightblue',
        flex: 2,
    },
    header: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 45,
        textAlign: 'left',
    },
    contentHeader: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 35,
        textAlign: 'left',
    },
    contentText: {
        color: 'black',
        fontSize: 25,
        textAlign: 'left',
        padding: 15,
    },
  });

export default Home;