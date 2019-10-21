import { createAppContainer ,DrawerItems} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {Allcaht ,Alluser} from './../../screen/index'
const TabNavigator = createBottomTabNavigator({
      // Alluser: {
      //   screen:Alluser
      // },
      Allchat:{
        screen:Allcaht
      }
    })
export default createAppContainer(TabNavigator);

