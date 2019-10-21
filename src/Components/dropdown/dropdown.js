import React, { Component } from 'react';
import {Content, Picker, Item } from 'native-base';

class Example extends Component {

//   onClickButton = () => {
//       this.setState({
//           toggleDropdown: !this.state.toggleDropdown
//       })
//   }
  render() {
    return (
      
                        <Content >
                            <Picker mode="dropdown" > 
                                        <Item key={1} label={"Logout"} value={0} />
                            </Picker>
                         </Content>
            
    );
  }
}

export default Example