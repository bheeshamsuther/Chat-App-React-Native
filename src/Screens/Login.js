import React from 'react';
import { StyleSheet, View, TouchableOpacity,Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from '../Config/firebase';
import * as Facebook from 'expo-facebook';
import {currentuser} from './../Config/store/action'
import {connect} from 'react-redux'
import { SocialIcon } from 'react-native-elements'

class Login extends React.Component {
    constructor(){
        super()
        this.loginWithFacebook = this.loginWithFacebook.bind(this)
    }
    static navigationOptions = {
        header: null
    }
    async loginWithFacebook() {


        try {
            const {
                type,
                token,
            } = await Facebook.logInWithReadPermissionsAsync('377491356461745');
            if (type === 'success' && token) {
              let user;
                var credential = await firebase.auth.FacebookAuthProvider.credential(token);
                await firebase.auth().signInAndRetrieveDataWithCredential(credential)
                    .then((result) => {
                        user = {
                          name : result.user.displayName,
                          photoURL : result.user.photoURL,
                          uid: result.user.uid
                        }
                        console.log("User Detail ==>" , result.user.uid)               
                      }).then(()=>{ 
                         firebase.firestore().collection("allUser").doc(user.name).set(user).then(()=>{
                            this.props.currentuser(user)
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
        if(result){
       let user = {
          name : result.providerData[0].displayName,
          photoURL : result.providerData[0].photoURL,
          uid: result.uid
        }
          this.props.currentuser(user)
          this.props.navigation.navigate("MainScreen" , user)
    }
       })
      }
      catch(err){
    console.log(err)
      }
      }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.img}>
                <Image
                            style={{ width: 100, height: 100 }}
                            source={ require('../Image/chatapp.png')}
                        />
                        </View>
                        <View>
                        <Image
                            style={{ width: 180, height: 50 }}
                            source={ require('../Image/text.png')}
                        />
                        </View>
                        <View>

                <SocialIcon
                    title='Sign In With Facebook'
                    button
                    type='facebook'
                    style={{ width: 300 }}
                    onPress={this.loginWithFacebook}
                />
            </View>
               
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img : {
        marginBottom: '10%'

    },
    btn : {
        width : 250,
        height: 100
    }
});
let mapStateToProps = (state)=> {
    return {...state,
        state: state
    }
}

let mapDispatchTOProps = (dispatch) => {
    return {
        currentuser : (user)=> dispatch(currentuser(user))
    }
}
export default connect(mapStateToProps,mapDispatchTOProps)(Login);