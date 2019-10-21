import { createAppContainer ,DrawerItems} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {Home ,Login} from './../../screen/index'

const MyStackNavigator = createStackNavigator({
 Ligin : {
     screen : Login
 },
 Home : {
   screen : Home
 }
  },    
  );



export default createAppContainer(MyStackNavigator);

