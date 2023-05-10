import React from "react";
import {Image} from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import FavoriteScreen from "../screens/Favorite";
import Account from "../screens/Account";
import PokedexNavigation from "./PokedexNavigation";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarLabel: "Favoritos",
          title:"Favoritos",
          headerTitleAlign: "center",
          tabBarIcon: ({color,size}) => <Ionicons name="heart-outline" color={color} size={size} />
        }}
      />
      <Tab.Screen name="Pokedex" component={PokedexNavigation} options={{
        tabBarLabel: "",
        title:"Pokedex",
        headerTitleAlign: "center",
        tabBarIcon: () => renderPokeball(),
      }}/>
      <Tab.Screen name="Account" component={Account}  options={{
          tabBarLabel: "Mi Cuenta",
          title:"Mi Cuenta",
          headerTitleAlign: "center",
          tabBarIcon: ({color,size}) => <Ionicons name="person-outline" color={color} size={size} />
        }}
      />
    </Tab.Navigator>
  );
}


function renderPokeball(){
    return(
        <Image
            source={require('../assets/pokeball.png')}
            style={{width: 75, height: 75, top: -15}}
        />
    )
}