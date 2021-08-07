import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


export default class Feed extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Explore Pictures!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});