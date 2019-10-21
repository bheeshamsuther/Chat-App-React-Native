import React from 'react';
import { StyleSheet, Text, View ,SafeAreaView ,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Facebook from 'expo-facebook';
import firebase from './../../config/firebase/firebase'


export default class Login extends React.Component {

static navigationOptions = {
    header: null
}
   logIn = async ()=> {
    alert("hi")
    try {
        const {
            type,
            token,
        } = await Facebook.logInWithReadPermissionsAsync('414176892631722');
        if (type === 'success' && token) {
          let user;
            var credential = await firebase.auth.FacebookAuthProvider.credential(token);
            await firebase.auth().signInAndRetrieveDataWithCredential(credential)
                .then((result) => {
                    user = {
                      name : result.user.displayName,
                      photoURL : result.user.photoURL
                    }
                    console.log("User Detail ==>" , user)               
                   console.log( "===Object", this.props)
                  }).then(()=>{ 
                    console.log("asncjnasj" ,user)
                     firebase.firestore().collection("allUser").doc(user.name).set(user).then(()=>{
                      this.props.navigation.navigate("Home" , user)
                   }
                   )
                    })

                .catch((err) => {
                    console.log('Error==>', err)
                })

        } else {
            // type === 'cancel'
        }
    } catch ({ message }) {
        console.log(`Facebook Login Error: ${message}`);
    }
}
componentDidMount (){
  try {
  firebase.auth().onAuthStateChanged( (result)=>{
    console.log(result.providerData[0].displayName)
   let user = {
      name : result.providerData[0].displayName,
      photoURL : result.providerData[0].photoURL
    }
      this.props.navigation.navigate("Home" , user)
   })
  }
  catch(err){
console.log(err)
  }
  }
  

  render(){
  return (
    <View style={styles.container}>
<Icon.Button
    name="facebook"
    backgroundColor="#3b5998"
    onPress={this.logIn}
  >
    Login with Facebook
  </Icon.Button>
  </View>
  );
}
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    color: 'black',
    marginTop: 240,
  },

});


