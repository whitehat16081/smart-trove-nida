import * as React from 'react';
import { TextInput,Text, View, StyleSheet,TouchableOpacity, SafeAreaView, Platform, StatusBar } from 'react-native';
import { ListItem, Avatar, Icon, CheckBox } from 'react-native-elements'



export default class SearchScreen extends React.Component {
  constructor(){
    super();
    this.state ={
      checked : true
    }
  }
   render() {
  return (
<View>
<SafeAreaView style={styles.droidSafeArea} />

  <CheckBox
  size = '20'
  title='Food'
  checkedIcon='dot-circle-o'
  uncheckedIcon='circle-o'
  onPress= {() =>{ this.props.navigation.navigate("LoginScreen")   }}
/>
<CheckBox
  
  title='Education'
  checkedIcon='dot-circle-o'
  uncheckedIcon='circle-o'
  onPress= {() =>{ this.props.navigation.navigate("LoginScreen")   }}
/>
<CheckBox
  
  title='Beauty'
  checkedIcon='dot-circle-o'
  uncheckedIcon='circle-o'
  onPress= {() =>{ this.props.navigation.navigate("LoginScreen")   }}
/>
</View>
  )
 }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
})