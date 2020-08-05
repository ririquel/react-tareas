import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './Screens/Home';
import {DetailsScreen} from './Screens/Details';
import {AddTaskScreen} from './Screens/AddTask';

const {Navigator, Screen} = createStackNavigator();

function Navegador() {
    return (
        <NavigationContainer>
            <Navigator headerMode="none" initialRouteName="Home">
                <Screen name="Home" component={HomeScreen} />
                <Screen name="Details" component={DetailsScreen} />
                <Screen name="Add" component={AddTaskScreen} />
            </Navigator>
        </NavigationContainer>
    );
}

export default Navegador;
