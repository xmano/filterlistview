
import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
        <View style={stylesVal.containerStyle}>
            { props.children }
        </View>
    );
};

const stylesVal = {
    containerStyle: {
        borderBottomWidth: 2,
        padding: 15,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#444',
        position: 'relative'
    }
};

export { CardSection } ;
