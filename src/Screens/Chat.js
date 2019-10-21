import React from 'react'
import { View ,Text,Image,TouchableOpacity} from 'react-native'
import firebase from './../Config/firebase'
import {Card, Header ,Title, Button,Content, Picker, Item } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {connect} from 'react-redux'
class Alluser extends React.Component{
    constructor(){
        super()
        this.state={
            users: []
        }
    }

    static navigationOptions = ({navigation})=>{ 
        return{
        header:null,
        
  headerBackTitle: null,
    
      }
    }

    componentDidMount(){
        let {users} = this.state;
       firebase.firestore().collection("allUser").get()
       .then((data)=>{
           data.forEach(value=>{
               let result = value.data();
               users.push(result);
                this.setState({
                    users:users
                })
           })
       }) 
    }
    Logout = ()=> {
        firebase.auth().signOut().then(()=> {
            this.props.navigation.navigate("Login")
        }).catch((error)=> {
        });   
    }
    render(){
        return(

            <View style={{flex : 1}}> 
                <View style={{ marginTop: 25, marginBottom: 10, flexDirection: 'row' }}
                >
                    <Image source={{ uri: this.props.user.photoURL }}
                        style={{ width: 50, height: 50, borderRadius: 50, marginTop: 5 }} />
                    <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold', width: 250, marginTop: 10, marginLeft: 20 }}>{this.props.user.name}</Text>
                    <Content >
                            <Picker mode="dropdown" > 
                                        {/* <Icon name="dots-vertical" size={30} /> */}
                                        <Item key={1} label= "Logout" value={0} />
                            </Picker>
                         </Content>
                </View>

            <View style ={{alignContent: 'center',paddingLeft : 120,backgroundColor: 'white'}}>
            <Text style = {{fontSize : 25, }}>ALL Chat</Text>
            </View>
        </View>
    )
    }
}
let mapStateToProps = (state)=> {
  
    return {...state,
        user: state.user
    }
  }
  
  export default connect(mapStateToProps,null)(Alluser);

