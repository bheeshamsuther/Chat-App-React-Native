import React from 'react';
import { View ,Image ,SafeAreaView} from 'react-native';
import { Header ,Title, Button} from 'native-base';
import {TabNav} from './../Config/navigation'
import {connect} from 'react-redux'

class Main extends React.Component {
  static navigationOptions = ({navigation})=>{ 
    return{
    header:
     <View style={{marginTop: 30,flexDirection: 'row'}}
    >
    <Header style={{ backgroundColor: 'white', height: 60,alignItems: "flex-start" }}>
    <Image  source={{uri:navigation.getParam("photoURL")}}
     style={{ width: 50, height: 50, borderRadius: 50,}}/>
      <Title style={{ color: 'black', fontSize: 20,width: 300,marginTop: 10 }}>{navigation.getParam('name')}</Title>
    </Header>   
       </View>,
      headerBackTitle: null,

  }
}

  componentDidMount (){   
      this.props.navigation.setParams({name: this.props.user.name,photoURL: this.props.user.photoURL})  
    }
  render(){
    return (
      <SafeAreaView style= {{flex: 1}}>
      <TabNav/>
      </SafeAreaView>
      );
    }
}



let mapStateToProps = (state)=> {
  
  return {...state,
      user: state.user
  }
}

export default connect(mapStateToProps,null)(Main);