import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import PokedexScreen from "../screens/Pokedex";
import PokemonScreen from "../screens/Pokemon";

const Stack = createNativeStackNavigator();

export default function PokedexNavigation(){
    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false, title:""}} name="PokedexStack" component={PokedexScreen}/>
            <Stack.Screen options={{headerShown: false, title:""}} name="PokemonStack" component={PokemonScreen}/>
        </Stack.Navigator>
    )
}