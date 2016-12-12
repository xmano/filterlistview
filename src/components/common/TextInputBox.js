
import React from 'react';
import { Text, TextInput, View } from 'react-native';

const TextInputBox = (props) => {
    const { containerStyle, labelStyle, inputStyle } = stylesVal;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>
                {props.label}
            </Text>
            <TextInput
                style={inputStyle}
                autoCorrect={props.autoCorrect}
                placeholder={props.hint}
                secureTextEntry={props.secureTextEntry}
                value={props.value}
                onChangeText={props.onChangeText}
            />            
        </View>
    );
};

const stylesVal = {
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        height: 40,
        alignItems: 'center'
    },
    labelStyle: {
        flex: 1,
        fontSize: 18,
        paddingLeft: 10,
        color: '#000'
    },
    inputStyle: {
        flex: 3,
        fontSize: 18,
        lineHeight: 23,
        paddingRight: 5,
        paddingLeft: 2,
        color: '#000'
    }    
};

export { TextInputBox } ;
