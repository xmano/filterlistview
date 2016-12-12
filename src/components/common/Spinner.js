
import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const Spinner = (props) => {
    const { viewStyle } = stylesVal;
    return (
        <View style={viewStyle}>
            <ActivityIndicator  size={props.size || 'large'} />
        </View>
    );
};

const stylesVal = {
    viewStyle: {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export { Spinner };
