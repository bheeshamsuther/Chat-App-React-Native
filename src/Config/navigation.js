import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator, Header } from 'react-navigation-stack';
import Login from '../Screens/Login';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import Chat from '../Screens/Chat';
import Home from '../Screens/Home';
import Main from '../Screens/Main'
import Singlechat from './../Screens/Singlechat/Singlechat'
// const TabBarComponent = props => <BottomTabBar {...props} />;

const TabScreens = createBottomTabNavigator({
    Home: {
        screen: Home,
    },
    Chat: {
        screen: Chat
    }
},
);

let stakeNavigation = createStackNavigator({
    Auth: {
        screen: Login,
    },
    MainScreen: {
        screen: TabScreens,
        navigationOptions : {
            header: null
        }
    },
    Singlechat1: {
        screen: Singlechat
    }
},

)

// let AppNavigator = createStackNavigator({ Login: Login });
// let AppStack = createStackNavigator({ MainScreen: Main });
// let Singlechat1 = createStackNavigator({ chatstak: Singlechat});
// let SwitchNav = createAppContainer(createSwitchNavigator({ Auth: AppNavigator, Main: AppStack,chatstak: Singlechat1}))
// let TabNav = createAppContainer(TabScreens)
let SwitchNav = createAppContainer(stakeNavigation)
export {
    SwitchNav,
    // TabNav
};