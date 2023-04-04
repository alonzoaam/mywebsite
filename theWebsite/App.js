import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';


export default function App() {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}>
      <View style={{flex: 1, backgroundColor: 'lightgray', margin: 20}}>
        <Text style={styles.pageTitle}>Welcome!</Text>
      </View>
      <ScrollView style={{flex: 7, flexDirection: 'row', backgroundColor: 'blue'}}>
        <View style={{backgroundColor: 'lightblue', flexDirection: 'row', margin: 20, width: '90%',}}>
          <View style={{backgroundColor: 'lightblue', marginRight: 895,}}>
            <Text style={styles.header}>About</Text>
            <Text>Hi, my name is Alonzo. This page is a quick rundown of who I am, and my software related endeavours.</Text>
          </View>
          <View style={{backgroundColor: 'lightblue'}}>
            <Image
              style={styles.image}
              source={require('./assets/MeWebsite.jpeg')}
            />
          </View>
        </View>
        <View style={{backgroundColor: 'lightblue', margin: 20}}>
          <Text style={styles.header}>Projects</Text>
        </View>
        <View style={{backgroundColor: 'lightblue', margin: 20}}>
          <Text style={styles.header}>Experience</Text>
        </View>
        <View style={{backgroundColor: 'lightblue', margin: 20}}>
          <Text style={styles.header}>Projects</Text>
        </View>
        <View style={{backgroundColor: 'lightblue', margin: 20}}>
          <Text style={styles.header}>Experience</Text>
        </View>
        <View style={{backgroundColor: 'lightblue', margin: 20}}>
          <Text style={styles.header}>Projects</Text>
        </View>
        <View style={{backgroundColor: 'lightblue', margin: 20}}>
          <Text style={styles.header}>Experience</Text>
        </View>
        <View style={{backgroundColor: 'lightblue', margin: 20}}>
          <Text style={styles.header}>Projects</Text>
        </View>
        <View style={{backgroundColor: 'lightblue', margin: 20}}>
          <Text style={styles.header}>Experience</Text>
        </View>
      </ScrollView>
      {/*write a short bio below*/} 
    </View>
  );
}

const styles = StyleSheet.create({
  pageTitle: {
    fontSize: 150,
    fontStyle: 'bold',
  },
  image: {
    width: 500,
    height: 500,
  },
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
  },
  header: {
    fontSize: 40,
  }
});
