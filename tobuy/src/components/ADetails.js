import React from 'react';
import {  Text , View, Image, Linking } from 'react-native';
import Card from'./card';
import CardSection from './CardSection';
import Button from './button';

const ADetail = ({data}) =>{
    const { title,artist,image,url }=data;
    const {
        thumbnailContainerstyle,
        thumbnailstyle,
        headerstyles,
        headertextstyle,
        imagestyle
    }=styles;
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerstyle}>
                    <Image 
                    style={thumbnailstyle}
                    source={{ uri : image }} />
                </View>
                <View style={headerstyles}>
            <Text style={headertextstyle}>{title}</Text>
            <Text>{artist}</Text>
            </View>
            </CardSection>

            <CardSection>
                <Image 
                style={imagestyle}
                source={{uri:image}} />
            </CardSection>

            <CardSection>
                <Button onPress={()=>Linking.openURL(url)} >
                    Buy Now
                </Button>
            </CardSection>
            
        </Card>
    );

};

const styles = {
    headerstyles:{
        flexDirection:'column',
        justifyContent:'space-around'
    },
    headertextstyle:{
        fontSize:18

    },
    thumbnailstyle:{
        height:50,
        width:50
    },
    thumbnailContainerstyle:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        marginRight:10
    },
    imagestyle:{
        height:300,
        flex:1,
        width:null
    }
};

export default ADetail;