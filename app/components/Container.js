import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { View, Button, Text } from 'react-native';

//Screens
import HomeTab from './HomeTab'
import SavedRecipesTab from './SavedRecipesTab'
import UserGuideTab from './UserGuideTab';

//Screen names
const homeName = 'Home'
const savedRecipesName = 'SavedRecipes'
const userGuideName = 'UserGuide'

const Tab = createBottomTabNavigator();


const Container = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName) {
                            iconName = focused ? 'home' : 'home-outline';

                        } else if (rn === savedRecipesName) {
                            iconName = focused ? 'list' : 'list-outline';

                        } else if (rn === userGuideName) {
                            iconName = focused ? 'book' : 'book-outline';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                >

                <Tab.Screen name={homeName} component={HomeTab} />
                <Tab.Screen name={savedRecipesName} component={SavedRecipesTab} />
                <Tab.Screen name={userGuideName} component={UserGuideTab} />

            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Container