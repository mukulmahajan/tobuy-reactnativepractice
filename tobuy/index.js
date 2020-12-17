/*import a library to help create a componenet*/

import React from 'react';
import { View,Text , AppRegistry} from 'react-native';
import Header from './src/components/header';
import AList from './src/components/list';


// create a component

const App = () => {
    return (
        <View style={{flex:1}}>
    <Header headerText={'Tobuy.com'}/>
    <AList />
    </View>
    );
};


// Render it to the device
AppRegistry.registerComponent('tobuy', () => App);
