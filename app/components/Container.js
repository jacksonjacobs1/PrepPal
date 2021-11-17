import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import {Ionicons} from 'react-native-vector-icons/Ionicons';
import {Ionicons} from '@expo/vector-icons';
import { useAuth } from '../firebaseApp';

import { View, Button, Text } from 'react-native';

//Screens
import HomeTab from './HomeTab'
import SavedRecipesTab from './SavedRecipesTab'
import SearchTab from './SearchTab'
import UserGuideTab from './UserGuideTab';
import ProfileTab from './ProfileTab';
import Login from './Login';

//Screen names
const homeName = 'Home'
const savedRecipesName = 'Saved Recipes'
const searchTabName = 'Find New Recipe'
const userGuideName = 'User Guide'
const profileName = 'Profile'

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

                        } else if (rn === searchTabName) {
                            iconName = focused ? 'search' : 'search-outline';

                        } else if (rn === userGuideName) {
                            iconName = focused ? 'book' : 'book-outline';

                        } else if (rn == profileName) {
                          iconName = focused ? 'person' : 'person-outline';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                >

                <Tab.Screen name={homeName} component={HomeTab} />
                <Tab.Screen name={savedRecipesName} component={SavedRecipesTab} />
                <Tab.Screen name={searchTabName} component={SearchTab} />
                <Tab.Screen name={userGuideName} component={UserGuideTab} />
                <Tab.Screen name={profileName} component={ProfileTab} />

            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Container