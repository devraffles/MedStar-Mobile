import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { colors } from "../../constants/theme";

import { Image } from "react-native";

import icon from "../../constants/icon";

import Home from "../home";
import Calendar from "../calendar";
import Profile from "../profile";

export default function Main() {
    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerTitleAlign: 'center',
                        headerTitle: () => {
                            return (
                                <Image
                                    source={icon.logo}
                                    style={{
                                        width: 151,
                                        height: 40,
                                    }}
                                />
                            );
                        },
                        tabBarShowLabel: false,
                        tabBarIcon: ( { focused } ) => {
                            return (
                                <Image
                                    source={icon.home}
                                    style={{
                                        width: 30,
                                        height: 30,
                                        opacity: focused ? 1 : 0.5
                                    }}
                                />
                            ); 
                        },
                        tabBarStyle: {
                            backgroundColor: colors.gray1
                        }
                    }}
                />
                <Tab.Screen
                    name="Calendar"
                    component={Calendar}
                    options={{
                        headerTitleAlign: 'center',
                        tabBarShowLabel: false,
                        tabBarIcon: ( { focused } ) => {
                            return (
                                <Image
                                    source={icon.calendar}
                                    style={{
                                        width: 28,
                                        height: 28,
                                        opacity: focused ? 1 : 0.5
                                    }}
                                />
                            ); 
                        },
                        tabBarStyle: {
                            backgroundColor: colors.gray1
                        }
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        headerTitleAlign: 'center',
                        tabBarShowLabel: false,
                        tabBarIcon: ( { focused } ) => {
                            return (
                                <Image
                                    source={icon.profile}
                                    style={{
                                        width: 28,
                                        height: 28,
                                        opacity: focused ? 1 : 0.5
                                    }}
                                />
                            ); 
                        },
                        tabBarStyle: {
                            backgroundColor: colors.gray1
                        }
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}