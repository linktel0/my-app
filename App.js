import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import * as OnePass from 'react-native-ali-onepass';
import * as wechat from 'react-native-wechat-lib';

export default function App() {
 // console.log(OnePass.RESULT_CODES);
  const onRegisterApp = () => {
        console.log('hello');
        wechat.registerApp('wx7973caefdffba1b8', 'universalLink').then((res) => {
            console.log("registerApp: " + res)
            wechat.getApiVersion().then((num) => {
                console.log("test: " + num)
                setVersionNumber(num)
                // openWXApp().then()
            })
        });                                                                                                                                                                             
    };
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
