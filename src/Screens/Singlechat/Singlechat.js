import React from 'react'
import {KeyboardAvoidingView,Text,View,Image,YellowBox} from 'react-native'
import { Header ,Title,} from 'native-base';
import { GiftedChat } from 'react-native-gifted-chat'
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from './../../Config/firebase'
import {connect} from 'react-redux'
import _ from 'lodash';
YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
    if (message.indexOf('Setting a timer') <= -1) {
        _console.warn(message);
    }
};
class Chat extends React.Component {
constructor(){
  super()
  this.state = {
    messages: [],
  }
}
 static navigationOptions = {
    header: null
}
  componentDidMount = async ()=> {
let allmessage = []
    let uid = this.props.navigation.state.params.chat.uid;
    let cuid = this.props.navigation.state.params.cureantuser.uid;

console.log( "user" ,uid)
console.log("chat",cuid)

   await firebase.firestore().collection(cuid).where("chatuid" ,"==" , uid)
    .get()
    .then((data)=>{
        data.forEach(value=>{
            let result = value.data();
        
            result.createdAt = result.createdAt.toDate()

            console.log(result.createdAt)
            allmessage.push(result);
        })
    }) 


    await firebase.firestore().collection(uid).where("chatuid" ,"==" , cuid)
    .get()
    .then((data)=>{
        data.forEach(value=>{
            let result = value.data();
            console.log("userrjknjkbjhjkbhb",result)
            result._id = 1,
            result.user._id = 2
            console.log(result.chat)
            result.createdAt = result.createdAt.toDate()
            allmessage.push(result);
         
        })
    }) 
    console.log(allmessage)
   await allmessage.sort(function(a, b){return b.createdAt - a.createdAt});
   console.log(allmessage)
    await this.setState({
      messages: allmessage
    })
  
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))

let uid = this.props.navigation.state.params.chat.uid;
let cuid = this.props.navigation.state.params.cureantuser.uid;

messages[0].useruid = cuid
messages[0].chatuid = uid,
messages[0].user.avatar=  this.props.navigation.state.params.cureantuser.photoURL
    firebase.firestore().collection(cuid).add(messages[0])
  }

  render() {
    console.log("knknjknnjbj",this.state.messages)
    return (
        <View style={{flex : 1}}> 
        <View style={{marginTop: 25,marginBottom: 10}}
                >
                <Header style={{ backgroundColor: 'white', height: 60,alignItems: "flex-start" }}>
                <TouchableOpacity onPress = {()=> this.props.navigation.goBack()}>
                <Image   style={{ width: 20, height: 20, marginTop : 15,marginLeft :10,marginRight : 10}} source ={require("./../../Image/icons8-back-26.png")} />
               </TouchableOpacity>
                <Image source={{uri:this.props.navigation.state.params.chat.photoURL}}
                 style={{ width: 50, height: 50, borderRadius: 50,}}/>
                  <Title style={{ color: 'black', fontSize: 18,fontWeight: 'bold',width: 250,marginTop: 10}}>{this.props.navigation.state.params.chat.name}</Title>
                </Header>   
                   </View>
        
                    <View style ={{alignContent: 'center',paddingLeft : 120,backgroundColor: 'white'}}>
                    </View>
         <KeyboardAvoidingView style={{flex: 2}} behavior="padding" enabled>
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
            _id: 1,
        }}
        />
      </KeyboardAvoidingView>
        </View>
    )
  }
}


  export default Chat;