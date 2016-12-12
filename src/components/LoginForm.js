import React, { Component } from 'react';
import { Alert, Text, View, TextInput } from 'react-native';

import firebase from 'firebase';

import { Button, Card, CardSection, Header, Spinner, TextInputBox } from './common';

class LoginForm extends Component {

    state = { email: '', password: '', err: '', loading: false };

    onLogin() {
        const { email, password } = this.state;
        this.setState({err : ' ', loading: true});
        console.log("Login Button Pressed!");

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSucess.bind(this))
            .catch(() => {
                console.log("Auth fail.. creating user.");
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .catch(this.onLoginFail.bind(this));
            });
    }

    onLoginSucess() {
        this.setState({ email: '', password: '',
            loading: false, err: ''
        });
    }

    onLoginFail() {
        this.setState({ loading: false, err: 'Login Failed' });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner />;
        }

        return (
            <Button onPress={this.onLogin.bind(this)}>
                Login
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <TextInputBox 
                        label="Email: "
                        hint="user@gmail.com"
                        autoCorrect={false}
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                     />
                </CardSection>
                    <TextInputBox 
                        label="Password: "
                        hint="password"
                        autoCorrect={false}
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                     />

                <CardSection  />

                <Text style={styles.errTextStyle}>
                    {this.state.err}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }

}

const styles = {
    errTextStyle : {
        color: 'red',
        fontSize: 20,
        alignSelf: 'center',
        lineHeight: 40
    }
}

export default LoginForm;