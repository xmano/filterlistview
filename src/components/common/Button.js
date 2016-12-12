
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const Button = (props) => {
    const { viewStyle, textStyle } = stylesVal;
    return (
        <TouchableOpacity style={viewStyle} onPress={props.onPress}>
            <Text style={textStyle}>
                {props.children}
            </Text>
        </TouchableOpacity>
    );
};

const stylesVal = {
    viewStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
        color: '#007aff'
    }
};

export { Button } ;
